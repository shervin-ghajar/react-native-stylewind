#!/usr/bin/env node
import { ROOT_PATH } from '../configs/constatns';
import chalk from 'chalk';
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { pathToFileURL } from 'url';

// Define the path to your generated styles file
const generatedUtilitiesPath = path.resolve(ROOT_PATH, 'utilities.js');

// Function to check if the generated utilities file exists
const checkUtilitiesFileExists = (filePath: string): void => {
  if (!fs.existsSync(filePath)) {
    throw new Error(`${filePath} does not exist`);
  }
  execSync('npx generate-rn-stylewind');
};

// Function to import the generated utilities
const importGeneratedUtilities = async (filePath: string): Promise<Record<string, unknown>> => {
  const module = await import(pathToFileURL(filePath).href);
  return module.utilities; // Access the 'utilities' export
};

// Function to collect used styles from source files
const collectUsedStyles = (sourceFiles: string[]): Set<string> => {
  const usedStyles = new Set<string>();
  const styleRegex = /styles\(\[([^\]]*)\]\)/g; // Regex to match styles([...])

  sourceFiles.forEach((filePath) => {
    const data = fs.readFileSync(filePath, 'utf8');
    let match;

    while ((match = styleRegex.exec(data)) !== null) {
      const args = match[1].split(',').map((arg) => arg.trim().replace(/['"]/g, ''));
      args.forEach((arg) => usedStyles.add(arg));
    }
  });

  return usedStyles;
};

// Function to filter the generated utilities based on used styles
const filterUtilities = (
  generatedUtilities: Record<string, unknown>,
  usedStyles: Set<string>,
): Record<string, unknown> => {
  const filteredUtilities: Record<string, unknown> = {};
  usedStyles.forEach((key) => {
    if (generatedUtilities?.[key]) {
      filteredUtilities[key] = generatedUtilities[key];
    }
  });
  return filteredUtilities;
};

// Function to update the utilities file with filtered data
const updateUtilitiesFile = (
  filePath: string,
  filteredUtilities: Record<string, unknown>,
): void => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the file:', err);
      return;
    }

    const updatedUtilities = data.replace(
      /(var utilities =)[\s\S]*?(;)/,
      `$1 ${JSON.stringify(filteredUtilities, null, 4)}$2`,
    );

    fs.writeFile(filePath, updatedUtilities, 'utf8', (err) => {
      if (err) {
        console.error('Error writing updated utilities:', err);
        return;
      }
      console.log(chalk.greenBright('Theme Tree-Shake Completed!'));
    });
  });
};

// Function to recursively get all .tsx and .js files in a directory
const getAllSourceFiles = (dir: string): string[] => {
  let results: string[] = [];
  const list = (fs.readdirSync(dir) || []).filter((d) => !['node_modules', 'dist'].includes(d));

  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    // if(["node_modules"].includes(filePath))
    if (stat && stat.isDirectory()) {
      // Recursively get files from subdirectories
      results = results.concat(getAllSourceFiles(filePath));
    } else if (file.endsWith('.tsx') || file.endsWith('.js')) {
      // Add .tsx and .js files to the results
      results.push(filePath);
    }
  });

  return results;
};

// Main function to execute the script
(async () => {
  try {
    checkUtilitiesFileExists(generatedUtilitiesPath);
    const generatedUtilities = await importGeneratedUtilities(generatedUtilitiesPath);

    // Get all .tsx and .js files in the project directory
    const sourceFiles = getAllSourceFiles(process.cwd());
    const usedStyles = collectUsedStyles(sourceFiles);
    const filteredUtilities = filterUtilities(generatedUtilities, usedStyles);
    updateUtilitiesFile(generatedUtilitiesPath, filteredUtilities);
  } catch (error) {
    console.error('Error loading generated utilities:', error);
    process.exit(1);
  }
})();

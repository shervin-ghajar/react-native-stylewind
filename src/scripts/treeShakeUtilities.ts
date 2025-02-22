#!/usr/bin/env node
import chalk from 'chalk';
import fs from 'fs';
import path from 'path';
import { Project, Node, SyntaxKind } from 'ts-morph';
import { pathToFileURL } from 'url';

// Define the path to your generated styles file
const generatedUtilitiesPath = path.resolve(__dirname, 'utilities.js');

(async () => {
  try {
    if (!fs.existsSync(generatedUtilitiesPath))
      throw new Error(`${generatedUtilitiesPath} not exists`);
    const module = await import(pathToFileURL(generatedUtilitiesPath).href);
    const generatedUtilities: Record<string, unknown> = module.u; // Access the 'utilities' export

    // Initialize a set to keep track of used styles
    const usedStyles = new Set<string>();

    // Create a new project
    const project = new Project({
      tsConfigFilePath: 'tsconfig.json', // Adjust this path as needed
    });

    // Get all TSX files in the project
    const sourceFiles = project.getSourceFiles(['**/*.tsx', '**/*.js']);

    sourceFiles.forEach((sourceFile) => {
      // Find all calls to the styles function
      const styleCalls = sourceFile.getDescendantsOfKind(SyntaxKind.CallExpression);

      styleCalls.forEach((call) => {
        const expression = call.getExpression();
        if (expression.getText() === 'styles') {
          const args = call.getArguments();
          args.forEach((arg) => {
            // Check if arg is an ArrayLiteralExpression
            if (Node.isArrayLiteralExpression(arg)) {
              const elements = arg.getElements();
              elements.forEach((element) => {
                // Check if element is a StringLiteral
                if (Node.isStringLiteral(element)) {
                  usedStyles.add(element.getText().replace(/['"]/g, '')); // Remove quotes
                }
              });
            }
          });
        }
      });
    });
    // Filter the generated styles to keep only the used ones
    const filteredUtilities: Record<string, unknown> = {};
    for (const [key, value] of Object.entries(generatedUtilities)) {
      if (usedStyles.has(key)) filteredUtilities[key] = value;
    }

    /* ------------------------------ Rewrite file ------------------------------ */
    fs.readFile(generatedUtilitiesPath, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading the file:', err);
        return;
      }

      // Replace the existing variables with new data
      const updatedUtilities = data.replace(
        /(var utilities =)[\s\S]*?(;)/,
        `$1 ${JSON.stringify(filteredUtilities, null, 4)}$2`,
      );

      // Write the updated data back to the file
      fs.writeFile(generatedUtilitiesPath, updatedUtilities, 'utf8', (err) => {
        if (err) {
          console.error('Error generate utilities:', err);
          return;
        }
      });
      console.log(chalk.greenBright('Theme Tree-Shake Completed!'));
    });
  } catch (error) {
    console.error('Error loading generated utils:', error);
    process.exit(1);
  }
})();

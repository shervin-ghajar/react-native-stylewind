var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import chalk from 'chalk';
import fs from 'fs';
import { resolve } from 'path';
import { Project, Node, SyntaxKind } from 'ts-morph';
// Define the path to your generated styles file
const generatedUtilitiesPath = resolve("./src/theme/configs/generated/utilities/utilities.ts");
// Load the generated styles using dynamic import
let generatedUtilities;
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        const module = require(generatedUtilitiesPath);
        generatedUtilities = module.utilities; // Access the 'utilities' export
    }
    catch (error) {
        console.error('Error loading generated utils:', error);
        process.exit(1);
    }
    // Initialize a set to keep track of used styles
    const usedStyles = new Set();
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
    const filteredUtilities = {};
    for (const [key, value] of Object.entries(generatedUtilities)) {
        if (usedStyles.has(key))
            filteredUtilities[key] = value;
    }
    /* ------------------------------ Rewrite file ------------------------------ */
    // Rewrite the filtered utils back to the generated utils file
    const shakenUtilitiesPath = './src/theme/configs/generated/utilities/shakenUtilities.ts';
    const warningText = `/**\n* AUTO GENERATED\n* <---DO NOT MODIFY THIS FILE--->\n*/\n\n`;
    try {
        fs.writeFileSync(shakenUtilitiesPath, `${warningText}\nexport const utilities = ${JSON.stringify(filteredUtilities, null, 2)};\n`);
        console.log(chalk.greenBright('Theme Tree-Shake Completed.'));
    }
    catch (error) {
        console.error('Error writing filtered styles:', error);
    }
}))();

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const fs_1 = __importDefault(require("fs"));
const path_1 = require("path");
const ts_morph_1 = require("ts-morph");
// Define the path to your generated styles file
const generatedUtilitiesPath = (0, path_1.resolve)("./src/theme/configs/generated/utilities/utilities.ts");
// Load the generated styles using dynamic import
let generatedUtilities;
(async () => {
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
    const project = new ts_morph_1.Project({
        tsConfigFilePath: 'tsconfig.json', // Adjust this path as needed
    });
    // Get all TSX files in the project
    const sourceFiles = project.getSourceFiles(['**/*.tsx', '**/*.js']);
    sourceFiles.forEach((sourceFile) => {
        // Find all calls to the styles function
        const styleCalls = sourceFile.getDescendantsOfKind(ts_morph_1.SyntaxKind.CallExpression);
        styleCalls.forEach((call) => {
            const expression = call.getExpression();
            if (expression.getText() === 'styles') {
                const args = call.getArguments();
                args.forEach((arg) => {
                    // Check if arg is an ArrayLiteralExpression
                    if (ts_morph_1.Node.isArrayLiteralExpression(arg)) {
                        const elements = arg.getElements();
                        elements.forEach((element) => {
                            // Check if element is a StringLiteral
                            if (ts_morph_1.Node.isStringLiteral(element)) {
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
        fs_1.default.writeFileSync(shakenUtilitiesPath, `${warningText}\nexport const utilities = ${JSON.stringify(filteredUtilities, null, 2)};\n`);
        console.log(chalk_1.default.greenBright('Theme Tree-Shake Completed.'));
    }
    catch (error) {
        console.error('Error writing filtered styles:', error);
    }
})();

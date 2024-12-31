"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
// Define the path to your dist directory
const distDir = './dist';
// This function adds file extensions to import paths in the provided file
function addExtensionsToImports(filePath) {
    // Read the file content
    const content = fs_1.default.readFileSync(filePath, 'utf-8');
    // Use a regular expression to find import statements that do not already have extensions
    const updatedContent = content.replace(/import\s+(?:.*\s+from\s+)?['"](.*)['"];/g, (match, p1) => {
        // If the import already contains a file extension, return the match
        if (p1.includes('.'))
            return match;
        // Otherwise, add a .ts extension for TypeScript files
        return `import ${match.slice(6, -2)}'${p1}.ts';`; // You can change .ts to .js if needed
    });
    // Write the modified content back to the file
    fs_1.default.writeFileSync(filePath, updatedContent, 'utf-8');
}
// This function recursively scans through the dist directory and modifies all files
function processDistDirectory(directory) {
    // Read the contents of the dist directory
    const files = fs_1.default.readdirSync(directory);
    files.forEach((file) => {
        const fullPath = path_1.default.join(directory, file);
        const stat = fs_1.default.statSync(fullPath);
        // If it's a directory, recurse into it
        if (stat.isDirectory()) {
            processDistDirectory(fullPath);
        }
        else if (file.endsWith('.js') || file.endsWith('.ts')) {
            // Modify JavaScript or TypeScript files
            addExtensionsToImports(fullPath);
        }
    });
}
// Run the script after the build process
processDistDirectory(distDir);
console.log('File extensions added to imports.');

// watchTheme.ts
// To run the style generation command
import { PROJECT_ROOT_PATH } from '../configs/constatns';
import { exec } from 'child_process';
import chokidar from 'chokidar';
const regenerateStylesCommand = 'npm run generate:theme'; // Command to regenerate styles
// Initialize file watcher
export const themeConfigWatcher = () => {
    console.log('themeConfigWatcher');
    const watcher = chokidar.watch(PROJECT_ROOT_PATH, {
        persistent: true,
        ignoreInitial: true, // Avoid triggering on initial load
    });
    watcher.on('change', (path) => {
        console.log(`Detected change in ${path}. Regenerating styles...`);
        exec(regenerateStylesCommand, (err, stdout, stderr) => {
            if (err) {
                console.error(`Error during style regeneration: ${stderr}`);
                return;
            }
            console.log(`Styles regenerated successfully: ${stdout}`);
        });
    });
    console.log(`Watching for changes in ${PROJECT_ROOT_PATH}...`);
};

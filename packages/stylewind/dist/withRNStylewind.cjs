"use strict";var e=require("path"),n=require("url"),r=require("child_process"),t=require("fs"),o="undefined"!=typeof document?document.currentScript:null;const i=e.resolve(process.cwd());e.resolve(n.fileURLToPath("undefined"==typeof document?require("url").pathToFileURL(__filename).href:o&&"SCRIPT"===o.tagName.toUpperCase()&&o.src||new URL("withRNStylewind.cjs",document.baseURI).href),"../");module.exports=function(n){if("production"===process.env.NODE_ENV){console.log("[Stylewind]: Production build detected. Running tree-shake command...");try{r.execSync("npx compile-rn-stylewind",{stdio:"inherit"})}catch(e){console.error("Error during Stylewind tree-shaking:",e)}}else{console.log("[Stylewind]: Development build detected");const n=e.resolve(i,"theme.config.mjs");r.execSync("npx generate-rn-stylewind",{stdio:"inherit"}),t.watchFile(n,{interval:200},(()=>{console.log("Regenerating stylewind utilities...");try{r.execSync("npx generate-rn-stylewind",{stdio:"inherit"}),console.log("Command executed successfully.")}catch(e){console.error("Error executing command:",e)}}))}return n};

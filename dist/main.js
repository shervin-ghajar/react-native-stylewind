import{d as e,t}from"./isColorShade-OotNVhTd.js";export{c as createTheme,a as defaultUtilities,i as isColorShade,s as spacing}from"./isColorShade-OotNVhTd.js";import{createContext as o,useContext as r,useState as m}from"react";import{capitalize as d}from"lodash";import{Platform as n,StyleSheet as l}from"react-native";import{jsx as f}from"react/jsx-runtime";import"path";import"lodash/merge";let u;u="production"===process.env.NODE_ENV?require("./shakenUtilities").utilities:require("./utilities").utilities;const p=o({theme:e,isDarkMode:"dark"===e.mode,setMode:e=>e}),h=()=>r(p),j=e=>{const{theme:t}=h(),o={};for(const r of e)if("string"==typeof r){const e="default"!==t.mode?d(t.mode):"",i=u?.[r+e]??u[r];i&&Object.assign(o,i)}else if("object"==typeof r){for(const[e,o]of Object.entries(r))"function"==typeof o&&(r[e]=o(t,n));Object.assign(o,r)}return l.create({styleAccumulator:o}).styleAccumulator},g=e=>e,k=({children:e})=>{const[o,r]=m(t.mode),i="dark"===o;return f(p.Provider,{value:{theme:t,isDarkMode:i,setMode:r},children:e})};export{k as ThemeProvider,g as createStyle,e as defaultTheme,j as styles,t as theme,h as useTheme};
//# sourceMappingURL=main.js.map

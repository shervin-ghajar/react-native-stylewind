import{d as e,t}from"./isColorShade-DFaWp4Ja.js";export{c as createTheme,a as defaultUtilities,i as isColorShade,s as spacing}from"./isColorShade-DFaWp4Ja.js";import{createContext as o,useContext as r,useState as m}from"react";import{capitalize as n}from"lodash";import{Platform as d,StyleSheet as l}from"react-native";import{jsx as f}from"react/jsx-runtime";import"chalk";import"path";import"fs";let p;p="production"===process.env.NODE_ENV?require("./shakenUtilities").utilities:require("./utilities").utilities;const u=o({theme:e,isDarkMode:"dark"===e.mode,setMode:e=>e}),h=()=>r(u),j=e=>{const{theme:t}=h(),o={};for(const r of e)if("string"==typeof r){const e="default"!==t.mode?n(t.mode):"",i=p?.[r+e]??p[r];i&&Object.assign(o,i)}else if("object"==typeof r){for(const[e,o]of Object.entries(r))"function"==typeof o&&(r[e]=o(t,d));Object.assign(o,r)}return l.create({styleAccumulator:o}).styleAccumulator},k=e=>e,y=({children:e})=>{const[o,r]=m(t.mode),i="dark"===o;return f(u.Provider,{value:{theme:t,isDarkMode:i,setMode:r},children:e})};export{y as ThemeProvider,k as createStyle,e as defaultTheme,j as styles,t as theme,h as useTheme};
//# sourceMappingURL=main.js.map

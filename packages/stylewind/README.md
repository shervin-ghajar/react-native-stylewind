# React Native Stylewind

Ever wished you had the flexibility of utility-first styling in React Native, but with **better maintainability, type-safety**, and more developer freedom? Well, that's exactly what **React Native Stylewind** delivers! 🎉 With this library, you can enjoy dynamic style generation based on your custom theme, and still keep your styles clean, reusable, and highly maintainable.

Use **utility classes** for quick styling or leverage **createStyle** for more structured, theme-based styles. With full TypeScript support, you get the best of both worlds—**ease of use** and **robust, type-safe development**.

## ✨ Features

- **🎨 Dynamic Theming** – Utility styles are generated on the fly based on your `theme.config.ts`.
- **⚡ Tailwind-Like Styling** – Use familiar utility classes for a seamless styling experience.
- **🛠️ Highly Customizable** – Define your own colors, utilities, spacing, typography.
- **🔐 Type-Safe** – Full TypeScript support ensures your styles are always correct.
- **🚀 Real-Time Updates** – Styles regenerate automatically when your theme changes.
- **🛆 Tree-Shaking for Performance** – Unused styles get kicked out, keeping your bundle lean.
- **💡 Flexible Usage** – Use utility-first classes or `createStyle` with theme configurations.

## 👥 Installation

First, install the package via npm or yarn:

```bash
npm install rn-stylewind
# or
yarn add rn-stylewind
```

## 🛠️ Setup

Before diving in, wrap your **Metro bundler config** to enable dynamic style generation.

### 1️⃣ Add to `metro.config.js`

```javascript
const { getDefaultConfig } = require('expo/metro-config');
const withRNStylewind = require('rn-stylewind/metro');

const defaultConfig = getDefaultConfig(__dirname);

module.exports = withRNStylewind(defaultConfig);
```

### 2️⃣ Initialize Default Theme Configuration

To initialize and create the default `theme.config.mjs` file, run the following command:

```bash
npx init-rn-stylewind
```

This will generate a `theme.config.mjs` file in the root directory of your project as below. You can customize this file to define your theme colors, spacing, typography, utilities.
```javascript
// theme.config.mjs
import { createTheme } from 'rn-stylewind';

export default await createTheme({
  mode:'light',
  colors: {
    primary: {
      default: '#1D4ED8',
      light: '#93C5FD',
      dark: '#1E3A8A',
    },
  },
  spacing: {
    default: 8,
  },
  // Modify other theme settings if needed
});
```

## 🎯 Usage

Wrap your application with `ThemeProvider` to ensure your styles and theme configurations are accessible throughout the project:

```tsx
import { ThemeProvider } from 'rn-stylewind';
import MyComponent from './MyComponent';

function App() {
  return (
    <ThemeProvider>
      <MyComponent />
    </ThemeProvider>
  );
}
```
Here’s how simple and powerful `stylewind` is:

```tsx
import { Text, Pressable } from 'react-native';
import {  styles } from 'rn-stylewind';

// 🚀 Utility-first styling at its finest!
export const Button = ({ title, ...rest }) => {
  return (
    <Pressable style={styles(['bgError', 'p-5'])} {...rest}>
      <Text style={styles(['textWhite', 'text-lg'])}>{title}</Text>
    </Pressable>
  );
};
```

### Using `styles` Function

The `styles` function allows developers to apply utility classes easily. If a color-based utility class does not specify a Dark or Light mode variant, `styles` will automatically pick the appropriate color based on the current theme `mode`.

```tsx
<View style={styles(['bgPrimary'])}> // if mode is `light`, `bgPrimary` will return `bgPrimaryLight` color
  <Text style={styles(['textBase'])}>Dynamic Themed Text</Text> 
</View>
```

### Using `createStyle`

The `createStyle` function enables structured, reusable styles with full TypeScript support and theme-based values.

```tsx
import { createStyle, styles } from 'rn-stylewind';

const useMyStyles = createStyle({
  container: (theme) => ({
    padding: theme.spacing.md,
    backgroundColor: theme.utilities.bgBackground.backgroundColor,
    ...theme.utilities['p-1'] // using utility style
  }),
  text: {
    padding: 4
  },
});

function MyComponent() {
  const myStyles = useMyStyles();
  return (
    <View style={styles([myStyles.container])}>
      <Text style={styles([myStyles.text])}>Hello, world!</Text>
    </View>
  );
}
```

### Using `useTheme` Hook

To access the theme context, use the `useTheme` hook:

```tsx
import { useTheme,styles } from 'rn-stylewind';

export const MyComponent = () => {
  const { theme, isDarkMode, toggleMode } = useTheme();
  
  return (
    <View style={styles([isDarkMode ? 'bgBlack' : 'bgWhite'])}>
      <Text style={styles(['textPrimary'])}>Current Theme: {theme.mode}</Text>
      <Button title="Toggle Theme" onPress={toggleMode} />
    </View>
  );
}
```

Now, you can use `useTheme()` in your components to access the theme and utilities dynamically.

## 📚 Documentation

For full documentation, visit [React Native Stylewind](https://shervin-ghajar.github.io/react-native-stylewind/).

## Platform Support

[![supports Expo](https://img.shields.io/badge/Expo-4630EB.svg?style=for-the-badge&logo=EXPO&labelColor=000&logoColor=fff)](https://expo.dev/)
[![supports iOS](https://img.shields.io/badge/iOS-555555.svg?style=for-the-badge&logo=APPLE&labelColor=000&logoColor=fff)](https://reactnative.dev/)
[![supports Android](https://img.shields.io/badge/Android-A4C639.svg?style=for-the-badge&logo=ANDROID&labelColor=000&logoColor=fff)](https://reactnative.dev/)
[![supports web](https://img.shields.io/badge/Web-4285F4.svg?style=for-the-badge&logo=GOOGLE-CHROME&labelColor=000&logoColor=fff)](https://necolas.github.io/react-native-web/)

**React Native Stylewind** is 100% compatible with the [Expo Framework](https://expo.io/) and works with both [Expo Go](https://expo.dev/client) and in the [bare workflow](https://docs.expo.dev/bare/exploring-bare-workflow/).


## 🔥 Why You'll Love It

✅ **No more inline styles cluttering your components**\
✅ **Faster development with utility-driven styling**\
✅ **Built for performance with tree-shaking**\
✅ **Theming that just makes sense**\
✅ **Flexibility to use utility classes or structured styles**

Now go forth and **style like a boss**! 🚀


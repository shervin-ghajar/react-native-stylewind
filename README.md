# 🚀 React Native Stylewind

Ever wished you had the flexibility of utility-first styling in React Native, but with **better maintainability, type-safety**, and more developer freedom? Well, that's exactly what **React Native Stylewind** delivers! 🎉 With this library, you can enjoy dynamic style generation based on your custom theme, and still keep your styles clean, reusable, and highly maintainable.

Use **utility classes** for quick styling or leverage **createStyle** for more structured, theme-based styles. With full TypeScript support, you get the best of both worlds—**ease of use** and **robust, type-safe development**.

## ✨ Features

- **🎨 Dynamic Theming** – Utility styles are generated on the fly based on your `theme.config.ts`.
- **⚡ Tailwind-Like Styling** – Use familiar utility classes for a seamless styling experience.
- **🛠️ Highly Customizable** – Define your own colors, spacing, typography, and more.
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

This will generate a `theme.config.mjs` file in the root directory of your project as below. You can customize this file to define your theme colors, spacing, typography, and more.
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
import Main from './main';

function App() {
  return (
    <ThemeProvider>
      <Main />
    </ThemeProvider>
  );
}
```
Here’s how simple and powerful `react-native-stylewind` is:

```tsx
import { Text, Pressable } from 'react-native';
import { createStyle, styles } from 'react-native-stylewind';

// 🚀 Utility-first styling at its finest!
export const Button = ({ title, ...rest }) => {
  return (
    <Pressable style={styles(['bgError', 'p-5', customStyle.button])} {...rest}>
      <Text style={styles(['textWhite', 'text-lg'])}>{title}</Text>
    </Pressable>
  );
};

// 🎨 Custom styles stay modular & scalable
const customStyle = createStyle({
  button: {
    padding: (theme) => theme.spacing.small,
  },
});
```

### Using `useTheme` Hook

To access the theme context, use the `useTheme` hook:

```tsx
import { useTheme,styles } from 'rn-stylewind';

function MyComponent() {
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

### 🔥 Why You'll Love It

✅ **No more inline styles cluttering your components**\
✅ **Faster development with utility-driven styling**\
✅ **Built for performance with tree-shaking**\
✅ **Theming that just makes sense**\
✅ **Flexibility to use utility classes or structured styles**

Now go forth and **style like a boss**! 🚀


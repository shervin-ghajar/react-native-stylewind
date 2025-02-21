# 🚀 React Native Stylewind

Ever wished you had the flexibility of utility-first styling in React Native, but with **better maintainability, type-safety**, and more developer freedom? Well, that's exactly what **React Native Stylewind** delivers! 🎉 With this library, you can enjoy dynamic style generation based on your custom theme, and still keep your styles clean, reusable, and highly maintainable.

Use **utility classes** for quick styling or leverage **createStyle** for more structured, theme-based styles. With full TypeScript support, you get the best of both worlds—**ease of use** and **robust, type-safe development**.

## ✨ Features

- **🎨 Dynamic Theming** – Utility styles are generated on the fly based on your `theme.config.ts`.
- **⚡ Tailwind-Like Styling** – Use familiar utility classes for a seamless styling experience.
- **🛠️ Highly Customizable** – Define your own colors, spacing, typography, and more.
- **🔐 Type-Safe** – Full TypeScript support ensures your styles are always correct.
- **🚀 Real-Time Updates** – Styles regenerate automatically when your theme changes.
- **📦 Tree-Shaking for Performance** – Unused styles get kicked out, keeping your bundle lean.
- **💡 Flexible Usage** – Use utility-first classes or `createStyle` with theme configurations.

## 📥 Installation

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
const withRNTailwind = require('rn-stylewind/metro');

const defaultConfig = getDefaultConfig(__dirname);

module.exports = withRNTailwind(defaultConfig);
```

And that’s it—you're ready to build beautifully styled components! 🚀

## 🎯 Usage

Here’s how simple and powerful `rn-stylewind` is:

```tsx
import { Text, Pressable } from 'react-native';
import { createStyle, styles } from 'rn-stylewind';

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

### 🔥 Why You'll Love It

✅ **No more inline styles cluttering your components**  
✅ **Faster development with utility-driven styling**  
✅ **Built for performance with tree-shaking**  
✅ **Theming that just makes sense**  
✅ **Flexibility to use utility classes or structured styles**

Now go forth and **style like a boss**! 🚀

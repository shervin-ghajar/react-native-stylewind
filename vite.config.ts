import { defineConfig } from 'vite'
import reactNativeWeb from "vite-plugin-react-native-web";

// https://vite.dev/config/
export default defineConfig({
  plugins: [reactNativeWeb()],
})

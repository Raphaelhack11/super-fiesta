import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: '/', // Make sure this is set correctly for your production URL
  build: {
    outDir: 'dist', // Ensure Vite is building into the dist folder
  },
});

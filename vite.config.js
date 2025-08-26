import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// IMPORTANT: base must be "/" for Vercel
export default defineConfig({
  plugins: [react()],
  base: "/",
});

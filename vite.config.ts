import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/money-log/",
  css: { preprocessorOptions: { scss: { api: "modern-compiler" } } },
});

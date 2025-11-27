import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { visualizer } from "rollup-plugin-visualizer";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), visualizer({ open: true })],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {

            if (id.includes('react')) return 'vendor_react';
            if (id.includes('framer-motion')) return 'vendor_motion';
            if (id.includes('@tsparticles')) return 'vendor_tsparticles';
            if (id.includes('react-helmet')) return 'vendor_helmet';
            if (id.includes('react-router-dom')) return 'vendor_router';
            if (id.includes('lucide-react') || id.includes('react-icons')) return 'vendor_icons';

            return 'vendor';
          }
        }
      }
    }
  }
})

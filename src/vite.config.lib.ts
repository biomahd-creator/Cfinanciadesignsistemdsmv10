import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    react(),
    dts({ 
      insertTypesEntry: true,
      include: ['components'], // Solo genera tipos para la carpeta components
    }),
  ],
  build: {
    outDir: 'dist-lib',
    lib: {
      entry: path.resolve(__dirname, 'components/index.ts'),
      name: 'FigmaMakeDS',
      fileName: (format) => `figma-make-ds.${format}.js`,
    },
    rollupOptions: {
      // Aseguramos que no se incluya React en el bundle (peerDependencies)
      external: ['react', 'react-dom', 'tailwindcss'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          tailwindcss: 'tailwindcss',
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./"),
    },
  },
});

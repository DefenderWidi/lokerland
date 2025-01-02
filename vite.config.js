import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base: 'https://defender.reactjssanbercode.my.id/', // Tambahkan URL domain Anda di sini
  plugins: [react()],
});

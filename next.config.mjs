import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ['10.226.52.215', 'localhost'],
  turbopack: {
    root: __dirname,
    resolveAlias: {
      '@': path.join(__dirname, 'src'),
    },
  },
};

export default nextConfig;

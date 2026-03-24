import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ['10.226.52.215', 'localhost'],
  experimental: {
    turbo: {
      root: __dirname,
    },
  },
};

export default nextConfig;

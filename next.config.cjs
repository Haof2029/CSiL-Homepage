/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    cacheMaxMemorySize: 50 * 1024 * 1024, // 50MB
    serverActions: false,
    optimizeCss: false,
    appDir: true
  }
}

// 使用CommonJS导出
module.exports = nextConfig; 
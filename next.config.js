/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['media.giphy.com']
    },
    distDir: 'docs',
    output: 'export',
}

module.exports = nextConfig

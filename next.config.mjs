/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 静的サイトとして出力する設定
  images: {
    unoptimized: true, // SSGでは画像最適化を無効化する必要がある場合がある
  },
};

export default nextConfig;

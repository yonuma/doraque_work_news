export type NewsItem = {
  id: string;
  title: string;
  publishedAt: string; // ISO 8601 形式 (例: '2025-08-24T12:00:00Z')
  category: string;
  thumbnailUrl: string; // 画像URL
  articleUrl: string; // 元記事のURL
};

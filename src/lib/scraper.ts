import fetch from 'node-fetch';
import * as cheerio from 'cheerio';
import { NewsItem } from '@/types/news';

const TARGET_URL = 'https://walk.dragonquest.jp/web/news/';
const BASE_URL = 'https://walk.dragonquest.jp';

// Helper function to map category class to name
const getCategoryFromClass = (className: string | undefined): string => {
  if (!className) return 'お知らせ';
  if (className.includes('cat-event')) return 'イベント';
  if (className.includes('cat-update')) return 'アップデート';
  if (className.includes('cat-monster')) return 'メガモンスター';
  if (className.includes('cat-important')) return '重要';
  return 'お知らせ';
};

// Helper function to format date string to ISO 8601
const formatDateToISO = (dateStr: string): string => {
  // Assuming format YYYY.MM.DD
  const [year, month, day] = dateStr.split('.').map(Number);
  if (!year || !month || !day) {
    // Return current date as a fallback
    return new Date().toISOString();
  }
  return new Date(Date.UTC(year, month - 1, day)).toISOString();
};


export const getNews = async (): Promise<NewsItem[]> => {
  try {
    const response = await fetch(TARGET_URL);
    const html = await response.text();
    const $ = cheerio.load(html);

    const newsItems: NewsItem[] = [];
    const newsElements = $('div.newsMain a');

    newsElements.each((_, element) => {
      const articleUrlRelative = $(element).attr('href');
      if (!articleUrlRelative) return;

      const articleUrl = new URL(articleUrlRelative, BASE_URL).href;
      const thumbnailUrlRelative = $(element).find('div.newsThumb img').attr('src');
      const thumbnailUrl = thumbnailUrlRelative
        ? new URL(thumbnailUrlRelative, BASE_URL).href
        : 'https://placehold.jp/300x150.png?text=No_Image'; // Fallback image

      const categoryClass = $(element).find('p.newsCat span').attr('class');
      const category = getCategoryFromClass(categoryClass);

      const title = $(element).find('p.newsTitle').text().trim();
      const publishedAtStr = $(element).find('p.newsDate').text().trim();
      const publishedAt = formatDateToISO(publishedAtStr);

      // Generate a simple unique ID from the article URL
      const id = Buffer.from(articleUrl).toString('base64');

      if (title && articleUrl) {
        newsItems.push({
          id,
          title,
          publishedAt,
          category,
          thumbnailUrl,
          articleUrl,
        });
      }
    });

    return newsItems;

  } catch (error) {
    console.error('Error fetching or parsing news:', error);
    // In case of an error, return an empty array to prevent site build failure
    return [];
  }
};

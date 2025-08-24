import React from 'react';
import { NewsItem } from '@/types/news';
import Image from 'next/image';

type Props = {
  item: NewsItem;
};

const NewsCard = ({ item }: Props) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return `${date.getFullYear()}/${String(date.getMonth() + 1).padStart(2, '0')}/${String(date.getDate()).padStart(2, '0')}`;
  };

  return (
    <a
      href={item.articleUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white"
    >
      <div className="relative w-full h-40">
        <Image
          src={item.thumbnailUrl}
          alt={item.title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <span className="inline-block bg-blue-200 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full">
            {item.category}
          </span>
          <time className="text-gray-500 text-sm">{formatDate(item.publishedAt)}</time>
        </div>
        <h3 className="text-gray-900 font-bold text-lg leading-tight truncate">
          {item.title}
        </h3>
      </div>
    </a>
  );
};

export default NewsCard;

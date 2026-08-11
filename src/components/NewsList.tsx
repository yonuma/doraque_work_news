"use client";

import React from 'react';
import { NewsItem } from '@/types/news';
import NewsCard from './NewsCard';

type Props = {
  newsItems: NewsItem[];
};

const NewsList = ({ newsItems }: Props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {newsItems.map((item) => (
        <NewsCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default NewsList;

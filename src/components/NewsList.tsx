"use client"; // This component doesn't need server-specific features, but good practice for components that might have interactivity.

import React from 'react';
import { sampleNewsData } from '@/lib/newsData';
import NewsCard from './NewsCard';

const NewsList = () => {
  const newsItems = sampleNewsData;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {newsItems.map((item) => (
        <NewsCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default NewsList;

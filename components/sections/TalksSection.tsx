'use client';
import React from 'react';
import Talks from './Talks';
import { talksData } from '@/constants/talksData';

export default function TalksSection() {
  // Show only the first 3 talks for the home page
  const featuredTalks = talksData.slice(0, 3);

  return (
    <Talks 
      posts={featuredTalks}
      title="Latest Talks & Insights"
      subtitle="Stay updated with our latest thoughts, tips, and industry insights"
    />
  );
}
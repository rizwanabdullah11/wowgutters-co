'use client';

import { useEffect, useState } from 'react';
import { formatBlogViews, getBlogViews, incrementBlogView } from '@/lib/blogViews';

type BlogViewCountProps = {
  postId: string;
  publishedDate?: string;
  /** Set true on blog detail pages to count one view per session. */
  incrementOnMount?: boolean;
  suffix?: string;
  className?: string;
};

export default function BlogViewCount({
  postId,
  publishedDate,
  incrementOnMount = false,
  suffix = 'views',
  className,
}: BlogViewCountProps) {
  // Start at 0 on both server and client so hydration matches; the real
  // (localStorage) count is applied in the effect below.
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    setCount(
      incrementOnMount
        ? incrementBlogView(postId, publishedDate)
        : getBlogViews(postId, publishedDate),
    );
  }, [postId, publishedDate, incrementOnMount]);

  const label = suffix ? `${formatBlogViews(count)} ${suffix}` : formatBlogViews(count);

  return <span className={className}>{label}</span>;
}

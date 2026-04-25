import React from 'react';
import CardSkeleton from './CardSkeleton';

interface GridSkeletonProps {
  columns?: 1 | 2 | 3 | 4;
  rows?: number;
  hasImage?: boolean;
  imageHeight?: number;
}

export const GridSkeleton: React.FC<GridSkeletonProps> = ({
  columns = 3,
  rows = 2,
  hasImage = true,
  imageHeight = 200
}) => {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  };

  const totalCards = columns * rows;

  return (
    <div className={`grid ${gridCols[columns]} gap-8`}>
      {Array.from({ length: totalCards }).map((_, index) => (
        <CardSkeleton
          key={index}
          hasImage={hasImage}
          imageHeight={imageHeight}
        />
      ))}
    </div>
  );
};

export default GridSkeleton;

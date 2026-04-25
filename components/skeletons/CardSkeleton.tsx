import React from 'react';
import SkeletonBase from './SkeletonBase';

interface CardSkeletonProps {
  hasImage?: boolean;
  imageHeight?: number;
  lines?: number;
}

export const CardSkeleton: React.FC<CardSkeletonProps> = ({
  hasImage = true,
  imageHeight = 200,
  lines = 3
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {hasImage && (
        <SkeletonBase variant="rectangular" height={imageHeight} />
      )}
      
      <div className="p-6 space-y-4">
        {/* Icon/Badge */}
        <div className="flex justify-center">
          <SkeletonBase variant="circular" width={60} height={60} />
        </div>
        
        {/* Title */}
        <SkeletonBase variant="rounded" height={24} width="80%" className="mx-auto" />
        
        {/* Description Lines */}
        <div className="space-y-2">
          {Array.from({ length: lines }).map((_, index) => (
            <SkeletonBase
              key={index}
              variant="rounded"
              height={16}
              width={index === lines - 1 ? '60%' : '100%'}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;

import React from 'react';
import SkeletonBase from './SkeletonBase';

interface TableSkeletonProps {
  rows?: number;
  columns?: number;
}

export const TableSkeleton: React.FC<TableSkeletonProps> = ({
  rows = 5,
  columns = 4
}) => {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      {/* Table Header */}
      <div className="bg-gray-50 border-b border-gray-200 p-4">
        <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
          {Array.from({ length: columns }).map((_, index) => (
            <SkeletonBase key={index} variant="rounded" height={20} width="80%" />
          ))}
        </div>
      </div>
      
      {/* Table Body */}
      <div className="divide-y divide-gray-200">
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <div key={rowIndex} className="p-4">
            <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
              {Array.from({ length: columns }).map((_, colIndex) => (
                <SkeletonBase key={colIndex} variant="rounded" height={16} width="90%" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableSkeleton;

import React from 'react';
import SkeletonBase from './SkeletonBase';

export const FooterSkeleton: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Footer Columns */}
          {Array.from({ length: 4 }).map((_, colIndex) => (
            <div key={colIndex} className="space-y-4">
              <SkeletonBase variant="rounded" height={24} width="60%" className="bg-gray-700" />
              <div className="space-y-2">
                {Array.from({ length: 5 }).map((_, linkIndex) => (
                  <SkeletonBase
                    key={linkIndex}
                    variant="rounded"
                    height={16}
                    width="80%"
                    className="bg-gray-700"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Footer Bottom */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <SkeletonBase variant="rounded" height={16} width={200} className="bg-gray-700" />
            <div className="flex gap-4">
              {Array.from({ length: 4 }).map((_, index) => (
                <SkeletonBase
                  key={index}
                  variant="circular"
                  width={40}
                  height={40}
                  className="bg-gray-700"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSkeleton;

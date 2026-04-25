import React from 'react';
import SkeletonBase from './SkeletonBase';

interface FormSkeletonProps {
  fields?: number;
}

export const FormSkeleton: React.FC<FormSkeletonProps> = ({
  fields = 5
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
      {/* Form Title */}
      <div className="space-y-2">
        <SkeletonBase variant="rounded" height={32} width="60%" />
        <SkeletonBase variant="rounded" height={20} width="80%" />
      </div>
      
      {/* Form Fields */}
      {Array.from({ length: fields }).map((_, index) => (
        <div key={index} className="space-y-2">
          <SkeletonBase variant="rounded" height={16} width={120} />
          <SkeletonBase variant="rounded" height={48} width="100%" />
        </div>
      ))}
      
      {/* Submit Button */}
      <div className="pt-4">
        <SkeletonBase variant="rounded" height={48} width="100%" />
      </div>
    </div>
  );
};

export default FormSkeleton;

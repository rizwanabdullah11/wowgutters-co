import React from 'react';
import SkeletonBase from './SkeletonBase';

export const NavbarSkeleton: React.FC = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <SkeletonBase variant="rounded" width={150} height={40} />
          
          {/* Desktop Menu Items */}
          <div className="hidden md:flex items-center gap-6">
            {Array.from({ length: 5 }).map((_, index) => (
              <SkeletonBase key={index} variant="rounded" width={80} height={20} />
            ))}
          </div>
          
          {/* CTA Button */}
          <div className="hidden md:block">
            <SkeletonBase variant="rounded" width={120} height={40} />
          </div>
          
          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <SkeletonBase variant="rounded" width={40} height={40} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarSkeleton;

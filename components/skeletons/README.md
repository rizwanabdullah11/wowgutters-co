# Skeleton Loader Components

A comprehensive skeleton loader system for the WOW Gutters application.

## Components

### Base Components

- **SkeletonBase**: The foundation component for all skeleton loaders
  - Variants: `text`, `circular`, `rectangular`, `rounded`
  - Animations: `pulse`, `wave`, `none`
  - Customizable width and height

### Layout Skeletons

- **NavbarSkeleton**: Loading state for navigation bar
- **FooterSkeleton**: Loading state for footer
- **HeroSkeleton**: Loading state for hero sections

### Content Skeletons

- **CardSkeleton**: Generic card loading state
- **BlogCardSkeleton**: Blog post card loading state
- **ServiceBlockSkeleton**: Service section loading state
- **GridSkeleton**: Configurable grid of cards
- **TableSkeleton**: Data table loading state
- **FormSkeleton**: Form loading state

### Page Skeletons

- **AreaPageSkeleton**: Complete area page loading state
- **BlogPageSkeleton**: Complete blog page loading state

## Usage

### In Next.js Pages

Create a `loading.tsx` file in your route folder:

```tsx
import { BlogPageSkeleton } from '@/components/skeletons';

export default function Loading() {
  return <BlogPageSkeleton />;
}
```

### Custom Skeleton

```tsx
import { SkeletonBase } from '@/components/skeletons';

<SkeletonBase 
  variant="rounded" 
  width={200} 
  height={40}
  animation="pulse"
/>
```

### Grid Layout

```tsx
import { GridSkeleton } from '@/components/skeletons';

<GridSkeleton 
  columns={3} 
  rows={2} 
  hasImage={true}
  imageHeight={250}
/>
```

## Animations

Two animation types are available:

1. **Pulse**: Simple opacity animation (default)
2. **Wave**: Shimmer effect that moves across the skeleton

## Customization

All skeleton components accept standard className props for additional styling:

```tsx
<SkeletonBase 
  variant="rounded" 
  width={200} 
  height={40}
  className="bg-blue-200"
/>
```

## Best Practices

1. Match skeleton structure to actual content layout
2. Use appropriate variants for different content types
3. Keep animation consistent across the application
4. Consider mobile responsiveness in skeleton designs
5. Use GridSkeleton for repeating card layouts
6. Combine multiple skeletons for complex layouts

## File Structure

```
components/skeletons/
├── SkeletonBase.tsx          # Base skeleton component
├── NavbarSkeleton.tsx        # Navigation skeleton
├── FooterSkeleton.tsx        # Footer skeleton
├── HeroSkeleton.tsx          # Hero section skeleton
├── CardSkeleton.tsx          # Generic card skeleton
├── BlogCardSkeleton.tsx      # Blog card skeleton
├── ServiceBlockSkeleton.tsx  # Service block skeleton
├── GridSkeleton.tsx          # Grid layout skeleton
├── TableSkeleton.tsx         # Table skeleton
├── FormSkeleton.tsx          # Form skeleton
├── AreaPageSkeleton.tsx      # Area page skeleton
├── BlogPageSkeleton.tsx      # Blog page skeleton
├── index.ts                  # Exports
└── README.md                 # Documentation
```

## Loading States Created

Loading states have been implemented for:

- Home page (`/`)
- Blog listing (`/blog`)
- Blog post (`/blog/[id]`)
- Services listing (`/Services`)
- Service detail (`/Services/[slug]`)
- Area pages (`/areas/[area]`)
- Commercial page (`/Commercial`)
- Contact page (`/Contact`)
- Quote page (`/Quote`)
- Pricing page (`/Pricing`)
- Reviews page (`/reviews`)
- About page (`/About`)
- Help page (`/help`)
- Dashboard page (`/Dashboard`)

# Service Template

Use this template to add new services to the servicesData array in `constants/servicesData.tsx`

## Template Structure:

```typescript
{
  id: 'service-slug',  // URL-friendly slug (e.g., 'gutter-cleaning')
  name: 'Service Name',  // Display name
  icon: '🌧️',  // Emoji icon
  heroImage: 'https://images.unsplash.com/photo-xxxxx?w=1920',  // Hero background image
  heroTitle: 'Service Hero Title',
  heroDescription: 'Brief description for hero section',
  sections: [
    {
      title: 'Section Title',
      content: 'Main paragraph content',
      image: 'https://images.unsplash.com/photo-xxxxx?w=800',  // Optional
      imagePosition: 'left',  // 'left' or 'right'
      bulletPoints: [  // Optional
        'Bullet point 1',
        'Bullet point 2',
        'Bullet point 3'
      ]
    },
    // Add more sections as needed
  ],
  ctaSection: {
    title: 'CTA Title',
    description: 'CTA description text',
    phone: '07421 433910',
    buttonText: 'Get A Quote'
  }
}
```

## Example Services to Add:

### Gutter Repairs
- id: 'gutter-repairs'
- Focus on repair services, fixing leaks, replacing sections

### UPVC Cleaning
- id: 'upvc-cleaning'
- Exterior cleaning, fascias, soffits

### Roof Cleaning
- id: 'roof-cleaning'
- Moss removal, roof washing

### Inspection
- id: 'inspection'
- Professional inspection services

### Conservatory
- id: 'conservatory'
- Conservatory gutter replacement and maintenance

### Water Butt
- id: 'water-butt'
- Water butt installation services

### Drain Cleaning
- id: 'drain-cleaning'
- Drain unblocking and cleaning

### Commercial
- id: 'commercial'
- Commercial gutter cleaning services

## How to Add a New Service:

1. Open `constants/servicesData.tsx`
2. Copy the template above
3. Fill in all the fields with your service information
4. Add it to the `servicesData` array
5. The service will automatically appear in the navbar dropdown and have its own page at `/Services/[your-slug]`

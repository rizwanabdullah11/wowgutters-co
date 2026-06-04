export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  heroVideo?: string;
  date: string;
  views: string;
  content?: string;
  category?: string;
  author?: string;
  authorRole?: string;
  authorBio?: string;
  lastUpdated?: string;
  quickAnswer?: string;
  breadcrumbName?: string;
  featured?: boolean;
  /** Exact <title> tag when set; avoids appending "| WOW Gutters" in metadata */
  seoTitle?: string;
}

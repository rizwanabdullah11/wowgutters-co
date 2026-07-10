export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  heroVideo?: string;
  date: string;
  /** @deprecated Use dynamic BlogViewCount — optional legacy field ignored in UI */
  views?: string;
  content?: string;
  category?: string;
  author?: string;
  authorRole?: string;
  authorBio?: string;
  lastUpdated?: string;
  quickAnswer?: string;
  breadcrumbName?: string;
  featured?: boolean;
  /** Exact <title> tag when set; avoids appending "| WOW Gutters Ltd" in metadata */
  seoTitle?: string;
  /** 4-word summary shown after the blog URL */
  shortSummary?: string;
}

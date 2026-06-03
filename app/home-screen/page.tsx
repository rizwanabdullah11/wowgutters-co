import dynamic from 'next/dynamic';
import HeroSection from '@/components/sections/HeroSection';
import SectionPlaceholder from '@/components/sections/SectionPlaceholder';
import HomepageSchema from '@/components/seo/HomepageSchema';
import HomepageFAQSchema from '@/components/seo/HomepageFAQSchema';
import HomepageWebSiteSchema from '@/components/seo/HomepageWebSiteSchema';

const ProfessionalServices = dynamic(
  () => import('@/components/sections/ProfessionalServices'),
  { loading: () => <SectionPlaceholder minHeight={520} /> }
);
const HowCanWeHelp = dynamic(
  () => import('@/components/sections/HowCanWeHelp'),
  { loading: () => <SectionPlaceholder minHeight={400} /> }
);
const GutterServicesRange = dynamic(
  () => import('@/components/sections/GutterServicesRange'),
  { loading: () => <SectionPlaceholder minHeight={480} /> }
);
const HotWashBanner = dynamic(
  () => import('@/components/sections/HotWashBanner'),
  { loading: () => <SectionPlaceholder minHeight={200} /> }
);
const BlogSection = dynamic(
  () => import('@/components/sections/BlogSection'),
  { loading: () => <SectionPlaceholder minHeight={560} /> }
);
const QuestionsAnswers = dynamic(
  () => import('@/components/sections/QuestionsAnswers'),
  { loading: () => <SectionPlaceholder minHeight={480} /> }
);
const ReviewsSection = dynamic(
  () => import('@/components/sections/ReviewsSection'),
  { loading: () => <SectionPlaceholder minHeight={400} /> }
);
const WhyChooseUs = dynamic(
  () => import('@/components/sections/WhyChooseUs'),
  { loading: () => <SectionPlaceholder minHeight={400} /> }
);
const FeaturesSection = dynamic(
  () => import('@/components/sections/FeaturesSection'),
  { loading: () => <SectionPlaceholder minHeight={360} /> }
);
const GetTheBest = dynamic(
  () => import('@/components/sections/GetTheBest'),
  { loading: () => <SectionPlaceholder minHeight={320} /> }
);
const FindLocalTeam = dynamic(
  () => import('@/components/sections/FindLocalTeam'),
  { loading: () => <SectionPlaceholder minHeight={360} /> }
);
const HelpIsHere = dynamic(
  () => import('@/components/sections/HelpIsHere'),
  { loading: () => <SectionPlaceholder minHeight={280} /> }
);
const ContactInfoSection = dynamic(
  () => import('@/components/sections/ContactInfoSection'),
  { loading: () => <SectionPlaceholder minHeight={320} /> }
);

export default function HomeScreen() {
  return (
    <div>
      <HomepageSchema />
      <HomepageFAQSchema />
      <HomepageWebSiteSchema />
      <HeroSection />
      <ProfessionalServices />
      <HowCanWeHelp />
      <GutterServicesRange />
      <HotWashBanner />
      <BlogSection />
      <QuestionsAnswers />
      <ReviewsSection />
      <WhyChooseUs />
      <FeaturesSection />
      <GetTheBest />
      <FindLocalTeam />
      <HelpIsHere />
      <ContactInfoSection />
    </div>
  );
}

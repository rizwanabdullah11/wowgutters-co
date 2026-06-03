import HeroSection from '@/components/sections/HeroSection';
import HomeServiceAreasHub from '@/components/sections/HomeServiceAreasHub';
import ProfessionalServices from '@/components/sections/ProfessionalServices';
import HowCanWeHelp from '@/components/sections/HowCanWeHelp';
import GutterServicesRange from '@/components/sections/GutterServicesRange';
import HotWashBanner from '@/components/sections/HotWashBanner';
import BlogSection from '@/components/sections/BlogSection';
import QuestionsAnswers from '@/components/sections/QuestionsAnswers';
import ReviewsSection from '@/components/sections/ReviewsSection';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import FeaturesSection from '@/components/sections/FeaturesSection';
import GetTheBest from '@/components/sections/GetTheBest';
import FindLocalTeam from '@/components/sections/FindLocalTeam';
import HelpIsHere from '@/components/sections/HelpIsHere';
import ContactInfoSection from '@/components/sections/ContactInfoSection';
import HomepageSchema from '@/components/seo/HomepageSchema';
import HomepageFAQSchema from '@/components/seo/HomepageFAQSchema';
import HomepageWebSiteSchema from '@/components/seo/HomepageWebSiteSchema';

/** All sections statically imported so SSG HTML includes full body copy (audit 12.04). */
export default function HomeScreen() {
  return (
    <div>
      <HomepageSchema />
      <HomepageFAQSchema />
      <HomepageWebSiteSchema />
      <HeroSection />
      <HomeServiceAreasHub />
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

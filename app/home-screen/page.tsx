import HeroSection from '@/components/sections/HeroSection';
import BlueBanner from '@/components/sections/BlueBanner';
import StatsSection from '@/components/sections/StatsSection';
import ProfessionalServices from '@/components/sections/ProfessionalServices';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import FeaturesSection from '@/components/sections/FeaturesSection';
import HowCanWeHelp from '@/components/sections/HowCanWeHelp';
import GutterServicesRange from '@/components/sections/GutterServicesRange';
import BlogSection from '@/components/sections/BlogSection';
import HotWashBanner from '@/components/sections/HotWashBanner';
import RecentWork from '@/components/sections/RecentWork';
import QuestionsAnswers from '@/components/sections/QuestionsAnswers';
import ReviewsSection from '@/components/sections/ReviewsSection';
import GetTheBest from '@/components/sections/GetTheBest';
import FindLocalTeam from '@/components/sections/FindLocalTeam';
import HelpIsHere from '@/components/sections/HelpIsHere';
import ContactInfoSection from '@/components/sections/ContactInfoSection';
import WelcomeAudio from '@/components/WelcomeAudio';
import HomepageSchema from '@/components/seo/HomepageSchema';

export default function HomeScreen() {
  return (
    <div>
      <HomepageSchema />
      <WelcomeAudio />
      <HeroSection />
      {/* <BlueBanner /> */}
      {/* <StatsSection /> */}
      <ProfessionalServices />
      <HowCanWeHelp />
      <GutterServicesRange />
      <HotWashBanner />
      <BlogSection />
      {/* <RecentWork /> */}
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

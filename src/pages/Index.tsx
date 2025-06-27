import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ChallengeSection from '@/components/ChallengeSection';
import SolutionSection from '@/components/SolutionSection';
import CallToActionSection from '@/components/CallToActionSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        {/* <ChallengeSection /> */}
        {/* <SolutionSection /> */}
        {/* <CallToActionSection /> */}
      </main>
      <Footer />
    </div>
  );
};

export default Index;

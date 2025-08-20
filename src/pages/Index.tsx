import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ExperienceSection from '../components/Experience';
import RoomsSection from '@/components/Rooms';
import Footer from '@/components/Footer';
import LocationSection from '@/components/Local';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <RoomsSection />
      <LocationSection />
      <ExperienceSection />
      <Footer />
    </div>
  );
};

export default Index;

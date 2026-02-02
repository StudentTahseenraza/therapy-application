import HeroSection from './../components/home/HeroSection';
import IntroSection from './../components/home/IntroSection';
import SpecialtiesSection from '../components/home/SpecialtiesSection';
import SupportSection from '../components/home/SupportSection';
import AboutSection from '../components/home/AboutSection';
import OfficeSection from '../components/home/OfficeSection';
import FAQSection from '../components/home/FAQSection';
import ProfessionalBackgroundSection from '../components/home/ProfessionalBackgroundSection';
import CTASection from '../components/home/CTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <SpecialtiesSection />
      <SupportSection />
      <AboutSection />
      <OfficeSection />
      <FAQSection />
      <ProfessionalBackgroundSection />
      <CTASection />
    </>
  );
}
import ContactHero from '../../components/contact/ContactHero';
import HIPANotice from '../../components/contact/HIPANotice';
import AppointmentSection from '../../components/contact/AppointmentSection';
import OfficeLocation from '../../components/contact/OfficeLocation';
import SocialSection from '../../components/contact/SocialSection';

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <AppointmentSection />
      <OfficeLocation />
      <SocialSection />
    </>
  );
}
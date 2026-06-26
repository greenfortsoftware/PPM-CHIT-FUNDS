// pages/Home.jsx

import HeroSection from "../components/HeroSection";
import PolicyPlans from "../components/PolicyPlans";
import QuickLinks from "../components/QuickLinks";
import EnquiryForm from "../components/EnquiryForm";
import ContactInfo from "../components/ContactInfo";

const Home = () => {
  return (
    <>
      <HeroSection />

      {/* <div className="container mx-auto px-10 py-10 grid md:grid-cols-3 gap-6">
        <PolicyPlans />
       
        <EnquiryForm />
      </div> */}
      <div className="grid grid-cols-1 gap-6 max-w-7xl mx-auto px-4 py-8">
        <PolicyPlans />
        {/* <EnquiryForm /> */}
      </div>

      <div className="container mx-auto px-10">
        <ContactInfo />
      </div>
    </>
  );
};

export default Home;

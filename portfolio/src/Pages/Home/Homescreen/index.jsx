import ContactMe from "../ContactMe";
import Contactform from "../Contactform";
import Footer from "../Footer";
import MainSection from "../MainSection";
import MyPortfolio from "../MyPortfolio";
import MySkills from "../MySkills";
import Testimonial from "../Testimonials";

export default function Home() {
  return (
    <>
      <MainSection />
      <MySkills />
      <MyPortfolio />
      <Testimonial />
      <ContactMe />
      <Contactform />
      <Footer />
    </>
  );
}

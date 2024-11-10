import AboutMe from "./components/Info";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Project from "./components/Project";
import Hero from "./components/Hero";
import ContactUs from "./components/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <AboutMe/>
      <Project />
      <ContactUs />
      <Footer />
      
    </>
  );
}

import Hero from "../components/Hero/Hero";
import Schedule from "../components/Schedule/Schedule";
import Prizes from "../components/Prizes/Prizes";
import Sponsors from "../components/Sponsors/Sponsors";
import Faq from "../components/Faq/Faq";
import Tracks from "../components/Tracks/Tracks";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import About from "../components/About/About";
import { hackformersAbout } from "../utils/about";
import { HackFormersTracks } from "../utils/tracks";
import HackLogo from "../assets/Logo.png";
import heroLogo from "../assets/hero.png";

export default function HackFormers() {
  const links = [
    "home",
    "about",
    "tracks",
    "schedule",
    "prizes",
    "faq",
    "Avalon",
    "Prototype",
  ];
  return (
    <>
      <NavBar links={links} logo={HackLogo}></NavBar>
      <Hero
        heroImg={heroLogo}
        registerLink={"https://hackformers.devfolio.co/"}
        schedule={"17th March - 19th March 2023"}
      ></Hero>
      <About about={hackformersAbout}></About>
      <Tracks tracks={HackFormersTracks}></Tracks>
      {/* <Sponsors></Sponsors> */}
      <Schedule></Schedule>
      <Prizes></Prizes>
      <Faq></Faq>
      <Footer links={links}></Footer>
    </>
  );
}

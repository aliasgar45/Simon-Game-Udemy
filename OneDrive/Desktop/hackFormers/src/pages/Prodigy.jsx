import Hero from "../components/Hero/Hero";
import Schedule from "../components/Schedule/Schedule";
import Prizes from "../components/Prizes/Prizes";
import Sponsors from "../components/Sponsors/Sponsors";
import Faq from "../components/Faq/Faq";
import Tracks from "../components/Tracks/Tracks";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import About from "../components/About/About";
import { ProdigyAbout } from "../utils/about";
import { ProdigyTracks } from "../utils/tracks";
import prodigyLogo from "../assets/Prodigy.png";

export default function Prodigy() {
  const links = [
    "home",
    "about",
    "tracks",
    "prizes",
    "faq",
    "Avalon",
    "Hackformers",
  ];
  return (
    <>
      <NavBar links={links} logo={prodigyLogo}></NavBar>
      <Hero
        heroImg={prodigyLogo}
        registerLink={"https://1ud6q75122n.typeform.com/to/kSJSRKE9"}
        schedule={"17th March"}
      ></Hero>
      <About about={ProdigyAbout}></About>
      <Tracks tracks={ProdigyTracks}></Tracks>
      {/* <Sponsors></Sponsors> */}
      <Prizes></Prizes>
      <Faq></Faq>
      <Footer links={links}></Footer>
    </>
  );
}

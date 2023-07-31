import AvalonHero from "../components/Hero/AvalonHero";
import NavBar from "../components/NavBar/NavBar";
import avalonLogo from "../assets/Avalon.png";
import avalonHero from "../assets/AvalonHero.png";

export default function Avalon() {
  const links = ["home", "Hackformers","Prototype"];
  return (
    <>
      <NavBar links={links} logo={avalonLogo}></NavBar>
      <AvalonHero heroImg={avalonHero} avalon={true}></AvalonHero>
    </>
  );
}

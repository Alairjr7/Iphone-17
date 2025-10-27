import Colors from "../../components/colors/colors";
import Footer from "../../components/footer/footer";
import Hero from "../../components/hero/hero";
import Highlights from "../../components/highlights/highlights";
import Intro from "../../components/intro/intro";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Highlights />
      <Colors />
      <Footer />
    </>
  );
}

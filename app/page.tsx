import { ModeToggle } from "../components/ModeToggle";
import Hero from "../components/Hero";
import Container from "../components/Container";
import BackgroundEffect from "@/components/BackgroundEffect";
import Categories from "@/components/Cateogories";
import MarqueeDemo from "@/components/Marquee";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Container className="flex flex-col min-h-screen">
      <BackgroundEffect />
        <Hero />
        {/* <MarqueeDemo /> */}
        <Categories />
        <div className="flex-grow"> </div>
        <Footer />
      </Container>
    </>
  );
}

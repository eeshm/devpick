import { ModeToggle } from "../components/ModeToggle";
import Hero from "../components/Hero";
import Container from "../components/Container";
import TechStacks from "@/components/TechStacks";
import BackgroundEffect from "@/components/BackgroundEffect";
import Categories from "@/components/Cateogories";
import MarqueeDemo from "@/components/Marquee";

export default function Home() {
  return (
    <>
      <Container>
      <BackgroundEffect />
        <Hero />
        <MarqueeDemo />
        <Categories />
      </Container>
    </>
  );
}

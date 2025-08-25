import Hero from "../components/Hero";
import Container from "../components/Container";
import Categories from "@/components/Categories";
import MarqueeDemo from "@/components/Marquee";
import Footer from "@/components/Footer";
import { FeaturesSectionDemo } from "@/components/ui/Features";

export default function Home() {
  return (
    <>
      <Container className="flex flex-col min-h-screen">
        <Hero />
        <MarqueeDemo />
        <FeaturesSectionDemo />
        <Categories />
        {/* <div className="flex-grow"></div> */}
      </Container>
    </>
  );
}

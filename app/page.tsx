import Hero from "../components/Hero";
import Container from "../components/Container";
import Categories from "@/components/Categories";
import MarqueeDemo from "@/components/Marquee";
import { FeaturesSectionDemo } from "@/components/ui/Features";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      {/* <Header/> */}
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

import Hero from "../components/Hero";
import Container from "../components/Container";
import Categories from "@/components/Categories";
import MarqueeDemo from "@/components/Marquee";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Container className="flex flex-col min-h-screen">
        <Hero />
        <MarqueeDemo />
        <Categories />
        <div className="flex-grow"></div>
        <Footer />
      </Container>
    </>
  );
}

import Hero from "../components/Hero";
import Container from "../components/Container";
import Categories from "@/components/Categories";
import MarqueeDemo from "@/components/Marquee";
import Footer from "@/components/Footer";
import InteractiveComparisonPage from "@/components/ComparisonTable";

export default function Home() {
  return (
    <>
      <Container className="flex flex-col min-h-screen">
        {/* <Hero /> */}
        <InteractiveComparisonPage/>
        {/* <MarqueeDemo /> */}
        {/* <Categories /> */}
        <div className="flex-grow"></div>
        {/* <Footer /> */}
      </Container>
    </>
  );
}

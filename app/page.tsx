import Hero from "../components/Hero";
import Container from "../components/Container";
import Categories from "@/components/Categories";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Container className="flex flex-col min-h-screen">
        <Hero />
        <Categories />
        {/* <div className="flex-grow"></div> */}
      </Container>
    </>
  );
}

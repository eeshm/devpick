import { ModeToggle } from "../components/ModeToggle";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Image from "next/image";
import TechStacks from "@/components/TechStacks";
import { Button } from "@/components/ui/button";
import BackgroundEffect from "@/components/BackgroundEffect";
import Categories from "@/components/Cateogories";

export default function Home() {
  return (
    <div className=" flex flex-col h-screen relative ">
      <BackgroundEffect />
      <Container>
        <Hero />
        <Categories />
        <TechStacks />
      </Container>
    </div>
  );
}

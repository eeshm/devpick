import { ModeToggle } from "../components/ModeToggle";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Image from "next/image";
import TechStacks from "@/components/TechStacks";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className=" flex flex-col h-full  bg-fixed relative bg-gradient-to-b from-red-900 to-black/95">
      <h1>dfa</h1>
    <Container>
      <Hero />
      <Button  variant={"destructive"} size={"lg"}> Hello</Button>
      <TechStacks />
    </Container>
    </div>
  );
}

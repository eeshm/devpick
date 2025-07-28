import { ModeToggle } from "../components/ModeToggle";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col h-full items-center relative bg-gradient-to-r from-red-900 to-very-dark-brown">
    <Container>
      <Hero />
      <Button  variant={"outline"} size={"lg"}/>
    </Container>
    </div>
  );
}

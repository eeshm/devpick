import { ModeToggle } from "../components/ModeToggle";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Card from "@/components/Card";
import { Car } from "lucide-react";
import TechStacks from "@/components/TechStacks";

export default function Home() {
  return (
    <div className=" flex flex-col h-full items-center relative bg-gradient-to-t from-red-900 ">
      <div className="">
    <Container>
      <Hero />
    {/* <Card /> */}
      {/* <Button  variant={"outline"} size={"lg"}/> */}
      <TechStacks />
    </Container>
    </div>
    </div>
  );
}

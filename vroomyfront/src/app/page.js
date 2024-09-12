"use client";
import MultiSelectItem from "@/components/forms/MultiSelectItem";
import CatSelectItem from "@/components/forms/SingleErrorSelect";
import BlueSlider from "@/components/Slider/BlueSlider";
import { Button, NextUIProvider } from "@nextui-org/react";

 // This is a client component 👈🏽



export default function Home() {
  

  return (
    <NextUIProvider>

      <CatSelectItem />
      <MultiSelectItem />
      <BlueSlider />
      <Button>Press me</Button>
    </NextUIProvider>
  );
}

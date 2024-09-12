import React from "react";
import {Slider} from "@nextui-org/react";

export default function BlueSlider() {
  return (
    <Slider 
      label="Price Range"
      step={50} 
      minValue={0} 
      maxValue={3000000} 
      defaultValue={[0, 1200000]} 
      formatOptions={{style: "currency", currency: "ZAR"}}
      className="max-w-md"
    />
  );
}

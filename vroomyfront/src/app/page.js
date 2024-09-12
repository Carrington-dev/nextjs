"use client"; // This is a client component 👈🏽

import React, { useState } from "react";
import {NextUIProvider, Select, SelectItem} from "@nextui-org/react";
import {animals} from "./data";

export default function Home() {
  const [values, setValues] = useState(new Set([]));
  // const [animals, setAnimals] = useState(animals);

  const handleSelectionChange = (e) => {
    setValues(new Set(e.target.value.split(",")));
  };

  return (
    <NextUIProvider>

      <div className="flex w-full max-w-xs flex-col gap-2">
        <Select
          label="Favorite Animal"
          selectionMode="multiple"
          placeholder="Select an animal"
          selectedKeys={values}
          className="max-w-xs"
          onChange={handleSelectionChange}
        >
          {animals.map((animal) => (
            <SelectItem key={animal.key}>
              {animal.label}
            </SelectItem>
          ))}
        </Select>
        <p className="text-small text-default-500">Selected: {Array.from(values).join(", ")}</p>
      </div>      
    </NextUIProvider>
  );
}

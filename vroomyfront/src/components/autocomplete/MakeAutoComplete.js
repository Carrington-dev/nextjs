import React, { useEffect, useState } from "react";
import {Autocomplete, AutocompleteItem} from "@nextui-org/react";
import {animals} from "@/app/data";
import axios from 'axios'

export default function MakeAutoComplete() {
    const [newAnimals, setAnimals] = useState(animals);
    const getMakes = async (url, setFunc) => {
    try {
      const response = await axios.get(url)
      // console.log( response.data.results);
      setFunc(response.data.results)
    } catch (error) {
      console.error("An error has occured", error);
      
    }
  }

  useEffect(() => {
    getMakes(`https://api.vroomhive.co.za/api/v1/makes/`, setAnimals)
  }, [])

  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <Autocomplete 
        label="Select an animal" 
        className="max-w-xs" 
      >
        {newAnimals.map((animal) => (
          <AutocompleteItem key={animal.id} value={animal.name}>
            {animal.name}
          </AutocompleteItem>
        ))}
      </Autocomplete>
      <Autocomplete
        label="Favorite Animal"
        placeholder="Search an animal"
        className="max-w-xs"
        defaultItems={newAnimals}
      >
        {(item) => <AutocompleteItem key={item.name}>{item.name}</AutocompleteItem>}
      </Autocomplete>
    </div>
  );
}

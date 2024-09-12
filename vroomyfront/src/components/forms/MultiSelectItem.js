import React, { useEffect, useState } from "react";
import {Select, SelectItem} from "@nextui-org/react";
import {animals} from "../../app/data"
import axios from 'axios';

function MultiSelectItem() {
    const [values, setValues] = useState(new Set([]));
  const [newAnimals, setAnimals] = useState(animals);
  const getMakes = async (url, setFunc) => {
    try {
      const response = await axios.get(url)
      // console.log( response.data.results);
      setAnimals(response.data.results)
    } catch (error) {
      console.error("An error has occured", error);
      
    }
  }

  useEffect(() => {
    getMakes(`https://api.vroomhive.co.za/api/v1/makes/`)
  }, [])

  const handleSelectionChange = (e) => {
    setValues(new Set(e.target.value.split(",")));
  };
    return ( 
        <div className="flex w-full max-w-xs flex-col gap-2">
        <Select
          label="Favorite Animal"
          selectionMode="multiple"
          placeholder="Select an animal"
          selectedKeys={values}
          className="max-w-xs"
          onChange={handleSelectionChange}
        >
          {newAnimals.map((animal) => 
            
             (
            <SelectItem key={animal.name}>
              {animal.name}
            </SelectItem>
          ))}
        </Select>
        <p className="text-small text-default-500">Selected: {Array.from(values).join(", ")}</p>
      </div>      
     );
}

export default MultiSelectItem;
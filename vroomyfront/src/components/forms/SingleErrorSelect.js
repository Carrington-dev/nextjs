import React from "react";
import {Select, SelectItem} from "@nextui-org/react";
import {animals} from "../../app/data";

export default function CatSelectItem() {
  const [value, setValue] = React.useState(new Set([]));
  const [touched, setTouched] = React.useState(false);

  const isValid = value.has("cat");

  return (
    <Select
      label="Favorite Animal"
      variant="bordered"
      placeholder="Select an animal"
      description="The second most popular pet in the world"
      errorMessage={isValid || !touched ? "" : "You must select a cat"}
      isInvalid={isValid || !touched ? false : true}
      selectedKeys={value}
      className="max-w-xs"
      onSelectionChange={setValue}
      onClose={() => setTouched(true)}
    >
      {animals.map((animal) => (
        <SelectItem key={animal.key}>
          {animal.label}
        </SelectItem>
      ))}
    </Select>
  );
}

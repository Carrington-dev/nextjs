import React from "react";
import {cn, Slider, Tooltip} from "@nextui-org/react";
import {InfoIcon} from "./InfoIcon";

export default function CurrencyLabeledSlider() {
  return (
    <Slider
      size="lg"
      label="Price Range"
      maxValue={3000000}
      step={10}
      defaultValue={[100, 300000]}
      formatOptions={{style: "currency", currency: "USD"}}
      classNames={{
        base: "max-w-md gap-3",
        filler: "bg-gradient-to-r from-pink-300 to-cyan-300 dark:from-pink-600 dark:to-cyan-800",
      }}
      renderLabel={({children, ...props}) => (
        <label {...props} className="text-medium flex gap-2 items-center">
          {children}
          <Tooltip
            className="w-[200px] px-1.5 text-tiny text-default-600 rounded-small"
            content="The price range you want to search for."
            placement="right"
          >
            <span className="transition-opacity opacity-80 hover:opacity-100">
              <InfoIcon />
            </span>
          </Tooltip>
        </label>
      )}
      renderThumb={({index, ...props}) => (
        <div
          {...props}
          className="group p-1 top-1/2 bg-background border-small border-default-200 dark:border-default-400/50 shadow-medium rounded-full cursor-grab data-[dragging=true]:cursor-grabbing"
        >
          <span
            className={cn(
              "transition-transform bg-gradient-to-br shadow-small rounded-full w-5 h-5 block group-data-[dragging=true]:scale-80",
              index === 0
                ? "from-pink-200 to-pink-500 dark:from-pink-400 dark:to-pink-600" // first thumb
                : "from-cyan-200 to-cyan-600 dark:from-cyan-600 dark:to-cyan-800", // second thumb
            )}
          />
        </div>
      )}
    />
  );
}

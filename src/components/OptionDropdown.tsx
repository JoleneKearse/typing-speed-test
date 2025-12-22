"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type OptionDropdownProps = {
  label: string;
  options: { value: string; label: string }[];
};

const OptionDropdown = ({ label, options }: OptionDropdownProps) => {
  const [position, setPosition] = React.useState(label);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="text-neutral-100 w-[45%]">
          {position}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="text-neutral-100 bg-neutral-800 w-[250%] -ml-[3.4375rem]">
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition} className="">
          {options.map((option) => (
            <DropdownMenuRadioItem key={option.value} value={option.value}>
              {option.label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default OptionDropdown;

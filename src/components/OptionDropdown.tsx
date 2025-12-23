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
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-down-icon lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="text-neutral-100 bg-neutral-800 w-[145%] -ml-6">
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

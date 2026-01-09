"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type Category = {
  id: number;
  name: string;
};

export function CategoryCombobox({
  category,
  setCategory,
  dummyJson,
  setStep,
}: {
  category: number | null;
  setCategory: (value: number) => void;
  dummyJson: Category[];
  setStep: (value: number) => void;
}) {
  const [open, setOpen] = React.useState(false);

  const selectedCategory = dummyJson.find((item) => item.id === category);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="py-5 flex w-full justify-between md:hidden text-titlecolor dark:text-white"
        >
          {selectedCategory ? selectedCategory.name : "Төрөл сонгох"}
          <ChevronsUpDown className="ml-2 h-4 w-4 opacity-50" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-[--radix-popover-trigger-width] p-0">
        <Command className="w-120">
          <CommandInput placeholder="Төрөл хайх..." className="" />
          <CommandList>
            <CommandEmpty>Олдсонгүй</CommandEmpty>
            <CommandGroup className="">
              {dummyJson.map((item) => (
                <CommandItem
                  key={item.id}
                  value={item.name}
                  className="mt-2"
                  onSelect={() => {
                    setCategory(item.id);
                    setOpen(false);
                    setStep(1);
                  }}
                >
                  {item.name}
                  <Check
                    className={cn(
                      "ml-auto h-4 w-4",
                      category === item.id ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

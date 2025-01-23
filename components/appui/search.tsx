"use client";

import { ComponentProps, FC } from "react";
import { SearchIcon } from "lucide-react";
import { Input } from "@/components/ui";
import { cn } from "@/lib";

interface SearchProps extends ComponentProps<"input"> {}

export const Search: FC<SearchProps> = ({
  value,
  onChange,
  placeholder = "Ingrese un valor",
}) => {
  return (
    <div
      className={cn(
        "flex items-center",
        "bg-white dark:bg-dark-blue",
        "rounded-[5px] px-5 shadow-lg"
      )}
    >
      <SearchIcon className="size-4 text-dark-gray dark:text-white" />
      <Input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="border-none text-xs placeholder:text-dark-gray dark:placeholder:text-white h-12 shadow-none"
      />
    </div>
  );
};

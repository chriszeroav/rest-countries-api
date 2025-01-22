import { FC } from "react";
import { Input } from "@/components/ui";
import { SearchIcon } from "lucide-react";

interface SearchCountryProps {}

export const SearchCountry: FC<SearchCountryProps> = () => {
  return (
    <div className="flex items-center rounded-[5px] bg-white dark:bg-dark-blue px-5 shadow-lg">
      <SearchIcon className="size-4 dark:text-white" />
      <Input
        className="border-none text-xs dark:placeholder:text-white h-12 shadow-none"
        placeholder="Search for a country"
      />
    </div>
  );
};

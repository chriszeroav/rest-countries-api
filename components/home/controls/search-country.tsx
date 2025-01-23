"use client";

import { ChangeEvent, FC, useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Search } from "@/components/appui";

interface SearchCountryProps {}

export const SearchCountry: FC<SearchCountryProps> = () => {
  const params = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const search = params.get("search");

  const [value, setValue] = useState<string>(search || "");

  useEffect(() => {
    const currentParams = new URLSearchParams(params.toString());
    if (value) currentParams.set("search", value);
    else currentParams.delete("search");

    router.push(`${pathname}?${currentParams.toString()}`);
  }, [value]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    const isValid = /^[a-zA-Z\s]*$/.test(newValue);
    if (isValid) setValue(newValue);
  };

  return (
    <Search
      value={value}
      onChange={handleChange}
      placeholder="Search for a country"
    />
  );
};

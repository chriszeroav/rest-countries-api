"use client";

import { FC } from "react";
import { useGetCountries } from "@/hooks";
import { Countries as CountriesList } from "@/reports";

interface CountriesProps {}

export const Countries: FC<CountriesProps> = () => {
  const [countries, loading, error] = useGetCountries();

  return (
    <div className="max-w-7xl">
      <CountriesList data={countries} />
    </div>
  );
};

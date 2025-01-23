import { FC } from "react";
import { Country } from "@/types";
import { CardCountry } from "./src/card-country";

interface CountriesProps {
  data: Country[];
}

export const Countries: FC<CountriesProps> = ({ data }) => {
  return (
    <ul className="grid grid-cols-[repeat(auto-fit,minmax(236px,1fr))] gap-10">
      {data.map((item) => (
        <CardCountry key={item.name} {...item} />
      ))}
    </ul>
  );
};

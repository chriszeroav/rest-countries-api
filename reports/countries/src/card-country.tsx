import { FC } from "react";
import { Country } from "@/types";

interface CardCountryProps extends Country {}

export const CardCountry: FC<CardCountryProps> = ({
  name,
  capital,
  population,
  region,
  image,
}) => {
  return (
    <li>
      <img className="aspect-video object-cover" src={image} alt="" />
    </li>
  );
};

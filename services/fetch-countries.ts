import { Country } from "@/types";

export const fetchCountries = async (
  search: string | null,
  region: string | null
): Promise<Country[]> => {
  try {
    const response = await fetch(`http://localhost:3000/data.json`);
    const data = await response.json();

    const mappedData: Country[] = data.map(
      (item: any): Country => ({
        capital: item.capital,
        name: item.name,
        population: item.population,
        region: item.region,
        image: item.flags.svg,
      })
    );

    const filteredData = mappedData.filter((item) => {
      const matchesSearch = search
        ? item.name.toLowerCase().includes(search.toLowerCase())
        : true;

      const matchesRegion = region
        ? item.region.toLowerCase() === region.toLowerCase()
        : true;

      return matchesSearch && matchesRegion;
    });

    return filteredData;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error("Error Desconocido");
  }
};

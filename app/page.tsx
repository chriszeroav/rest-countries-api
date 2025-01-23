import { Countries, FilterRegion, SearchCountry } from "@/components/home";

export default function Home() {
  return (
    <div className="p-5">
      <div className="flex flex-col gap-5">
        <SearchCountry />
        <FilterRegion />
      </div>
      <Countries />
    </div>
  );
}

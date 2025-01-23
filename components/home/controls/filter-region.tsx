"use client";

import { FC, useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Select } from "@/components/appui";

interface FilterRegionProps {}

const regions = [
  { label: "Africa", value: "africa" },
  { label: "America", value: "americas" },
  { label: "Asia", value: "asia" },
  { label: "Europe", value: "europe" },
  { label: "Oceania", value: "oceania" },
];

export const FilterRegion: FC<FilterRegionProps> = () => {
  const params = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const region = params.get("region");

  const [value, setValue] = useState<string>(region || "");

  useEffect(() => {
    const currentParams = new URLSearchParams(params.toString());
    if (value) currentParams.set("region", value);
    else currentParams.delete("region");

    router.push(`${pathname}?${currentParams.toString()}`);
  }, [value]);

  return <Select data={regions} value={value} onChange={(a) => setValue(a)} />;
};

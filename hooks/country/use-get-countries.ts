"use client";

import { useEffect, useState } from "react";
import { fetchCountries } from "@/services";
import { Country } from "@/types";
import { useSearchParams } from "next/navigation";

export const useGetCountries = (): [Country[], boolean, string] => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const params = useSearchParams();

  const getCountries = async () => {
    try {
      setLoading(true);

      const requestedCountries = await fetchCountries(
        params.get("search"),
        params.get("region")
      );

      setCountries(requestedCountries);
      setError("");
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
        setCountries([]);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCountries();
  }, [params]);

  return [countries, loading, error];
};

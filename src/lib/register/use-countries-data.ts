"use client";

import { useEffect, useMemo, useState } from "react";
import { usePapaParse } from "react-papaparse";

const countriesCsvPath = "/2026/countries.csv";

type CountryData = {
  name: string;
  "alpha-2": string;
};

const useCountriesData = () => {
  const [countriesData, setCountriesData] = useState<CountryData[]>([]);

  const [isLoading, setIsLoading] = useState(true);

  const { readRemoteFile } = usePapaParse();

  useEffect(() => {
    readRemoteFile(countriesCsvPath, {
      download: true,
      header: true,
      complete: (results) => {
        const data = results.data as CountryData[];
        // Put "United States" at the top of the list
        const usIndex = data.findIndex(
          (country) => country["alpha-2"] === "US",
        );
        if (usIndex > -1) {
          const usCountry = data.splice(usIndex, 1)[0];
          data.unshift(usCountry);
        }
        setCountriesData(data);
        setIsLoading(false);
      },
      error: (error) => {
        console.error("Error loading countries:", error);
        setIsLoading(false);
      },
    });
  }, [readRemoteFile]);

  const data = useMemo(
    () => ({
      countriesData,

      isLoading,
    }),
    [countriesData, isLoading],
  );

  return data;
};

export { useCountriesData };

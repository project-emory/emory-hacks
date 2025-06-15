"use client";

import { useEffect, useMemo, useState } from "react";
import { usePapaParse } from "react-papaparse";

const countriesCsvPath = "/2026/countries.csv";
const schoolsCsvPath = "/2026/schools.csv";

type CountryData = {
  name: string;
  alpha2: string;
};

type SchoolData = {
  name: string;
};

const useData = () => {
  const [countriesData, setCountriesData] = useState<CountryData[]>([]);
  const [schoolsData, setSchoolsData] = useState<SchoolData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const { readRemoteFile } = usePapaParse();

  useEffect(() => {
    readRemoteFile(countriesCsvPath, {
      download: true,
      header: true,
      complete: (results) => {
        setCountriesData(results.data as CountryData[]);
      },
      error: (error) => {
        console.error("Error loading countries:", error);
      },
    });

    readRemoteFile(schoolsCsvPath, {
      download: true,
      header: true,
      complete: (results) => {
        setSchoolsData(results.data as SchoolData[]);
        setIsLoading(false);
      },
      error: (error) => {
        console.error("Error loading schools:", error);
        setIsLoading(false);
      },
    });
  }, [readRemoteFile]);

  const data = useMemo(
    () => ({
      countriesData,
      schoolsData,
      isLoading,
    }),
    [countriesData, schoolsData, isLoading],
  );

  return data;
};

export { useData };

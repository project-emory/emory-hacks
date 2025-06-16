"use client";

import { useEffect, useMemo, useState } from "react";
import { usePapaParse } from "react-papaparse";

const schoolsCsvPath = "/schools.csv";

type SchoolData = {
  name: string;
};

const useSchoolsData = () => {
  const [schoolsData, setSchoolsData] = useState<SchoolData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const { readRemoteFile } = usePapaParse();

  useEffect(() => {
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
      schoolsData,
      isLoading,
    }),
    [schoolsData, isLoading],
  );

  return data;
};

export { useSchoolsData };

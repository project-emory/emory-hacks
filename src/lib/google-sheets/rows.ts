"use server";

import { getSheet } from "./sheet";

export const addRow = async (row: (number | string | boolean | Date)[]) => {
  const sheet = await getSheet();
  await sheet.addRow(row).then(() => {
    console.log("added", row);
  });
};

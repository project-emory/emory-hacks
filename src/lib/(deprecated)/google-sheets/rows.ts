"use server";

import { getSheet } from "./sheet";

export const addRow = async (
  row: Record<string, string | boolean | number | Date>,
) => {
  const sheet = await getSheet();

  try {
    await sheet.addRow(row, {}).then(() => {
      console.log("added", row);
    });
  } catch (error) {
    console.error("Error adding row:", error);
  }
};

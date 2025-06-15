"use server";

import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";
import { googleCredentials } from "./config";

const serviceAccountAuth = new JWT({
  email: googleCredentials.client_email,
  key: googleCredentials.private_key,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const doc = new GoogleSpreadsheet(
  googleCredentials.spreadsheet_id,
  serviceAccountAuth,
);

await doc.loadInfo().then(() => {
  console.log("Doc info loaded");
});

const sheet = doc.sheetsById[googleCredentials.sheet_id];

export const getSheet = async () => {
  return sheet;
};

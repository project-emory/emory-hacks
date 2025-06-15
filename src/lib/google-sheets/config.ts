import "@/envConfig";

const googleCredentials = {
  client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL!,
  private_key: process.env.GOOGLE_PRIVATE_KEY!,
  spreadsheet_id: process.env.GOOGLE_SPREADSHEET_ID!,
  sheet_id: Number.parseInt(process.env.GOOGLE_SHEET_ID!),
};

export { googleCredentials };

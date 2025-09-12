// import { s3 } from "@/lib/aws/s3";
// import { PutObjectCommand } from "@aws-sdk/client-s3";
// import { NextRequest, NextResponse } from "next/server";

// export async function POST(req: NextRequest) {
//   const data = await req.formData();
//   const file: File | null = data.get("file") as unknown as File;

//   if (!file) {
//     return NextResponse.json({ success: false });
//   }

//   const bytes = await file.arrayBuffer();
//   const buffer = Buffer.from(bytes);

//   const key = `${file.name.slice(0, file.name.lastIndexOf("."))}-${Date.now()}.pdf`;

//   const command = new PutObjectCommand({
//     Bucket: "emoryhacks2025",
//     Key: key,
//     Body: buffer,
//   });

//   try {
//     await s3.send(command);
//     const url = `https://emoryhacks2025.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`;
//     return NextResponse.json({ success: true, url });
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json({ success: false });
//   }
// }

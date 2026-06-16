import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;
    
    if (!file) {
      return NextResponse.json({ error: "No file received." }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const filename = Date.now() + "_" + file.name.replaceAll(" ", "_");
    const dir = path.join(process.cwd(), "public", "uploads", "admin");
    
    try {
      await fs.access(dir);
    } catch (e) {
      await fs.mkdir(dir, { recursive: true });
    }

    const filePath = path.join(dir, filename);
    await fs.writeFile(filePath, buffer);

    const fileUrl = `/uploads/admin/${filename}`;

    return NextResponse.json({ url: fileUrl, success: true });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json({ error: "File upload failed." }, { status: 500 });
  }
}

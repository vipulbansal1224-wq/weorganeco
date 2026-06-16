import fs from "fs/promises";
import path from "path";
import FaqClient from "./FaqClient";

export default async function AdminFAQ() {
  const dataFilePath = path.join(process.cwd(), "src/app/faq/faq-data.json");
  let data: any[] = [];
  try {
    const fileContent = await fs.readFile(dataFilePath, "utf-8");
    data = JSON.parse(fileContent);
  } catch(e) {}

  return <FaqClient data={data} />;
}

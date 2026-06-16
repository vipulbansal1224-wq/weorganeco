import fs from "fs/promises";
import path from "path";
import NewsClient from "./NewsClient";

export default async function AdminNews() {
  const dataFilePath = path.join(process.cwd(), "src/app/news/news-data.json");
  let data: any[] = [];
  try {
    const fileContent = await fs.readFile(dataFilePath, "utf-8");
    data = JSON.parse(fileContent);
  } catch(e) {}

  return <NewsClient data={data} />;
}

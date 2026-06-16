"use server";

import fs from "fs/promises";
import path from "path";
import { revalidatePath } from "next/cache";

const pagesPath = path.join(process.cwd(), "src/data/pages.json");

export async function getPages() {
  try {
    const fileContent = await fs.readFile(pagesPath, "utf-8");
    return JSON.parse(fileContent);
  } catch (err) {
    return [];
  }
}

export async function savePages(pagesData: any[]) {
  await fs.writeFile(pagesPath, JSON.stringify(pagesData, null, 2));
  revalidatePath("/", "layout");
}

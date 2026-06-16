"use server";

import fs from "fs/promises";
import path from "path";
import { revalidatePath } from "next/cache";

const menuPath = path.join(process.cwd(), "src/data/menu.json");

export async function getMenu() {
  try {
    const fileContent = await fs.readFile(menuPath, "utf-8");
    return JSON.parse(fileContent);
  } catch (err) {
    return [];
  }
}

export async function saveMenu(menuData: any) {
  await fs.writeFile(menuPath, JSON.stringify(menuData, null, 2));
  revalidatePath("/");
  revalidatePath("/admin/menu");
}

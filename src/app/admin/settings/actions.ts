"use server";

import fs from "fs/promises";
import path from "path";
import { revalidatePath } from "next/cache";

const settingsPath = path.join(process.cwd(), "src/data/settings.json");

export async function getSettings() {
  try {
    const fileContent = await fs.readFile(settingsPath, "utf-8");
    return JSON.parse(fileContent);
  } catch (err) {
    return {};
  }
}

export async function saveSettings(settingsData: any) {
  await fs.writeFile(settingsPath, JSON.stringify(settingsData, null, 2));
  revalidatePath("/", "layout");
}

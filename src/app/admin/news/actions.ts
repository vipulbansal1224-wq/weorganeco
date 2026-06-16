"use server";

import fs from "fs/promises";
import path from "path";
import { revalidatePath } from "next/cache";

const dataFilePath = path.join(process.cwd(), "src/app/news/news-data.json");

async function getData() {
  try {
    const fileContent = await fs.readFile(dataFilePath, "utf-8");
    return JSON.parse(fileContent);
  } catch (err) {
    return [];
  }
}

export async function addNews(formData: FormData) {
  const year = formData.get("year") as string;
  const title = formData.get("title") as string;
  const date = formData.get("date") as string;
  const img = formData.get("imgUrl") as string;
  const link = formData.get("link") as string;

  if (!year || !title) return;

  const data = await getData();
  
  let yearGroup = data.find((g: any) => g.year === year);
  if (!yearGroup) {
    yearGroup = { year, items: [] };
    data.unshift(yearGroup); // Add new year at the top
    // Sort descending by year
    data.sort((a: any, b: any) => parseInt(b.year) - parseInt(a.year));
  }

  yearGroup.items.unshift({ title, date, img, link });

  await fs.writeFile(dataFilePath, JSON.stringify(data, null, 2));
  revalidatePath("/admin/news");
  revalidatePath("/news");
}

export async function deleteNews(yearIndex: number, itemIndex: number) {
  const data = await getData();
  
  if (data[yearIndex] && data[yearIndex].items) {
    data[yearIndex].items.splice(itemIndex, 1);
    
    // If year group becomes empty, delete the year group
    if (data[yearIndex].items.length === 0) {
      data.splice(yearIndex, 1);
    }

    await fs.writeFile(dataFilePath, JSON.stringify(data, null, 2));
    revalidatePath("/admin/news");
    revalidatePath("/news");
  }
}

export async function editNews(formData: FormData) {
  const originalYearIdxStr = formData.get("originalYearIdx") as string;
  const originalItemIdxStr = formData.get("originalItemIdx") as string;
  
  const year = formData.get("year") as string;
  const title = formData.get("title") as string;
  const date = formData.get("date") as string;
  const img = formData.get("imgUrl") as string;
  const link = formData.get("link") as string;

  if (!originalYearIdxStr || !originalItemIdxStr || !year || !title) return;

  const originalYearIdx = parseInt(originalYearIdxStr);
  const originalItemIdx = parseInt(originalItemIdxStr);
  const data = await getData();

  if (data[originalYearIdx] && data[originalYearIdx].items[originalItemIdx]) {
    const originalYear = data[originalYearIdx].year;
    
    // If year changed, we need to move it
    if (originalYear !== year) {
      data[originalYearIdx].items.splice(originalItemIdx, 1);
      if (data[originalYearIdx].items.length === 0) {
        data.splice(originalYearIdx, 1);
      }
      
      let yearGroup = data.find((g: any) => g.year === year);
      if (!yearGroup) {
        yearGroup = { year, items: [] };
        data.unshift(yearGroup);
        data.sort((a: any, b: any) => parseInt(b.year) - parseInt(a.year));
      }
      yearGroup.items.unshift({ title, date, img, link });
    } else {
      // Just update it
      data[originalYearIdx].items[originalItemIdx] = { title, date, img, link };
    }
    
    await fs.writeFile(dataFilePath, JSON.stringify(data, null, 2));
    revalidatePath("/admin/news");
    revalidatePath("/news");
  }
}

"use server";

import fs from "fs/promises";
import path from "path";
import { revalidatePath } from "next/cache";

const dataFilePath = path.join(process.cwd(), "src/app/faq/faq-data.json");

async function getData() {
  try {
    const fileContent = await fs.readFile(dataFilePath, "utf-8");
    return JSON.parse(fileContent);
  } catch (err) {
    return [];
  }
}

export async function addFaq(formData: FormData) {
  const categoryTitle = formData.get("categoryTitle") as string;
  const question = formData.get("question") as string;
  const answer = formData.get("answer") as string;

  if (!categoryTitle || !question || !answer) return;

  const data = await getData();
  
  let catGroup = data.find((g: any) => g.categoryTitle === categoryTitle);
  if (!catGroup) {
    catGroup = { categoryTitle, faqs: [] };
    data.push(catGroup);
  }

  catGroup.faqs.push({ question, answer: `<p>${answer.replace(/\n/g, '<br/>')}</p>` });

  await fs.writeFile(dataFilePath, JSON.stringify(data, null, 2));
  revalidatePath("/admin/faq");
  revalidatePath("/faq");
}

export async function deleteFaq(catIndex: number, faqIndex: number) {
  const data = await getData();
  
  if (data[catIndex] && data[catIndex].faqs) {
    data[catIndex].faqs.splice(faqIndex, 1);
    
    // If category group becomes empty, delete the category group
    if (data[catIndex].faqs.length === 0) {
      data.splice(catIndex, 1);
    }

    await fs.writeFile(dataFilePath, JSON.stringify(data, null, 2));
    revalidatePath("/admin/faq");
    revalidatePath("/faq");
  }
}

export async function editFaq(formData: FormData) {
  const originalCatIdxStr = formData.get("originalCatIdx") as string;
  const originalFaqIdxStr = formData.get("originalFaqIdx") as string;
  
  const categoryTitle = formData.get("categoryTitle") as string;
  const question = formData.get("question") as string;
  const answer = formData.get("answer") as string;

  if (!originalCatIdxStr || !originalFaqIdxStr || !categoryTitle || !question || !answer) return;

  const originalCatIdx = parseInt(originalCatIdxStr);
  const originalFaqIdx = parseInt(originalFaqIdxStr);
  const data = await getData();

  if (data[originalCatIdx] && data[originalCatIdx].faqs[originalFaqIdx]) {
    const originalCatTitle = data[originalCatIdx].categoryTitle;
    
    const formattedAnswer = `<p>${answer.replace(/\n/g, '<br/>')}</p>`;

    // If category changed, we need to move it
    if (originalCatTitle !== categoryTitle) {
      data[originalCatIdx].faqs.splice(originalFaqIdx, 1);
      if (data[originalCatIdx].faqs.length === 0) {
        data.splice(originalCatIdx, 1);
      }
      
      let catGroup = data.find((g: any) => g.categoryTitle === categoryTitle);
      if (!catGroup) {
        catGroup = { categoryTitle, faqs: [] };
        data.push(catGroup);
      }
      catGroup.faqs.push({ question, answer: formattedAnswer });
    } else {
      // Just update it
      data[originalCatIdx].faqs[originalFaqIdx] = { question, answer: formattedAnswer };
    }
    
    await fs.writeFile(dataFilePath, JSON.stringify(data, null, 2));
    revalidatePath("/admin/faq");
    revalidatePath("/faq");
  }
}

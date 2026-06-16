import fs from "fs/promises";
import path from "path";
import ProductClient from "./ProductClient";

export default async function AdminProducts() {
  const dataFilePath = path.join(process.cwd(), "src/app/products/all-categories-data.json");
  let data: any = {};
  try {
    const fileContent = await fs.readFile(dataFilePath, "utf-8");
    data = JSON.parse(fileContent);
  } catch(e) {}

  // Flatten products for display
  const allProducts: any[] = [];
  const categories: any[] = [];

  Object.keys(data).forEach(catSlug => {
    const category = data[catSlug];
    categories.push({ slug: catSlug, title: category.title });
    if (category.products) {
      category.products.forEach((p: any, index: number) => {
        allProducts.push({
          categorySlug: catSlug,
          categoryTitle: category.title,
          index: index,
          title: p.title,
          img: p.img
        });
      });
    }
  });

  return <ProductClient allProducts={allProducts} categories={categories} />;
}

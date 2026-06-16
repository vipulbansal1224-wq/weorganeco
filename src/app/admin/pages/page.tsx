import { getPages } from "./actions";
import PageClient from "./PageClient";

export default async function AdminPages() {
  const pagesData = await getPages();
  return <PageClient initialPages={pagesData} />;
}

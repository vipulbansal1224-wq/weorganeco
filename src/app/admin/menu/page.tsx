import { getMenu } from "./actions";
import MenuClient from "./MenuClient";

export default async function AdminMenu() {
  const menuData = await getMenu();

  return <MenuClient initialData={menuData} />;
}

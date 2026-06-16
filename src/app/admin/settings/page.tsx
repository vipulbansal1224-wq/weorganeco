import { getSettings } from "./actions";
import SettingsClient from "./SettingsClient";

export default async function AdminSettings() {
  const settingsData = await getSettings();
  return <SettingsClient initialSettings={settingsData} />;
}

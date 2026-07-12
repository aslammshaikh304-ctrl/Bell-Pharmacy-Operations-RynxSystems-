import { invoke } from "@tauri-apps/api/core";

export async function getAutomationState() {
  const json = await invoke<string>("get_automation_state");

  try {
    return JSON.parse(json);
  } catch {
    return {};
  }
}
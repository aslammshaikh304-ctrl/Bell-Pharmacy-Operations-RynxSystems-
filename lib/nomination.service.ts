import { invoke } from "@tauri-apps/api/core";

export async function startNominationChecker() {
  return await invoke<string>("start_nomination_checker");
}
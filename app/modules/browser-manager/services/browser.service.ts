"use client";

import { invoke } from "@tauri-apps/api/core";

export async function launchBrowser() {
  return await invoke("launch_browser");
}

export async function closeBrowser() {
  return await invoke("close_browser");
}

export async function browserStatus() {
  return await invoke<string>("browser_status");
}
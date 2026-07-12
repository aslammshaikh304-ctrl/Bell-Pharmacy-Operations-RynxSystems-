"use client";

import { useBrowserStore } from "../store/browser.store";
import * as BrowserService from "../services/browser.service";

export function useBrowser() {
  const store = useBrowserStore();

  async function launch() {
    store.setLaunching(true);

    try {
      await BrowserService.launchBrowser();

      store.setConnected(true);
      store.setBrowserName("Chrome");

    } finally {
      store.setLaunching(false);
    }
  }

  return {
    ...store,
    launch,
  };
}
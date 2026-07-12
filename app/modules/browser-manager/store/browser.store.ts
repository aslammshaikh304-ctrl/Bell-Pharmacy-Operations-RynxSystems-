"use client";

import { create } from "zustand";

interface BrowserState {
  connected: boolean;
  launching: boolean;
  loggedIn: boolean;

  browserName: string;
  currentUrl: string;

  setConnected: (value: boolean) => void;
  setLaunching: (value: boolean) => void;
  setLoggedIn: (value: boolean) => void;

  setBrowserName: (value: string) => void;
  setCurrentUrl: (value: string) => void;
}

export const useBrowserStore = create<BrowserState>((set) => ({
  connected: false,
  launching: false,
  loggedIn: false,

  browserName: "None",
  currentUrl: "-",

  setConnected: (connected) => set({ connected }),
  setLaunching: (launching) => set({ launching }),
  setLoggedIn: (loggedIn) => set({ loggedIn }),

  setBrowserName: (browserName) => set({ browserName }),
  setCurrentUrl: (currentUrl) => set({ currentUrl }),
}));
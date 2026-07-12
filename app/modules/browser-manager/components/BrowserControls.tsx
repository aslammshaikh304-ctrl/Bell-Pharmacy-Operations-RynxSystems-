"use client";

import { Button } from "@/components/ui/button";
import {
  launchBrowser,
  closeBrowser,
} from "../services/browser.service";

export default function BrowserControls() {
  async function handleLaunch() {
    try {
      const result = await launchBrowser();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }

  async function handleClose() {
    try {
      const result = await closeBrowser();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="flex gap-4">
      <Button onClick={handleLaunch}>
        Launch Browser
      </Button>

      <Button
        variant="secondary"
        onClick={handleClose}
      >
        Close Browser
      </Button>
    </div>
  );
}
"use client";

import BrowserStatus from "@/app/modules/browser-manager/components/BrowserStatus";
import BrowserControls from "@/app/modules/browser-manager/components/BrowserControls";
import BrowserSession from "@/app/modules/browser-manager/components/BrowserSession";
import BrowserConsole from "@/app/modules/browser-manager/components/BrowserConsole";

export default function BrowserManagerPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          Browser Manager
        </h1>

        <p className="text-muted-foreground">
          Manage the automation browser session.
        </p>
      </div>

      <BrowserStatus />

      <BrowserControls />

      <BrowserSession />

      <BrowserConsole />
    </div>
  );
}
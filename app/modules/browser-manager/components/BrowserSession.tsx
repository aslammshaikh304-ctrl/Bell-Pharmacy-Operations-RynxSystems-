"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useBrowserStore } from "../store/browser.store";

export default function BrowserSession() {
  const browserName = useBrowserStore((state) => state.browserName);
  const currentUrl = useBrowserStore((state) => state.currentUrl);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Current Session</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <div>
          <p className="text-sm text-muted-foreground">
            Browser
          </p>

          <p className="font-semibold">
            {browserName}
          </p>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">
            Current URL
          </p>

          <p className="break-all">
            {currentUrl}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
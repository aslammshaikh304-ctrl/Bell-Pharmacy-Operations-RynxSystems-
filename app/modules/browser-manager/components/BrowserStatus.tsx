"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useBrowserStore } from "../store/browser.store";

export default function BrowserStatus() {
  const connected = useBrowserStore((state) => state.connected);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Browser Status</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="flex items-center gap-3">
          <div
            className={`h-3 w-3 rounded-full ${
              connected ? "bg-green-500" : "bg-red-500"
            }`}
          />

          <span className="text-lg font-medium">
            {connected ? "Connected" : "Disconnected"}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
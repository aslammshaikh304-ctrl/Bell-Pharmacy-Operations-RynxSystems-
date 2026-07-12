"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function BrowserConsole() {
  const logs = [
    "Application Started",
    "Browser Manager Loaded",
    "Waiting for Browser...",
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Console</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="space-y-2">
          {logs.map((log, index) => (
            <p
              key={index}
              className="text-sm"
            >
              {log}
            </p>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
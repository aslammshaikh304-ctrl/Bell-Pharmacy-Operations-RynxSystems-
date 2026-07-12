"use client";

import { CheckCircle2 } from "lucide-react";

const checks = [
  "Python Installed",
  "Playwright Installed",
  "Chrome Available",
  "Google Credentials",
  "Configuration Loaded",
];

export default function HealthStatus() {
  return (
    <div className="rounded-xl border bg-card p-6">
      <h2 className="mb-6 text-xl font-semibold">
        System Health
      </h2>

      <div className="space-y-4">
        {checks.map((item) => (
          <div
            key={item}
            className="flex items-center gap-3"
          >
            <CheckCircle2 className="h-5 w-5 text-green-500" />

            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
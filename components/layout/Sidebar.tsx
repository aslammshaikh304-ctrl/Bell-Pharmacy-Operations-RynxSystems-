"use client";

import Navigation from "./Navigation";

export default function Sidebar() {
  return (
    <aside className="w-72 border-r bg-card">
      <div className="border-b p-6">
        <h1 className="text-xl font-bold">
          Bell Pharmacy
        </h1>

        <p className="text-sm text-muted-foreground">
          Operations Platform
        </p>
      </div>

      <Navigation />
    </aside>
  );
}
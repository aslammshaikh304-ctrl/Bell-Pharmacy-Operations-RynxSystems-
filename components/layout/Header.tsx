"use client";

import UserMenu from "./UserMenu";

export default function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-background px-6">
      <div>
        <h2 className="text-lg font-semibold">
          Dashboard
        </h2>

        <p className="text-sm text-muted-foreground">
          Bell Pharmacy Operations
        </p>
      </div>

      <UserMenu />
    </header>
  );
}
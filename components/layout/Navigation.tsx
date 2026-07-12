"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const items = [
  {
    name: "Dashboard",
    href: "/",
  },
  {
    name: "Nomination Checker",
    href: "/modules/nomination-checker",
  },
  {
    name: "GP Email Sender",
    href: "/modules/gp-email-sender",
  },
  {
    name: "Browser Manager",
    href: "/modules/browser-manager",
  },
  {
    name: "Logs",
    href: "/modules/logs",
  },
  {
    name: "Settings",
    href: "/modules/settings",
  },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="space-y-2 p-4">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "block rounded-lg px-4 py-3 transition-colors hover:bg-muted",
            pathname === item.href &&
              "bg-primary text-primary-foreground"
          )}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}
"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function UserMenu() {
  return (
    <div className="flex items-center gap-3">

      <div className="text-right">
        <p className="font-medium">
          Administrator
        </p>

        <p className="text-sm text-green-500">
          Online
        </p>
      </div>

      <Avatar>
        <AvatarFallback>BP</AvatarFallback>
      </Avatar>

    </div>
  );
}
"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";

const queryClient = new QueryClient();

interface Props {
  children: ReactNode;
}

export default function AppProvider({ children }: Props) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
    >
      <QueryClientProvider client={queryClient}>
        {children}

        <Toaster
          position="top-right"
          richColors
        />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
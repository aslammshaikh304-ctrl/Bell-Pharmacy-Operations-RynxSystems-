import AppShell from "@/components/layout/AppShell";

export default function HomePage() {
  return (
    <AppShell>

      <div className="space-y-6">

        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

        <p className="text-muted-foreground">
          Welcome to Bell Pharmacy Operations.
        </p>

      </div>

    </AppShell>
  );
}
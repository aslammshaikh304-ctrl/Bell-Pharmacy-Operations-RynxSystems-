import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Props {
  logs: string[];
}

export default function LogsCard({
  logs,
}: Props) {
  return (
    <Card>

      <CardHeader>
        <CardTitle>
          Live Logs
        </CardTitle>
      </CardHeader>

      <CardContent>

        <div className="h-72 overflow-y-auto rounded-md border bg-muted p-4">

          {logs.map((log, i) => (

            <p
              key={i}
              className="font-mono text-sm mb-1"
            >
              {log}
            </p>

          ))}

        </div>

      </CardContent>

    </Card>
  );
}
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Progress } from "@/components/ui/progress";

interface Props {
  current: number;
  total: number;
}

export default function ProgressCard({
  current,
  total,
}: Props) {

  const value =
    total === 0
      ? 0
      : (current / total) * 100;

  return (
    <Card>

      <CardHeader>
        <CardTitle>
          Progress
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-3">

        <Progress value={value} />

        <p className="text-sm text-muted-foreground">
          {current} / {total}
        </p>

      </CardContent>

    </Card>
  );
}
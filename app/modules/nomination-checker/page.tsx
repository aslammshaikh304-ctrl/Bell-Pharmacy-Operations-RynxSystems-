"use client";

import { useState } from "react";

import BackToDashboard from "@/components/navigation/BackToDashboard";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import StatCard from "@/components/dashboard/StatCard";
import ProgressCard from "@/components/dashboard/ProgressCard";
import LogsCard from "@/components/dashboard/LogsCard";

import { startNominationChecker } from "@/lib/nomination.service";
import { useAutomationState } from "@/hooks/useAutomationState";

export default function NominationCheckerPage() {
  const automation = useAutomationState();

  const [running, setRunning] = useState(false);

  async function runChecker() {
    setRunning(true);

    try {
      await startNominationChecker();
    } catch (err) {
      console.error(err);
    }

    setRunning(false);
  }

  return (
    <div className="p-8 space-y-6">

      {/* Header */}

      <Card>

        <CardContent className="flex items-center justify-between pt-6">

          <div>

            <h1 className="text-3xl font-bold">
              Bell Pharmacy Operations
            </h1>

            <p className="text-muted-foreground mt-2">
              Nomination Checker
            </p>

            <div className="flex gap-3 mt-6">

              <Button
                onClick={runChecker}
                disabled={automation.running}
              >
                Run Nomination Checker
              </Button>

              <Button
                variant="destructive"
                disabled={!automation.running}
              >
                Stop
              </Button>

            </div>

          </div>

          <BackToDashboard />

        </CardContent>

      </Card>

      {/* Automation Status */}

      <Card>

        <CardHeader>

          <CardTitle>
            Automation
          </CardTitle>

        </CardHeader>

        <CardContent className="flex justify-between items-center">

          <div>

            <p className="text-sm text-muted-foreground">
              Status
            </p>

            <p className="text-xl font-bold">
              {automation.running ? "Running" : "Idle"}
            </p>

          </div>

          <div className="text-right">

            <p className="text-sm text-muted-foreground">
              Current Patient
            </p>

            <p className="font-semibold">
              {automation.current_patient || "-"}
            </p>

          </div>

        </CardContent>

      </Card>

      {/* Dashboard */}

      <Card>

        <CardHeader>

          <CardTitle>
            Automation Dashboard
          </CardTitle>

        </CardHeader>

        <CardContent className="space-y-6">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

            <StatCard
              title="Correct"
              value={automation.correct}
            />

            <StatCard
              title="Incorrect"
              value={automation.incorrect}
            />

            <StatCard
              title="No Nomination"
              value={automation.no_nomination}
            />

            <StatCard
              title="Failed"
              value={automation.failed}
            />

          </div>

          <ProgressCard
            current={automation.current_index}
            total={automation.total_patients}
          />

          <LogsCard
            logs={automation.logs}
          />

        </CardContent>

      </Card>

    </div>
  );
}
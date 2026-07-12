"use client";

import { useEffect, useState } from "react";
import { getAutomationState } from "@/lib/state.service";

export interface AutomationState {
  running: boolean;

  current_patient: string;

  current_index: number;

  total_patients: number;

  correct: number;

  incorrect: number;

  no_nomination: number;

  failed: number;

  current_log: string;

  logs: string[];
}

const DEFAULT_STATE: AutomationState = {
  running: false,

  current_patient: "",

  current_index: 0,

  total_patients: 0,

  correct: 0,

  incorrect: 0,

  no_nomination: 0,

  failed: 0,

  current_log: "Waiting...",

  logs: [],
};

export function useAutomationState() {
  const [state, setState] =
    useState<AutomationState>(DEFAULT_STATE);

  useEffect(() => {
    const timer = setInterval(async () => {
      try {
        const data = await getAutomationState();

        setState({
          running: data.running ?? false,

          current_patient: data.current_patient ?? "",

          current_index: data.current_index ?? 0,

          total_patients: data.total_patients ?? 0,

          correct: data.correct ?? 0,

          incorrect: data.incorrect ?? 0,

          no_nomination: data.no_nomination ?? 0,

          failed: data.failed ?? 0,

          current_log: data.current_log ?? "Waiting...",

          logs: data.logs ?? [],
        });
      } catch {
        // Ignore until state.json exists
      }
    }, 500);

    return () => clearInterval(timer);
  }, []);

  return state;
}
"use client";

import { useEffect, useState } from "react";
import { DEMO_LOADING_DELAY_MS } from "../config";
import type { FinanceDemoData } from "../types";
import { valoryxSample } from "../valoryxSample";

export function useFinanceData(simulateDelay = true): {
  data: FinanceDemoData;
  isLoading: boolean;
} {
  const [isLoading, setIsLoading] = useState<boolean>(simulateDelay);

  useEffect(() => {
    if (!simulateDelay) {
      return;
    }

    const timeout = window.setTimeout(() => {
      setIsLoading(false);
    }, DEMO_LOADING_DELAY_MS);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [simulateDelay]);

  return {
    data: valoryxSample,
    isLoading
  };
}

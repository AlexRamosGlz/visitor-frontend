'use client';

import React from "react";
import { counterApi } from "@/Features/Counter/api/counter.api";

interface CounterContextStateType {
  count: number;
}

interface CounterContextType {
  state: CounterContextStateType;
  increment: (id: number) => Promise<void>;
  fetchCount: (id: number) => Promise<void>;
}

const initialState: CounterContextStateType = {
  count: 0,
};

export const CounterContext = React.createContext<CounterContextType>({
  state: initialState,
  increment: async () => {},
  fetchCount: async () => {},
});

export const CounterProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, setState] = React.useState(initialState);

  async function increment(id: number) {
    const { data, error } = await counterApi.increment(id);
    if (error) {
      console.error("Error incrementing count:", error);
      return;
    }
    if (data) {
      setState({ count: data.count });
    }
  }

  async function fetchCount(id: number) {
    const { data, error } = await counterApi.getCount(id);

    if (error) {
      console.error("Error fetching count:", error);
      return;
    }

    if (data) {
      setState({ count: data.count });
    }
  }

  return (
    <CounterContext.Provider
      value={{ state, increment, fetchCount }}
    >
      {children}
    </CounterContext.Provider>
  );
};

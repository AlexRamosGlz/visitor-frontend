'use client';

import React, {useEffect, useContext } from 'react';
import { CounterContext } from '@/context/counterContext';
import {useParams} from 'next/navigation';

export default function Counter(): React.ReactNode {
  const { state, increment } = useContext(CounterContext);
  const { id } = useParams();

  useEffect(() => {
    increment(Number(id));
  }, []);
  return (
    <div className="flex flex-col items-center justify-center">
      <span className="text-[var(--blue-primary)] text-[12rem] font-bold italic" data-testid="count">
        {state.count}
      </span>
      <p className="text">people have visited this page</p>
    </div>
  );
}


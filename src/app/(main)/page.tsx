'use client';

import React from 'react'
import Counter  from '@/Features/Counter/Counter';

export default function AppPage(): React.ReactNode {
  return (
    <div className="flex items-center justify-center h-screen">
      <Counter />
    </div>
  );
}
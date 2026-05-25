import React from 'react';

export default function Counter(): React.ReactNode {
  return (
    <div className="flex flex-col items-center justify-center">
      <span className="text-[var(--blue-primary)] text-[12rem] font-bold italic" data-testid="count">
        1
      </span>
      <p className="text">people have visited this page</p>
    </div>
  );
}


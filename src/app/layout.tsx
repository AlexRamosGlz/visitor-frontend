import React from 'react';
import type { Metadata } from 'next';
import '@/globals.css';
import { CounterProvider } from '@/context/counterContext';


export const metadata: Metadata = {
    title: 'React App',
    description: 'Web site created with Next.js.',
}

export default function Layout({children}: {children: React.ReactNode}) {

  return (
    <CounterProvider>
      <html lang="en">
        <body>
            <div id="root">{children}</div>
        </body>
      </html>
    </CounterProvider>
  );
}
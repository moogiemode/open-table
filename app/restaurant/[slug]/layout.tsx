import React from 'react';
import { Header } from './components';



export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Header />
      <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
        {children}
      </div>
    </main>
  );
}
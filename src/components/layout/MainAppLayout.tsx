import React from 'react';
import { cn } from '@/lib/utils';
import AppHeader from './Header'; // Assumes Header.tsx is in src/components/layout/

interface MainAppLayoutProps {
  children: React.ReactNode; // Main content of the page
  className?: string;
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className }) => {
  // Layout Requirements for the overall application structure:
  // - `overall.definition: "flex flex-col items-center gap-6"`
  //   This is applied to the root `div` of this layout, organizing the Header and Main Content vertically,
  //   centering them on the page, and providing a gap between them.
  // - `overall.sizing.mainContent: "w-full max-w-2xl"`
  //   This applies to the `<main>` HTML5 element that wraps the page's primary content (passed as `children`).
  // The `body` tag already has `bg-background` and `text-foreground` applied globally via `src/index.css`.
  return (
    <div className={cn(
      "min-h-screen flex flex-col items-center gap-6",
      className
    )}>
      <AppHeader />
      
      <main className={cn(
        "w-full max-w-2xl px-4 pb-8", // Applies max-width, horizontal padding for responsiveness, and bottom padding for spacing.
        // The `AssessmentCard` (expected child) will handle its own specific styling like `p-6`, `bg-surface`, `rounded-md`, `shadow-md`.
      )}>
        {children}
      </main>
    </div>
  );
};

export default MainAppLayout;

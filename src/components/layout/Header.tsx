import React from 'react';
import { cn } from '@/lib/utils';
import HeaderSection from '../Assessment/HeaderSection'; // Relative path to the organism

interface AppHeaderProps {
  className?: string;
}

const AppHeader: React.FC<AppHeaderProps> = ({ className }) => {
  // This component serves as the semantic <header> element for the application.
  // It wraps the HeaderSection organism, which contains the actual header content and styling.
  // Layout Requirements for the header block:
  // - `layout: "flex justify-center py-4 bg-surface"`
  // - `height: "h-fit"`
  // The existing HeaderSection component (from context code) has:
  //   `className="w-full flex flex-col items-center justify-center py-4 bg-card"`
  // Note: `bg-card` is effectively `bg-surface` based on CSS variables.
  // HeaderSection already includes `py-4` and its own background color.
  // It is also `w-full` and centers its own content.
  // The MainAppLayout will handle centering this header block using `items-center`.
  // Therefore, this AppHeader component ensures the header area takes full width and applies the surface background,
  // while relying on HeaderSection for its internal padding and content.
  return (
    <header className={cn(
      "w-full bg-surface", // Ensures header background spans full width. `py-4` is handled by HeaderSection.
      className
    )}>
      <HeaderSection />
    </header>
  );
};

export default AppHeader;

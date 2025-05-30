import React from 'react';
import { cn } from '@/lib/utils';

interface HeaderSectionProps {
  className?: string;
}

const HeaderSection: React.FC<HeaderSectionProps> = ({ className }) => {
  return (
    <section className={cn(
      "w-full flex flex-col items-center justify-center py-4 bg-card", // As per layout.header
      className
    )}>
      <h1 className="text-3xl sm:text-4xl font-bold text-card-foreground uppercase tracking-wider text-center px-4">
        AI QUOTIENT (AIQ) ASSESSMENT
      </h1>
      <p className="mt-2 text-base sm:text-lg font-medium text-secondary-foreground uppercase tracking-wide text-center px-4">
        SCREENING AI-FRIENDLY TALENT
      </p>
    </section>
  );
};

export default HeaderSection;

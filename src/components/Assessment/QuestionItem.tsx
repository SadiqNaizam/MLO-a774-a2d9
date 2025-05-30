import React from 'react';
import { cn } from '@/lib/utils';

interface QuestionItemProps {
  number: string;
  question: string;
  description: string;
  className?: string;
}

export const QuestionItem: React.FC<QuestionItemProps> = ({ number, question, description, className }) => {
  return (
    <div className={cn("flex flex-col sm:flex-row items-start space-y-2 sm:space-y-0 sm:space-x-4", className)}>
      <span className="text-xl font-bold text-primary flex-shrink-0 pt-px">{number}</span>
      <div className="flex-grow">
        <p className="text-sm font-medium text-card-foreground">{question}</p>
        {description && (
          <p className="mt-1 text-xs text-muted-foreground">{description}</p>
        )}
      </div>
    </div>
  );
};

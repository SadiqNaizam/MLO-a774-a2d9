import React from 'react';
import { cn } from '@/lib/utils';
import { Checkbox } from '@/components/ui/checkbox';
import type { AnswerType } from './AssessmentCard'; // Import type for clarity

interface CheckboxRowProps {
  questionId: string;
  selectedValue: AnswerType | null;
  onSelectionChange: (questionId: string, newValue: AnswerType | null) => void;
  className?: string;
}

export const CheckboxRow: React.FC<CheckboxRowProps> = ({ 
  questionId, 
  selectedValue, 
  onSelectionChange, 
  className 
}) => {

  const handleRelevantChange = (isChecked: boolean | 'indeterminate') => {
    if (typeof isChecked === 'boolean') {
        onSelectionChange(questionId, isChecked ? 'relevant' : (selectedValue === 'relevant' ? null : selectedValue));
    }
  };

  const handleNonRelevantChange = (isChecked: boolean | 'indeterminate') => {
    if (typeof isChecked === 'boolean') {
        onSelectionChange(questionId, isChecked ? 'non-relevant' : (selectedValue === 'non-relevant' ? null : selectedValue));
    }
  };

  return (
    <div className={cn("grid grid-cols-2 gap-x-1 items-center h-full", className)}>
      <div className="flex justify-center items-start pt-px"> {/* pt-px for slight alignment with QuestionItem number */} 
        <Checkbox
          id={`relevant-${questionId}`}
          checked={selectedValue === 'relevant'}
          onCheckedChange={handleRelevantChange}
          aria-label={`Mark question ${questionId} as relevant`}
        />
      </div>
      <div className="flex justify-center items-start pt-px">
        <Checkbox
          id={`non-relevant-${questionId}`}
          checked={selectedValue === 'non-relevant'}
          onCheckedChange={handleNonRelevantChange}
          aria-label={`Mark question ${questionId} as non-relevant`}
        />
      </div>
    </div>
  );
};

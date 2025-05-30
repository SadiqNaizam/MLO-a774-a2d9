import React from 'react';
import { cn } from '@/lib/utils';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import type { AIQLevel } from './AssessmentCard'; // Import type for clarity

interface AIQOutputSectionProps {
  aiqLevel: AIQLevel | null;
  comments: string;
  onCommentsChange: (comments: string) => void;
  className?: string;
}

const AIQ_LEVEL_OPTIONS: Array<{ id: AIQLevel; label: string }> = [
  { id: 'High' as const, label: 'High' },
  { id: 'Medium' as const, label: 'Medium' },
  { id: 'Low' as const, label: 'Low' },
];

export const AIQOutputSection: React.FC<AIQOutputSectionProps> = ({ 
  aiqLevel, 
  comments, 
  onCommentsChange, 
  className 
}) => {
  return (
    <div className={cn("space-y-6", className)}>
      <div className="space-y-3">
        <div className="flex items-center space-x-2">
            <Label className="text-sm font-semibold text-card-foreground">AIQ Level:</Label>
            {AIQ_LEVEL_OPTIONS.map(level => (
            <div key={level.id} className="flex items-center space-x-1.5">
                <Checkbox
                id={`aiq-${level.id.toLowerCase()}`}
                checked={aiqLevel === level.id}
                disabled
                aria-labelledby={`aiq-label-${level.id.toLowerCase()}`}
                />
                <Label 
                htmlFor={`aiq-${level.id.toLowerCase()}`} 
                id={`aiq-label-${level.id.toLowerCase()}`}
                className="text-xs sm:text-sm font-medium text-card-foreground cursor-default"
                >
                {level.label}
                </Label>
            </div>
            ))}
        </div>
        <p className="text-xs text-muted-foreground">(Auto calculated using above inputs)</p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="screener-comments" className="text-sm font-semibold text-card-foreground">
          Screener Notes / Comments:
        </Label>
        <Textarea
          id="screener-comments"
          value={comments}
          onChange={(e) => onCommentsChange(e.target.value)}
          placeholder="Enter your notes here..."
          className="min-h-[100px] bg-input text-foreground border-border focus-visible:ring-ring"
        />
      </div>
    </div>
  );
};

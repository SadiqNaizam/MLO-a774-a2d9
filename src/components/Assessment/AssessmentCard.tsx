import React, { useState, useEffect, useCallback } from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { QuestionItem } from './QuestionItem';
import { CheckboxRow } from './CheckboxRow';
import { AIQOutputSection } from './AIQOutputSection';

interface Question {
  id: string;
  number: string;
  text: string;
  description: string;
}

const DUMMY_QUESTIONS: Question[] = [
  {
    id: 'q1',
    number: '01',
    text: "Tell me about a time when you adopted a new technology or tool on your own. What motivated you, and what was the result?",
    description: "(Looks for curiosity and initiative)"
  },
  {
    id: 'q2',
    number: '02',
    text: "How do you stay up to date with new trends or tools in your field? Have you come across anything AI-related?",
    description: "(Assesses awareness and interest)"
  },
  {
    id: 'q3',
    number: '03',
    text: "Have you experimented with any AI tools, even casually? (e.g., ChatGPT, image generators, automation bots)",
    description: "(Gauges willingness to experiment)"
  },
  {
    id: 'q4',
    number: '04',
    text: "Can you think of a repetitive or time-consuming task in your role that could benefit from automation or AI?",
    description: "(Tests ability to identify practical AI opportunities)"
  },
  {
    id: 'q5',
    number: '05',
    text: "Tell me about a time you had to change your way of working because of a new process or tool. How did you respond?",
    description: "(Evaluates adaptability)"
  },
  {
    id: 'q6',
    number: '06',
    text: "Can you open an AI tool of your choice and show me how you would use it to solve something or get a result? Pls walk me through the process, step by step",
    description: "(Assesses practical application)"
  }
];

export type AIQLevel = 'High' | 'Medium' | 'Low';
export type AnswerType = 'relevant' | 'non-relevant';

interface AssessmentCardProps {
  className?: string;
}

const AssessmentCard: React.FC<AssessmentCardProps> = ({ className }) => {
  const [answers, setAnswers] = useState<Record<string, AnswerType | null>>({});
  const [aiqLevel, setAiqLevel] = useState<AIQLevel | null>(null);
  const [comments, setComments] = useState<string>("");

  const handleAnswerChange = useCallback((questionId: string, newValue: AnswerType | null) => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionId]: newValue,
    }));
  }, []);

  useEffect(() => {
    const relevantCount = Object.values(answers).filter(answer => answer === 'relevant').length;
    if (relevantCount >= 0 && relevantCount <= 1) {
      setAiqLevel('Low');
    } else if (relevantCount >= 2 && relevantCount <= 3) {
      setAiqLevel('Medium');
    } else if (relevantCount >= 4) {
      setAiqLevel('High');
    } else {
      setAiqLevel(null); // Should not happen with 6 questions, but good for safety
    }
  }, [answers]);

  return (
    <Card className={cn("w-full", className)}> {/* bg-card, rounded-md, shadow-md are default styles from Shadcn Card */}
      <CardContent className="p-6 flex flex-col gap-6"> {/* As per layout.mainContent: p-6, flex flex-col gap-6 */}
        <div className="space-y-1"> {/* Container for question headers and list */} 
          {/* Headers for Relevant/Non-Relevant Columns */}
          <div className="grid grid-cols-[1fr_160px] sm:grid-cols-[1fr_200px] gap-x-4 px-1 pb-2 border-b border-border">
            <div /> {/* Empty cell for question column header */}
            <div className="grid grid-cols-2 gap-x-1">
              <p className="font-semibold text-xs sm:text-sm text-center text-card-foreground">Relevant</p>
              <p className="font-semibold text-xs sm:text-sm text-center text-card-foreground">Non-Relevant</p>
            </div>
          </div>

          {/* Questions List */}
          <div className="space-y-0">
            {DUMMY_QUESTIONS.map((question, index) => (
              <div 
                key={question.id} 
                className={cn(
                  "grid grid-cols-[1fr_160px] sm:grid-cols-[1fr_200px] gap-x-4 items-start py-4",
                  index < DUMMY_QUESTIONS.length - 1 ? "border-b border-border" : ""
                )}
              >
                <QuestionItem 
                  number={question.number} 
                  question={question.text} 
                  description={question.description} 
                />
                <CheckboxRow 
                  questionId={question.id} 
                  selectedValue={answers[question.id] || null}
                  onSelectionChange={handleAnswerChange}
                  className="mt-1" // Small top margin to align checkboxes better with first line of question
                />
              </div>
            ))}
          </div>
        </div>

        <AIQOutputSection 
          aiqLevel={aiqLevel}
          comments={comments}
          onCommentsChange={setComments}
        />
      </CardContent>
    </Card>
  );
};

export default AssessmentCard;

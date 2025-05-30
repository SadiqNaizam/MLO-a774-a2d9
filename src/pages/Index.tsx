import React from 'react';
import MainAppLayout from '../components/layout/MainAppLayout';
import AssessmentCard from '../components/Assessment/AssessmentCard';

/**
 * AIQAssessmentPage serves as the main page for the AI Quotient Assessment.
 * It utilizes the MainAppLayout to structure the page and embeds the 
 * AssessmentCard component which contains the core assessment functionality.
 */
const AIQAssessmentPage: React.FC = () => {
  return (
    <MainAppLayout>
      <AssessmentCard />
    </MainAppLayout>
  );
};

export default AIQAssessmentPage;

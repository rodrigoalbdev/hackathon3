import { useState } from 'react';
import './App.css';

// Components
import LandingPage from './components/LandingPage';
import Assessment from './components/Assessment';
import DNACard from './components/DNACard';
import ChatCompanion from './components/ChatCompanion';
import EvolutionDashboard from './components/EvolutionDashboard';
import MatchIntelligente from './components/MatchIntelligente';

function App() {
  const [currentView, setCurrentView] = useState('landing');
  const [assessmentData, setAssessmentData] = useState(null);

  const handleStartAssessment = () => {
    setCurrentView('assessment');
  };

  const handleAssessmentComplete = (data) => {
    setAssessmentData(data);
    setCurrentView('dna-card');
  };

  const handleStartChat = () => {
    setCurrentView('chat');
  };

  const handleViewEvolution = () => {
    setCurrentView('evolution');
  };

  const handleViewMatches = () => {
    setCurrentView('matches');
  };

  const handleBack = () => {
    switch (currentView) {
      case 'assessment':
        setCurrentView('landing');
        break;
      case 'dna-card':
        setCurrentView('assessment');
        break;
      case 'chat':
        setCurrentView('dna-card');
        break;
      case 'evolution':
        setCurrentView('chat');
        break;
      case 'matches':
        setCurrentView('evolution');
        break;
      default:
        setCurrentView('landing');
    }
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'landing':
        return <LandingPage onStartAssessment={handleStartAssessment} />;
      
      case 'assessment':
        return (
          <Assessment 
            onComplete={handleAssessmentComplete}
            onBack={handleBack}
          />
        );
      
      case 'dna-card':
        return (
          <DNACard 
            onStartChat={handleStartChat}
            onBack={handleBack}
          />
        );
      
      case 'chat':
        return (
          <ChatCompanion 
            onViewEvolution={handleViewEvolution}
            onBack={handleBack}
          />
        );
      
      case 'evolution':
        return (
          <EvolutionDashboard 
            onViewMatches={handleViewMatches}
            onBack={handleBack}
          />
        );
      
      case 'matches':
        return (
          <MatchIntelligente 
            onBack={handleBack}
          />
        );
      
      default:
        return <LandingPage onStartAssessment={handleStartAssessment} />;
    }
  };

  return (
    <div className="App">
      {renderCurrentView()}
    </div>
  );
}

export default App;


import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Slider } from '@/components/ui/slider';
import { ArrowLeft, ArrowRight, Brain, CheckCircle } from 'lucide-react';
import { assessmentQuestions } from '../data/mockData';

const Assessment = ({ onComplete, onBack }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isCompleting, setIsCompleting] = useState(false);

  const progress = ((currentQuestion + 1) / assessmentQuestions.length) * 100;

  const handleAnswer = (questionId, answer) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const handleNext = () => {
    if (currentQuestion < assessmentQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      handleComplete();
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const handleComplete = async () => {
    setIsCompleting(true);
    // Simula processamento da IA
    await new Promise(resolve => setTimeout(resolve, 3000));
    onComplete(answers);
  };

  const currentQ = assessmentQuestions[currentQuestion];
  const currentAnswer = answers[currentQ.id];
  const canProceed = currentQ.type === 'scale' ? true : (currentAnswer !== undefined && currentAnswer !== '');

  if (isCompleting) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
        <Card className="w-full max-w-md mx-4">
          <CardContent className="p-8 text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-6"></div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Analisando seu DNA profissional...
            </h3>
            <p className="text-gray-600 mb-4">
              Nossa IA está processando suas respostas para criar seu perfil único.
            </p>
            <div className="space-y-2 text-sm text-gray-500">
              <div className="flex items-center justify-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Identificando padrões comportamentais
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Mapeando forças e lacunas
              </div>
              <div className="flex items-center justify-center">
                <Brain className="h-4 w-4 text-blue-500 mr-2 animate-pulse" />
                Gerando perfil de sócio ideal
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <Button 
              variant="ghost" 
              onClick={onBack}
              className="text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar
            </Button>
            <div className="text-sm text-gray-600">
              {currentQuestion + 1} de {assessmentQuestions.length}
            </div>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Question Card */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-gray-900">
              {currentQ.question}
            </CardTitle>
            {currentQ.type === 'text' && (
              <CardDescription>
                Seja específico e honesto - isso nos ajuda a entender melhor seu perfil.
              </CardDescription>
            )}
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Multiple Choice */}
            {currentQ.type === 'multiple' && (
              <RadioGroup 
                value={currentAnswer} 
                onValueChange={(value) => handleAnswer(currentQ.id, value)}
              >
                {currentQ.options.map((option, index) => (
                  <div key={index} className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <RadioGroupItem value={option} id={`option-${index}`} />
                    <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer text-base">
                      {option}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            )}

            {/* Text Input */}
            {currentQ.type === 'text' && (
              <Textarea
                placeholder={currentQ.placeholder}
                value={currentAnswer || ''}
                onChange={(e) => handleAnswer(currentQ.id, e.target.value)}
                className="min-h-[120px] text-base"
              />
            )}

            {/* Scale Questions */}
            {currentQ.type === 'scale' && (
              <div className="space-y-6">
                {currentQ.statements.map((statement, index) => (
                  <div key={index} className="space-y-3">
                    <Label className="text-base font-medium">{statement}</Label>
                    <div className="px-3">
                      <Slider
                        value={[currentAnswer?.[index] || 5]}
                        onValueChange={(value) => {
                          const newAnswer = [...(currentAnswer || Array(currentQ.statements.length).fill(5))];
                          newAnswer[index] = value[0];
                          handleAnswer(currentQ.id, newAnswer);
                        }}
                        max={10}
                        min={1}
                        step={1}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>Discordo totalmente</span>
                        <span>Concordo totalmente</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between">
          <Button 
            variant="outline" 
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Anterior
          </Button>
          <Button 
            onClick={handleNext}
            disabled={!canProceed}
            className="bg-blue-600 hover:bg-blue-700"
          >
            {currentQuestion === assessmentQuestions.length - 1 ? 'Finalizar' : 'Próxima'}
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Assessment;


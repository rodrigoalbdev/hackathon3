import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ArrowLeft, Users, Star, AlertTriangle, MessageCircle, ExternalLink, TrendingUp, Brain, Target } from 'lucide-react';
import { matches } from '../data/mockData';

const MatchIntelligente = ({ onBack }) => {
  const [selectedMatch, setSelectedMatch] = useState(null);

  const getCompatibilityColor = (score) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 80) return 'text-blue-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getCompatibilityBg = (score) => {
    if (score >= 90) return 'bg-green-100';
    if (score >= 80) return 'bg-blue-100';
    if (score >= 70) return 'bg-yellow-100';
    return 'bg-red-100';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
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
            <Badge className="bg-green-100 text-green-800">
              <Brain className="h-3 w-3 mr-1" />
              {matches.length} Matches Encontrados
            </Badge>
          </div>
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Matches Inteligentes
            </h1>
            <p className="text-lg text-gray-600">
              Sócios ideais baseados no seu DNA evolutivo
            </p>
          </div>
        </div>

        {/* Matches Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {matches.map((match) => (
            <Card key={match.id} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
                  {match.name.split(' ').map(n => n[0]).join('')}
                </div>
                <CardTitle className="text-lg">{match.name}</CardTitle>
                <CardDescription>{match.role}</CardDescription>
                <Badge variant="outline" className="mt-1">
                  {match.company}
                </Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Compatibility Score */}
                <div className={`text-center p-4 rounded-lg ${getCompatibilityBg(match.compatibility)}`}>
                  <div className={`text-3xl font-bold ${getCompatibilityColor(match.compatibility)}`}>
                    {match.compatibility}%
                  </div>
                  <div className="text-sm text-gray-600">Compatibilidade</div>
                </div>

                {/* Key Stats */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="text-center">
                    <div className="font-semibold text-gray-900">{match.experience}</div>
                    <div className="text-gray-600">Experiência</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-gray-900">{match.previousExits}</div>
                    <div className="text-gray-600">Exits</div>
                  </div>
                </div>

                {/* Strengths */}
                <div>
                  <h4 className="font-medium text-sm mb-2">Principais Forças:</h4>
                  <div className="flex flex-wrap gap-1">
                    {match.strengths.slice(0, 2).map((strength, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {strength}
                      </Badge>
                    ))}
                    {match.strengths.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{match.strengths.length - 2}
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        size="sm" 
                        className="flex-1 bg-blue-600 hover:bg-blue-700"
                        onClick={() => setSelectedMatch(match)}
                      >
                        <Users className="h-4 w-4 mr-1" />
                        Ver Detalhes
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="flex items-center gap-2">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                            {match.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          {match.name}
                        </DialogTitle>
                        <DialogDescription>
                          {match.role} • {match.company}
                        </DialogDescription>
                      </DialogHeader>
                      
                      <Tabs defaultValue="overview" className="mt-4">
                        <TabsList className="grid w-full grid-cols-3">
                          <TabsTrigger value="overview">Visão Geral</TabsTrigger>
                          <TabsTrigger value="compatibility">Compatibilidade</TabsTrigger>
                          <TabsTrigger value="simulation">Simulação</TabsTrigger>
                        </TabsList>
                        
                        <TabsContent value="overview" className="space-y-4">
                          <div className="grid md:grid-cols-2 gap-4">
                            <Card>
                              <CardHeader>
                                <CardTitle className="text-lg">Perfil Profissional</CardTitle>
                              </CardHeader>
                              <CardContent className="space-y-3">
                                <div>
                                  <span className="font-medium">Experiência:</span> {match.experience}
                                </div>
                                <div>
                                  <span className="font-medium">Exits Anteriores:</span> {match.previousExits}
                                </div>
                                <div>
                                  <span className="font-medium">Empresa Atual:</span> {match.company}
                                </div>
                              </CardContent>
                            </Card>
                            
                            <Card>
                              <CardHeader>
                                <CardTitle className="text-lg">Principais Forças</CardTitle>
                              </CardHeader>
                              <CardContent>
                                <div className="space-y-2">
                                  {match.strengths.map((strength, index) => (
                                    <div key={index} className="flex items-center gap-2">
                                      <Star className="h-4 w-4 text-yellow-500" />
                                      <span className="text-sm">{strength}</span>
                                    </div>
                                  ))}
                                </div>
                              </CardContent>
                            </Card>
                          </div>
                        </TabsContent>
                        
                        <TabsContent value="compatibility" className="space-y-4">
                          <Card>
                            <CardHeader>
                              <CardTitle className="flex items-center gap-2">
                                <Target className="h-5 w-5 text-blue-600" />
                                Análise de Complementaridade
                              </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                              {Object.entries(match.complementarity).map(([key, value]) => (
                                <div key={key} className="space-y-2">
                                  <div className="flex justify-between">
                                    <span className="capitalize font-medium">{key}</span>
                                    <span className="text-sm text-gray-600">{value}%</span>
                                  </div>
                                  <Progress value={value} className="h-2" />
                                </div>
                              ))}
                            </CardContent>
                          </Card>
                        </TabsContent>
                        
                        <TabsContent value="simulation" className="space-y-4">
                          <Card>
                            <CardHeader>
                              <CardTitle className="flex items-center gap-2 text-red-600">
                                <AlertTriangle className="h-5 w-5" />
                                Pontos de Atenção
                              </CardTitle>
                              <CardDescription>
                                Possíveis atritos identificados pela IA
                              </CardDescription>
                            </CardHeader>
                            <CardContent>
                              <div className="space-y-3">
                                {match.potentialFrictions.map((friction, index) => (
                                  <div key={index} className="flex items-start gap-2 p-3 bg-red-50 rounded-lg">
                                    <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-sm text-red-800">{friction}</span>
                                  </div>
                                ))}
                              </div>
                            </CardContent>
                          </Card>
                          
                          <Card>
                            <CardHeader>
                              <CardTitle className="flex items-center gap-2 text-green-600">
                                <TrendingUp className="h-5 w-5" />
                                Dinâmicas Previstas
                              </CardTitle>
                            </CardHeader>
                            <CardContent>
                              <div className="space-y-3">
                                <div className="p-3 bg-green-50 rounded-lg">
                                  <div className="font-medium text-green-800 mb-1">Comunicação</div>
                                  <div className="text-sm text-green-700">
                                    Excelente alinhamento em discussões estratégicas. Ambos valorizam transparência.
                                  </div>
                                </div>
                                <div className="p-3 bg-blue-50 rounded-lg">
                                  <div className="font-medium text-blue-800 mb-1">Tomada de Decisão</div>
                                  <div className="text-sm text-blue-700">
                                    Complementaridade perfeita: você estratégica, ele técnico com visão de negócio.
                                  </div>
                                </div>
                                <div className="p-3 bg-purple-50 rounded-lg">
                                  <div className="font-medium text-purple-800 mb-1">Liderança</div>
                                  <div className="text-sm text-purple-700">
                                    Estilos de liderança compatíveis, com potencial para divisão natural de responsabilidades.
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </TabsContent>
                      </Tabs>
                      
                      <div className="flex gap-2 mt-6">
                        <Button className="flex-1 bg-green-600 hover:bg-green-700">
                          <MessageCircle className="h-4 w-4 mr-2" />
                          Iniciar Conversa
                        </Button>
                        <Button variant="outline" className="flex-1">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Ver LinkedIn
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                  
                  <Button size="sm" variant="outline">
                    <MessageCircle className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Match Insights */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5 text-purple-600" />
              Insights dos Matches
            </CardTitle>
            <CardDescription>
              Análise inteligente dos perfis encontrados
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">Alta Compatibilidade</h3>
                <p className="text-sm text-gray-600">
                  94% dos matches têm compatibilidade acima de 80%, indicando excelente alinhamento com seu perfil evolutivo.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Complementaridade</h3>
                <p className="text-sm text-gray-600">
                  Todos os matches complementam suas lacunas técnicas mantendo forte comunicação estratégica.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Target className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2">Predição Precisa</h3>
                <p className="text-sm text-gray-600">
                  IA identificou padrões específicos que reduzem riscos de conflitos baseados no seu histórico.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center mt-8">
          <p className="text-gray-600 mb-4">
            Encontrou alguém interessante? Inicie uma conversa e deixe a mágica acontecer!
          </p>
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
            <MessageCircle className="mr-2 h-5 w-5" />
            Iniciar Primeira Conversa
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MatchIntelligente;


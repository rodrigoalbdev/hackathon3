import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { ArrowLeft, TrendingUp, Brain, Users, Lightbulb, Calendar, Target } from 'lucide-react';
import { evolutionData, insights, dnaData } from '../data/mockData';

const EvolutionDashboard = ({ onViewMatches, onBack }) => {
  const latestData = evolutionData[evolutionData.length - 1];
  const firstData = evolutionData[0];
  
  const calculateChange = (dimension) => {
    return latestData[dimension] - firstData[dimension];
  };

  const dimensions = ['lideranca', 'tecnico', 'vendas', 'estrategia', 'execucao', 'networking'];
  const dimensionNames = {
    lideranca: 'Liderança',
    tecnico: 'Técnico', 
    vendas: 'Vendas',
    estrategia: 'Estratégia',
    execucao: 'Execução',
    networking: 'Networking'
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
              Voltar ao Chat
            </Button>
            <Button 
              onClick={onViewMatches}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              <Users className="h-4 w-4 mr-2" />
              Ver Matches
            </Button>
          </div>
          <div className="text-center">
            <Badge className="mb-4 bg-purple-100 text-purple-800">
              <Brain className="h-3 w-3 mr-1" />
              DNA em Evolução
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Dashboard de Evolução
            </h1>
            <p className="text-lg text-gray-600">
              Acompanhe como seu perfil está evoluindo
            </p>
          </div>
        </div>

        {/* Evolution Overview */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-2 text-blue-600">
                <TrendingUp className="h-5 w-5" />
                Evolução Total
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">12%</div>
              <p className="text-sm text-gray-600">Mudança no perfil em 3 meses</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-2 text-green-600">
                <Lightbulb className="h-5 w-5" />
                Insights Gerados
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">{insights.length}</div>
              <p className="text-sm text-gray-600">Novos padrões identificados</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-2 text-purple-600">
                <Target className="h-5 w-5" />
                Match Accuracy
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">94%</div>
              <p className="text-sm text-gray-600">Precisão das recomendações</p>
            </CardContent>
          </Card>
        </div>

        {/* Evolution Chart */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-blue-600" />
              Evolução das Dimensões
            </CardTitle>
            <CardDescription>
              Como suas habilidades evoluíram ao longo do tempo
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={evolutionData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="month" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '1px solid #e2e8f0',
                      borderRadius: '8px'
                    }}
                  />
                  <Legend />
                  <Line type="monotone" dataKey="lideranca" stroke="#3b82f6" strokeWidth={2} name="Liderança" />
                  <Line type="monotone" dataKey="estrategia" stroke="#10b981" strokeWidth={2} name="Estratégia" />
                  <Line type="monotone" dataKey="execucao" stroke="#8b5cf6" strokeWidth={2} name="Execução" />
                  <Line type="monotone" dataKey="vendas" stroke="#f59e0b" strokeWidth={2} name="Vendas" />
                  <Line type="monotone" dataKey="tecnico" stroke="#ef4444" strokeWidth={2} name="Técnico" />
                  <Line type="monotone" dataKey="networking" stroke="#06b6d4" strokeWidth={2} name="Networking" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Dimension Changes */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-green-600" />
                Mudanças por Dimensão
              </CardTitle>
              <CardDescription>
                Comparação entre perfil inicial e atual
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {dimensions.map((dim) => {
                  const change = calculateChange(dim);
                  const isPositive = change > 0;
                  return (
                    <div key={dim} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">{dimensionNames[dim]}</span>
                        <Badge variant={isPositive ? "default" : "secondary"} className="text-xs">
                          {isPositive ? '+' : ''}{change}%
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2">
                        <Progress value={latestData[dim]} className="w-20 h-2" />
                        <span className="text-sm text-gray-600 w-8">{latestData[dim]}%</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Recent Insights */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-yellow-600" />
                Insights Recentes
              </CardTitle>
              <CardDescription>
                Padrões descobertos pela IA
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {insights.map((insight) => (
                  <div key={insight.id} className="border-l-4 border-blue-500 pl-4">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-medium text-sm">{insight.title}</h4>
                      <Badge variant="outline" className="text-xs">
                        <Calendar className="h-3 w-3 mr-1" />
                        {new Date(insight.date).toLocaleDateString('pt-BR')}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{insight.description}</p>
                    <p className="text-xs text-blue-600 font-medium">{insight.impact}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Updated Partner Profile */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-purple-600" />
              Perfil de Sócio Atualizado
            </CardTitle>
            <CardDescription>
              Baseado na evolução do seu DNA
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {dnaData.idealPartner.type}
                  </h3>
                  <p className="text-gray-600 mt-1">
                    Profissional técnico com excelente comunicação estratégica e experiência em liderança de produto
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-purple-600">94%</div>
                  <div className="text-sm text-gray-500">Compatibilidade</div>
                  <Badge className="mt-1 bg-green-100 text-green-800">
                    +7% vs inicial
                  </Badge>
                </div>
              </div>
              <Progress value={94} className="h-3" />
              <p className="text-sm text-gray-600 mt-3">
                <strong>Evolução:</strong> Agora priorizamos CTOs com forte background em comunicação 
                estratégica, baseado nos padrões identificados nas suas conversas.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center mt-8">
          <Button 
            size="lg"
            onClick={onViewMatches}
            className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-3"
          >
            <Users className="mr-2 h-5 w-5" />
            Ver Matches Atualizados
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EvolutionDashboard;


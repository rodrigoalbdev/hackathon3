import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { MessageCircle, TrendingUp, Users, Zap, Target, CheckCircle, AlertTriangle } from 'lucide-react';
import DNAChart from './DNAChart';
import { dnaData, userProfile } from '../data/mockData';

const DNACard = ({ onStartChat, onBack }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <Badge className="mb-4 bg-green-100 text-green-800">
            <CheckCircle className="h-3 w-3 mr-1" />
            DNA Criado com Sucesso
          </Badge>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Seu DNA Profissional
          </h1>
          <p className="text-lg text-gray-600">
            Perfil inicial criado • Pronto para evoluir
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* DNA Visualization */}
          <Card className="lg:col-span-1">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-2">
                <Zap className="h-5 w-5 text-blue-600" />
                Perfil Hexagonal
              </CardTitle>
              <CardDescription>
                Suas 6 dimensões profissionais principais
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80 mb-6">
                <DNAChart data={dnaData.dimensions} />
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                {dnaData.dimensions.map((dim, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-gray-600">{dim.name}</span>
                    <Badge variant="outline" className="ml-2">
                      {dim.value}%
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Profile Summary */}
          <div className="space-y-6">
            {/* User Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-purple-600" />
                  Perfil
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {userProfile.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{userProfile.name}</h3>
                    <p className="text-gray-600">{userProfile.role}</p>
                    <p className="text-sm text-gray-500">{userProfile.company} • {userProfile.experience}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Strengths */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-600">
                  <TrendingUp className="h-5 w-5" />
                  Suas Forças
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {dnaData.strengths.map((strength, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm">{strength}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Gaps */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-orange-600">
                  <Target className="h-5 w-5" />
                  Áreas para Complementar
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {dnaData.gaps.map((gap, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4 text-orange-500 flex-shrink-0" />
                      <span className="text-sm">{gap}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Ideal Partner */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-blue-600" />
              Seu Sócio Ideal (Hipótese Inicial)
            </CardTitle>
            <CardDescription>
              Esta recomendação evoluirá conforme conversamos
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {dnaData.idealPartner.type}
                </h3>
                <p className="text-gray-600 mt-1">
                  {dnaData.idealPartner.description}
                </p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-blue-600">
                  {dnaData.idealPartner.compatibility}%
                </div>
                <div className="text-sm text-gray-500">
                  Compatibilidade inicial
                </div>
              </div>
            </div>
            <Progress value={dnaData.idealPartner.compatibility} className="h-2" />
          </CardContent>
        </Card>

        {/* Next Steps */}
        <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <CardContent className="p-8">
            <div className="text-center">
              <MessageCircle className="h-12 w-12 mx-auto mb-4 opacity-90" />
              <h3 className="text-2xl font-bold mb-2">
                Pronto para a próxima fase?
              </h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Agora vamos conversar! Nosso chat companion vai aprender seus padrões 
                e refinar continuamente seu perfil para encontrar matches ainda melhores.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  onClick={onStartChat}
                  className="bg-white text-blue-600 hover:bg-gray-100 font-semibold"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Iniciar Chat Companion
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={onBack}
                  className="border-white text-white hover:bg-white/10"
                >
                  Ver Novamente
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DNACard;


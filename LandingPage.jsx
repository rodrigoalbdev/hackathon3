import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Brain, Users, TrendingUp, Zap, Shield, Target } from 'lucide-react';

const LandingPage = ({ onStartAssessment }) => {
  const features = [
    {
      icon: <Brain className="h-8 w-8 text-blue-600" />,
      title: "DNA Evolutivo",
      description: "Seu perfil profissional evolui a cada interação, tornando-se mais preciso com o tempo."
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: "Match Inteligente",
      description: "Algoritmo avançado encontra sócios que complementam suas habilidades perfeitamente."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-purple-600" />,
      title: "Predição de Compatibilidade",
      description: "Simula dinâmicas de trabalho antes mesmo de vocês se conhecerem."
    }
  ];

  const phases = [
    {
      number: "01",
      title: "DNA Inicial",
      description: "Assessment de 20 minutos cria seu perfil base com visualização hexagonal",
      color: "bg-blue-500"
    },
    {
      number: "02", 
      title: "Evolução Contínua",
      description: "Chat companion aprende seus padrões e refina recomendações diariamente",
      color: "bg-green-500"
    },
    {
      number: "03",
      title: "Match Perfeito",
      description: "Encontre sócios ideais com predição de pontos de sinergia e atrito",
      color: "bg-purple-500"
    }
  ];

  const testimonials = [
    {
      name: "Marina Silva",
      role: "Product Manager, iFood",
      content: "Depois de duas experiências ruins com sócios, o PartnerSync me ajudou a encontrar um CTO que realmente me complementa.",
      rating: 5
    },
    {
      name: "Carlos Mendes", 
      role: "CTO, TechFlow",
      content: "O sistema identificou que eu precisava de uma founder mais estratégica. O match foi perfeito - já estamos no nosso segundo exit juntos.",
      rating: 5
    },
    {
      name: "Ana Rodriguez",
      role: "Founder, StartupX",
      content: "O DNA evolutivo é genial. Em 3 meses, o sistema entendeu meu perfil melhor que eu mesma.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
              <Zap className="h-3 w-3 mr-1" />
              Powered by AI
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Seu DNA profissional
              <span className="text-blue-600 block">evolui a cada interação</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Pare de repetir erros do passado. O PartnerSync AI cria um perfil que aprende continuamente, 
              encontrando sócios que realmente complementam suas habilidades.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={onStartAssessment}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
              >
                Começar Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg"
              >
                Ver Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Por que o PartnerSync é diferente?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Saia do perfil estático para um perfil vivo que evolui com você
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-gray-50 rounded-full w-fit">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Como funciona em 3 fases
            </h2>
            <p className="text-lg text-gray-600">
              Do perfil inicial ao match perfeito
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {phases.map((phase, index) => (
              <div key={index} className="relative">
                <div className="flex items-center mb-6">
                  <div className={`${phase.color} text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg`}>
                    {phase.number}
                  </div>
                  {index < phases.length - 1 && (
                    <div className="hidden md:block flex-1 h-0.5 bg-gray-300 ml-4" />
                  )}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {phase.title}
                </h3>
                <p className="text-gray-600">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Casos de sucesso
            </h2>
            <p className="text-lg text-gray-600">
              Founders que encontraram seus sócios ideais
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Pronto para encontrar seu sócio ideal?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Comece agora e deixe seu DNA profissional evoluir
          </p>
          <Button 
            size="lg" 
            onClick={onStartAssessment}
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
          >
            <Target className="mr-2 h-5 w-5" />
            Iniciar Assessment Gratuito
          </Button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;


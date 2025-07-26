import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Send, Bot, User, Brain, TrendingUp, Lightbulb, ArrowLeft } from 'lucide-react';
import { chatHistory } from '../data/mockData';

const ChatCompanion = ({ onViewEvolution, onBack }) => {
  const [messages, setMessages] = useState(chatHistory);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollAreaRef = useRef(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (!newMessage.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      message: newMessage,
      timestamp: new Date().toISOString()
    };

    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');
    setIsTyping(true);

    // Simula resposta da IA
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        type: 'bot',
        message: generateBotResponse(newMessage),
        timestamp: new Date().toISOString(),
        insight: Math.random() > 0.7 ? "Novo padrão identificado: Preferência por feedback direto" : null
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 2000);
  };

  const generateBotResponse = (userMsg) => {
    const responses = [
      "Interessante perspectiva! Isso me ajuda a entender melhor como você lida com desafios. Como você se sente quando precisa tomar decisões sob pressão?",
      "Vejo que você valoriza comunicação clara. Isso é consistente com seu perfil. Pode me contar sobre uma situação onde a falta de comunicação causou problemas?",
      "Essa informação é valiosa para refinar seu perfil. Notei que você tende a ser mais colaborativo em certas situações. Isso é intencional?",
      "Obrigado por compartilhar isso! Estou ajustando seu DNA com base nessa nova informação. Como você prefere receber feedback de colegas?",
      "Perfeito! Isso confirma algumas hipóteses sobre seu estilo de liderança. Vou atualizar suas recomendações de match."
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <Button 
              variant="ghost" 
              onClick={onBack}
              className="text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar
            </Button>
            <Button 
              onClick={onViewEvolution}
              className="bg-purple-600 hover:bg-purple-700 text-white"
            >
              <TrendingUp className="h-4 w-4 mr-2" />
              Ver Evolução do DNA
            </Button>
          </div>
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Chat Companion
            </h1>
            <p className="text-gray-600">
              Conversando para evoluir seu perfil
            </p>
          </div>
        </div>

        {/* Chat Interface */}
        <Card className="h-[600px] flex flex-col">
          <CardHeader className="border-b">
            <CardTitle className="flex items-center gap-2">
              <Bot className="h-5 w-5 text-blue-600" />
              PartnerSync AI
              <Badge className="ml-2 bg-green-100 text-green-800">
                <Brain className="h-3 w-3 mr-1" />
                Aprendendo
              </Badge>
            </CardTitle>
          </CardHeader>
          
          <CardContent className="flex-1 flex flex-col p-0">
            {/* Messages */}
            <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
              <div className="space-y-4">
                {messages.map((msg) => (
                  <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] ${msg.type === 'user' ? 'order-2' : 'order-1'}`}>
                      <div className={`flex items-start gap-2 ${msg.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                          msg.type === 'user' 
                            ? 'bg-blue-600 text-white' 
                            : 'bg-gray-200 text-gray-600'
                        }`}>
                          {msg.type === 'user' ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                        </div>
                        <div className={`rounded-lg p-3 ${
                          msg.type === 'user'
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-900'
                        }`}>
                          <p className="text-sm">{msg.message}</p>
                          {msg.insight && (
                            <div className="mt-2 p-2 bg-yellow-50 border border-yellow-200 rounded text-xs text-yellow-800 flex items-center gap-1">
                              <Lightbulb className="h-3 w-3" />
                              {msg.insight}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className={`text-xs text-gray-500 mt-1 ${msg.type === 'user' ? 'text-right' : 'text-left'}`}>
                        {new Date(msg.timestamp).toLocaleTimeString('pt-BR', { 
                          hour: '2-digit', 
                          minute: '2-digit' 
                        })}
                      </div>
                    </div>
                  </div>
                ))}
                
                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="flex items-start gap-2">
                      <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center">
                        <Bot className="h-4 w-4" />
                      </div>
                      <div className="bg-gray-100 rounded-lg p-3">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>

            {/* Input Area */}
            <div className="border-t p-4">
              <div className="flex gap-2">
                <Input
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Digite sua mensagem..."
                  className="flex-1"
                  disabled={isTyping}
                />
                <Button 
                  onClick={handleSendMessage}
                  disabled={!newMessage.trim() || isTyping}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center">
                Quanto mais conversamos, melhor entendo seu perfil e posso refinar suas recomendações
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => setNewMessage("Como posso melhorar minha comunicação com sócios técnicos?")}>
            <CardContent className="p-4 text-center">
              <Brain className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <p className="text-sm font-medium">Dicas de Comunicação</p>
            </CardContent>
          </Card>
          <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => setNewMessage("Quais são os red flags que devo evitar em um sócio?")}>
            <CardContent className="p-4 text-center">
              <TrendingUp className="h-8 w-8 text-red-600 mx-auto mb-2" />
              <p className="text-sm font-medium">Red Flags</p>
            </CardContent>
          </Card>
          <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => setNewMessage("Como meu perfil evoluiu desde o assessment inicial?")}>
            <CardContent className="p-4 text-center">
              <Lightbulb className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <p className="text-sm font-medium">Minha Evolução</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ChatCompanion;


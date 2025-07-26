# PartnerSync AI - Front-end

## Visão Geral

O PartnerSync AI é uma plataforma inovadora que utiliza inteligência artificial para conectar founders e profissionais com sócios ideais através de um sistema de "DNA evolutivo". O front-end foi desenvolvido com React e apresenta uma experiência completa do conceito MVP.

## Características Principais

### 🧬 DNA Evolutivo
- Perfil profissional que evolui continuamente com cada interação
- Visualização hexagonal das 6 dimensões principais
- Aprendizado baseado em padrões de comunicação e comportamento

### 🤖 Chat Companion Inteligente
- IA conversacional que aprende sobre o usuário
- Refinamento contínuo do perfil baseado nas conversas
- Insights automáticos sobre padrões comportamentais

### 📊 Dashboard de Evolução
- Acompanhamento temporal das mudanças no perfil
- Visualização de insights descobertos pela IA
- Métricas de precisão das recomendações

### 🎯 Matches Inteligentes
- Algoritmo avançado de compatibilidade
- Análise de complementaridade detalhada
- Simulação de dinâmicas de trabalho
- Predição de pontos de atrito

## Tecnologias Utilizadas

- **React 19** - Framework principal
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Styling e design system
- **Shadcn/UI** - Componentes UI acessíveis
- **Recharts** - Visualizações de dados interativas
- **Radix UI** - Primitivos de UI
- **Lucide React** - Ícones consistentes
- **Framer Motion** - Animações (configurado)

## Estrutura do Projeto

```
src/
├── components/           # Componentes React
│   ├── ui/              # Componentes base (Button, Card, etc.)
│   ├── LandingPage.jsx  # Página inicial
│   ├── Assessment.jsx   # Formulário de avaliação inicial
│   ├── DNACard.jsx      # Visualização do perfil DNA
│   ├── DNAChart.jsx     # Gráfico hexagonal
│   ├── ChatCompanion.jsx # Interface de chat
│   ├── EvolutionDashboard.jsx # Dashboard de evolução
│   └── MatchIntelligente.jsx  # Tela de matches
├── data/
│   └── mockData.js      # Dados simulados para demonstração
├── App.jsx              # Componente principal
└── main.jsx             # Ponto de entrada
```

## Fluxo da Aplicação

1. **Landing Page** - Apresentação da proposta de valor
2. **Assessment Inicial** - Formulário adaptativo de 5 perguntas
3. **DNA Card** - Visualização do perfil criado com gráfico hexagonal
4. **Chat Companion** - Conversas para evolução do perfil
5. **Evolution Dashboard** - Acompanhamento das mudanças
6. **Matches Inteligentes** - Sócios recomendados com análise detalhada

## Como Executar

### Pré-requisitos
- Node.js 18+
- pnpm (recomendado) ou npm

### Instalação e Execução

```bash
# Navegar para o diretório do projeto
cd partnersync-ai

# Instalar dependências (já instaladas)
pnpm install

# Executar em modo desenvolvimento
pnpm run dev --host

# A aplicação estará disponível em http://localhost:5173
```

### Build para Produção

```bash
# Gerar build otimizado
pnpm run build

# Preview do build
pnpm run preview
```

## Funcionalidades Implementadas

### ✅ Completas
- Landing page responsiva e atrativa
- Assessment inicial com diferentes tipos de pergunta
- Visualização DNA com gráfico radar hexagonal
- Interface de chat com histórico e insights
- Dashboard de evolução com gráficos temporais
- Sistema de matches com análise detalhada
- Modais interativos para detalhes dos matches
- Design system consistente
- Responsividade mobile-first
- Animações e microinterações

### 🔄 Simuladas com Dados Mock
- Processamento de IA do assessment
- Evolução do perfil baseada em conversas
- Geração de insights comportamentais
- Algoritmo de matching
- Análise de compatibilidade
- Predição de dinâmicas de trabalho

## Design System

### Paleta de Cores
- **Primary**: Azul (#3b82f6)
- **Success**: Verde (#10b981)
- **Warning**: Amarelo (#f59e0b)
- **Danger**: Vermelho (#ef4444)
- **Purple**: Roxo (#8b5cf6)

### Componentes Reutilizáveis
- Buttons com variações (primary, secondary, outline, ghost)
- Cards com shadow e border consistentes
- Badges para labels e status
- Progress bars animadas
- Modals e dialogs acessíveis
- Formulários com validação visual

## Dados Mock

O projeto inclui dados simulados realistas para demonstração:
- Perfil de usuário (Marina Silva, PM do iFood)
- Histórico de conversas do chat
- Dados de evolução temporal do DNA
- 3 perfis de matches com diferentes níveis de compatibilidade
- Insights e padrões comportamentais
- Perguntas do assessment adaptativo

## Próximos Passos (Implementação Real)

1. **Backend Integration**
   - API para processamento do assessment
   - Sistema de chat com IA real (OpenAI/Claude)
   - Banco de dados para perfis e matches
   - Sistema de autenticação

2. **IA e Machine Learning**
   - Modelo de análise de personalidade
   - Algoritmo de matching real
   - Sistema de aprendizado contínuo
   - Análise de texto e padrões

3. **Features Avançadas**
   - Integração com LinkedIn
   - Sistema de mensagens entre matches
   - Agendamento de reuniões
   - Analytics e métricas avançadas

## Considerações Técnicas

- **Performance**: Componentes otimizados com lazy loading
- **Acessibilidade**: Conformidade com WCAG 2.1
- **SEO**: Meta tags e estrutura semântica
- **Mobile**: Design mobile-first responsivo
- **Manutenibilidade**: Código modular e bem documentado

## Demonstração

A aplicação está totalmente funcional para demonstração, incluindo:
- Fluxo completo do usuário
- Todas as telas e interações
- Dados realistas e consistentes
- Design profissional e polido
- Experiência fluida entre as fases

Este front-end serve como uma demonstração completa do conceito PartnerSync AI, pronto para apresentação a investidores, usuários ou equipe de desenvolvimento.


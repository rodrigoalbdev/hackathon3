# Plano Estrutural do Front-end - PartnerSync AI

## Visão Geral
O PartnerSync AI é uma plataforma inovadora que utiliza DNA evolutivo para conectar founders e profissionais com sócios ideais. O front-end será desenvolvido com foco na experiência do usuário e visualização interativa dos dados.

## Principais Telas e Componentes

### 1. Landing Page
- **Hero Section**: Apresentação da proposta de valor
- **Como Funciona**: Explicação das 3 fases do sistema
- **Depoimentos**: Casos de sucesso (mockados)
- **CTA**: Botão para iniciar o assessment

### 2. Assessment Inicial (Fase 1)
- **Formulário Adaptativo**: 15-20 perguntas inteligentes
- **Barra de Progresso**: Indicador visual do progresso
- **Situações-Problema**: 3 cenários reais para análise
- **Upload Opcional**: Análise de LinkedIn/perfil

### 3. DNA Card (Resultado Fase 1)
- **Visualização Hexagonal**: Gráfico radar com 6 dimensões
- **Perfil Detalhado**: Strengths & Gaps identificados
- **Tipo de Sócio Ideal**: Recomendação inicial
- **Ativação do Chat**: Introdução ao companion

### 4. Chat Companion (Fase 2)
- **Interface de Chat**: Design moderno e responsivo
- **Mensagens Inteligentes**: Perguntas contextuais
- **Indicadores de Aprendizado**: Mostra quando o sistema aprende
- **Histórico**: Conversas anteriores organizadas

### 5. DNA Evolution Dashboard (Fase 2)
- **Evolução Temporal**: Gráfico mostrando mudanças no perfil
- **Insights Descobertos**: Cards com novos aprendizados
- **Compatibilidade**: Métricas de match atualizadas
- **Alertas**: Notificações sobre padrões identificados

### 6. Match Inteligente (Fase 3)
- **Lista de Matches**: Perfis compatíveis com percentual
- **Comparação Detalhada**: Visualização lado a lado
- **Simulação de Dinâmicas**: Predição de interações
- **Pontos de Atenção**: Possíveis atritos identificados

## Fluxo de Navegação
```
Landing Page → Assessment → DNA Card → Chat Companion ↔ Evolution Dashboard → Match Inteligente
```

## Tecnologias Escolhidas

### Frontend Framework
- **Next.js 14**: React framework com App Router
- **TypeScript**: Para type safety e melhor DX

### Styling
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animações e transições suaves
- **Lucide React**: Ícones consistentes e modernos

### Visualização de Dados
- **Recharts**: Gráficos interativos para DNA hexagonal
- **D3.js**: Visualizações customizadas se necessário

### Estado e Dados
- **Zustand**: Gerenciamento de estado simples
- **React Query**: Cache e sincronização de dados
- **JSON mockado**: Dados simulados para demonstração

### Componentes UI
- **Radix UI**: Componentes acessíveis e customizáveis
- **React Hook Form**: Formulários performáticos
- **Sonner**: Notificações elegantes

## Design System

### Paleta de Cores
- **Primary**: Azul profundo (#1E40AF)
- **Secondary**: Verde esmeralda (#059669)
- **Accent**: Laranja vibrante (#EA580C)
- **Neutral**: Cinzas modernos (#64748B, #F1F5F9)

### Tipografia
- **Headings**: Inter Bold (32px, 24px, 20px)
- **Body**: Inter Regular (16px, 14px)
- **Monospace**: JetBrains Mono (código/dados)

### Componentes Reutilizáveis
- **Button**: Variações primary, secondary, ghost
- **Card**: Container padrão com shadow e border
- **Badge**: Labels e tags coloridas
- **Progress**: Barras de progresso animadas
- **Modal**: Overlays para ações importantes

## Funcionalidades Especiais

### Animações e Microinterações
- **Page Transitions**: Transições suaves entre telas
- **Hover Effects**: Estados interativos em botões/cards
- **Loading States**: Skeletons e spinners elegantes
- **DNA Animation**: Hexágono que pulsa e evolui

### Responsividade
- **Mobile First**: Design otimizado para mobile
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Touch Friendly**: Elementos com tamanho adequado para touch

### Acessibilidade
- **ARIA Labels**: Descrições para screen readers
- **Keyboard Navigation**: Navegação completa via teclado
- **Color Contrast**: Conformidade com WCAG 2.1
- **Focus Indicators**: Estados de foco visíveis

## Estrutura de Arquivos
```
src/
├── app/                    # Next.js App Router
├── components/             # Componentes reutilizáveis
│   ├── ui/                # Componentes base (Button, Card, etc.)
│   ├── forms/             # Formulários específicos
│   ├── charts/            # Visualizações de dados
│   └── layout/            # Layout components
├── lib/                   # Utilitários e configurações
├── hooks/                 # Custom React hooks
├── types/                 # TypeScript types
├── data/                  # Dados mockados
└── styles/                # CSS global e Tailwind config
```

## Dados Mockados
Para demonstração, criaremos:
- **Perfis de usuário**: 5-10 personas diferentes
- **Resultados de assessment**: Dados variados para DNA
- **Conversas de chat**: Histórico simulado
- **Matches**: Perfis compatíveis com scores
- **Evolução temporal**: Dados de mudança ao longo do tempo


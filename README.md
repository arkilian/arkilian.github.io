# arkilian.github.io

> **Website pessoal de Diogo Campos** — Tecnologia, Dados & Investimentos

🔗 **Live:** [https://arkilian.github.io](https://arkilian.github.io)

---

## 📋 Visão Geral

Este é o site pessoal de Diogo Campos, profissional com experiência em desenvolvimento e administração de bases de dados Oracle PLSQL, ambientes Linux, Python e virtualização. Investidor privado desde 2015 com foco especial em criptomoedas desde 2020, motivado pelo interesse na tecnologia subjacente e na sua conexão com a informática.

O site reúne projetos técnicos, análises de investimentos e conteúdo sobre tecnologia e finanças, demonstrando uma abordagem metódica e orientada por dados.

---

## 🗂️ Estrutura do Site

### 🏠 [Página Principal](index.html)
Landing page com apresentação profissional, incluindo:
- **Perfil profissional**: Experiência técnica e trajetória como investidor
- **Carrossel de artigos em destaque**: Navegação pelos conteúdos mais recentes do blog
- **Links diretos** para projetos principais (ArkilianAlgoTrade, CryptoDashboard, Blog)
- **Redes sociais**: GitHub e LinkedIn

### 📊 [ArkilianAlgoTrade](ArkilianAlgoTrade/)
Sistema de trading algorítmico para criptomoedas inspirado na filosofia Arch Linux.

**Características:**
- 🎯 **Entidade operadora algorítmica** que observa o mercado sem emoções e executa regras sem hesitação
- 📈 **Estratégias quantitativas** baseadas em análise técnica e fundamentos
- 🧪 **Backtests completos** com relatórios detalhados de performance
- 🎥 **Vídeo apresentação** no YouTube explicando o sistema
- 📝 **Filosofia**: Minimalista, modular, transparente e orientado por dados

**Conteúdo:**
- História e conceito do nome "Arkilian"
- Metodologia de trading e gestão de risco
- [Relatório de Backtest ADAUSC](backtest/RELATORIO_ADAUSC_20200101_a_20251231.html) (2020-2025)

### 💎 [CryptoDashboard](CryptoDashboard/)
Plataforma profissional para gestão de fundos comunitários de criptomoedas.

**Funcionalidades principais:**
- 🔐 **Autenticação segura** com perfis de utilizador (Admin/User)
- 💰 **Sistema de Shares & NAV**: Ownership justo baseado em Net Asset Value
  - Depósitos alocam shares automaticamente
  - Levantamentos queimam shares proporcionalmente
  - Tracking completo de propriedade percentual de cada participante
- 📊 **Transações de cripto**: Compra/venda com preços históricos e fees
- 🧩 **Modelo V2 multi-asset**: Suporte a swap, stake, transfer, lend/borrow
- 📈 **Análise de portfólio**: Gráficos evolutivos, composição, top holders
- 📸 **Sistema de snapshots**: Cache inteligente de preços históricos
- 🔗 **Integração Cardano**: Explorer de blockchain e gestão de wallets
- 💶 **Gestão de caixa**: Controle de depósitos, levantamentos e saldo disponível

**Documentação Wiki integrada** com 8 guias técnicos completos sobre arquitetura, modelo de dados, deployment e integração blockchain.

**Links:**
- [Repositório GitHub](https://github.com/arkilian/CryptoDashboard)
- [Relatório PDF de Governança](CryptoDashboard/assets/Governança_Profissional_de_Fundos_Crypto.pdf)

### 📝 [Blog](Blog/)
Artigos sobre investimentos, plataformas financeiras e gestão de capital.

#### 📊 [P2P Lending](Blog/P2P/)
Comparação detalhada de plataformas de empréstimos peer-to-peer:
- **GoParity** (Portugal) - Impacto social e ambiental
- **Raize** (Portugal) - PMEs portuguesas
- **Bondora** (Estónia) - Empréstimos ao consumo automatizados
- **ViaInvest** (Letónia) - Garantia de recompra

**Conteúdo:**
- Tabelas comparativas de características, riscos e retornos
- Análise de regulação e proteção ao investidor
- Estratégias de diversificação entre plataformas
- Experiência prática de utilização

#### 📈 [ETFs](Blog/ETFs/)
Análise comparativa de quatro ETFs distintos (2025/26):
- **VUAA** - S&P 500 (ações americanas)
- **EUNK** - STOXX Europe 600 (exposição europeia)
- **QDVE** - NASDAQ 100 (tecnologia pura)
- **PPFB** - Ouro físico (safe haven)

**Conteúdo:**
- Comparação de TER, tamanho, método de replicação
- Performance histórica e volatilidade
- Estratégias de diversificação e alocação
- Vantagens fiscais e considerações práticas

#### 💼 [Sobre Mim](Blog/Pessoal/)
História pessoal, missão, visão e valores:
- 📅 **11 anos de jornada** nos mercados financeiros (2015-2026)
- 🎯 **Missão**: Educação financeira, transparência e gestão baseada em dados
- 🔭 **Visão**: Empoderar investidores com ferramentas e conhecimento
- ⚖️ **Valores**: Rigor, ética, aprendizagem contínua

### 🧪 [Backtest Reports](backtest/)
Relatórios HTML interativos de backtests de estratégias de trading:
- Gráficos de equity curve
- Métricas de performance (Sharpe, drawdown, win rate)
- Análise de trades individuais
- Estatísticas detalhadas por período

### 💳 [Stripe Integration](Stripe/)
Componente de pagamentos integrado via Stripe:
- `button.html` - Interface do botão de pagamento
- `button.js` - Lógica de integração e checkout

---

## 🛠️ Tecnologias Utilizadas

- **Frontend**: HTML5, CSS3 (Grid, Flexbox), JavaScript vanilla
- **Fontes**: Space Grotesk, JetBrains Mono (Google Fonts)
- **Ícones**: Bootstrap Icons
- **Design**: Grid modular, tema dark com gradientes, animações CSS
- **Responsividade**: Mobile-first, viewport adaptativo
- **SEO**: Open Graph, Twitter Cards, meta tags otimizadas

### Tecnologias dos Projetos:
- **CryptoDashboard**: Python, Streamlit, SQLite, Pandas, Plotly, CoinGecko API
- **ArkilianAlgoTrade**: Python, backtesting frameworks, análise quantitativa

---

## 📁 Estrutura de Pastas

```
arkilian.github.io/
├── index.html                  # Página principal
├── assets/                     # Assets globais (styles.css, images/)
├── ArkilianAlgoTrade/         # Sistema de trading algorítmico
│   ├── index.html
│   └── assets/
├── backtest/                   # Relatórios de backtest
│   ├── index.html
│   └── RELATORIO_ADAUSC_*.html
├── Blog/                       # Blog de investimentos
│   ├── index.html             # Índice do blog
│   ├── P2P/                   # P2P Lending
│   ├── ETFs/                  # Análise de ETFs
│   ├── Pessoal/              # Sobre mim
│   └── Crypto/               # (Em desenvolvimento)
├── CryptoDashboard/           # Plataforma de gestão de fundos
│   ├── index.html
│   ├── assets/               # Docs, images, styles
│   └── wiki/                 # Documentação técnica (8 guias)
└── Stripe/                    # Integração de pagamentos
    ├── button.html
    └── button.js
```

---

## 🎨 Design System

### Paleta de Cores:
- **Background**: Gradiente dark com grid pattern
- **Cards**: Glassmorphism com backdrop-blur
- **Accent**: Verde (#10b981) para CTAs e highlights
- **Text**: Hierarquia clara (branco → cinza claro → cinza médio)

### Componentes:
- **Cards modulares** com hover effects
- **Carrossel** de artigos com navegação por setas e dots
- **Botões CTA** com ícones Bootstrap e estados interativos
- **Tabelas comparativas** responsivas com striped rows
- **Hero sections** com imagens e gradientes overlay

---

## 🚀 Features Destacadas

### Interatividade:
- ✨ **Carrossel automático** de artigos (2.5s por slide)
- 🖱️ **Navegação por teclado** (← → keys)
- 📱 **Mobile-friendly** com menu adaptativo
- 🔄 **Animações smooth** em transições e hovers

### SEO & Social:
- 🎯 **Open Graph completo** para Facebook/LinkedIn
- 🐦 **Twitter Cards** com imagens otimizadas
- 🔍 **Meta descriptions** únicas por página
- 🖼️ **Imagens de preview** personalizadas (1200x630px)

### Performance:
- ⚡ **Preconnect** para Google Fonts
- 🗄️ **Cache de snapshots** de preços (CryptoDashboard)
- 📊 **Lazy loading** de imagens
- 🎯 **Minified CSS** em produção

---

## 📊 Estatísticas do Projeto

- **Páginas**: 20+ páginas HTML
- **Projetos principais**: 2 (ArkilianAlgoTrade, CryptoDashboard)
- **Artigos do blog**: 3 publicados + 1 em desenvolvimento
- **Guias técnicos**: 8 (wiki CryptoDashboard)
- **Relatórios de backtest**: Múltiplos pares cripto

---

## 🔗 Links Importantes

- 🌐 **Website**: [arkilian.github.io](https://arkilian.github.io)
- 💻 **GitHub**: [@arkilian](https://github.com/arkilian)
- 💼 **LinkedIn**: [/in/diogo91campos](https://www.linkedin.com/in/diogo91campos)
- 📦 **Repositório CryptoDashboard**: [github.com/arkilian/CryptoDashboard](https://github.com/arkilian/CryptoDashboard)

---

## 📄 Licença

Este projeto está sob a licença especificada no arquivo [LICENSE](LICENSE).

---

## 👤 Autor

**Diogo Campos**
- Profissional com 4 anos de experiência em Oracle PLSQL, Linux, Python
- Investidor privado desde 2015, especializado em criptomoedas desde 2020
- Entusiasta de tecnologia, dados e finanças quantitativas

---

<div align="center">

**Feito com 💚 e ☕ por Diogo Campos**

*Tecnologia, Dados & Investimentos*

</div>

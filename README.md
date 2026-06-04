# Alagille

Aplicativo de **apoio ao reconhecimento da Síndrome de Alagille (ALGS)** e à **indicação dos IBATs**, voltado a **médicos não especialistas** (pediatras da atenção primária, médicos de família, plantonistas).

> ⚠️ **Ferramenta de apoio à decisão e educação médica.** Não substitui o julgamento clínico, não estabelece diagnóstico definitivo nem prescreve tratamento. Destinado a profissionais de saúde. O diagnóstico e a indicação de IBATs devem ser confirmados por gastroenterologista/hepatologista pediátrico.

Base científica: **Diretriz SBP nº 22 (23/01/2026)** — *Síndrome de Alagille em Pediatria no Brasil e os IBAT* — complementada por fontes de alto impacto (GeneReviews, FDA, *The Lancet*, *Hepatology*). Especificação completa em [`PRD-Atria-Alagille.md`](./PRD-Atria-Alagille.md).

## Funcionalidades (MVP)

- **Triagem clínica** com a regra diagnóstica (3 de 7 características; 2 com história familiar), em **linguagem acessível** e modo "pergunta simples".
- **Resumo de encaminhamento** gerado localmente (sem dados pessoais).
- **Exames e acesso no SUS** (Quadro 1 da diretriz).
- **IBATs**: critérios de indicação (Quadro 4) e referência farmacológica com nota regulatória ANVISA.
- **Glossário / Tradutor clínico** e módulo **Aprender**.
- **PWA offline-first**, acessível (WCAG 2.1 AA), sem coleta de PII (LGPD).

## Stack

- React 18 + TypeScript + Vite
- PWA (`vite-plugin-pwa`) — offline-first
- React Router
- Vitest (testes do motor de triagem)
- **Conteúdo clínico versionado em JSON** (`src/content/`) — fonte única de verdade, desacoplada do código.

## Estrutura

```
src/
├── content/        # conteúdo clínico versionado (critérios, glossário, exames, IBAT, meta)
├── domain/         # motor de triagem + testes (regra 3 de 7 / 2 com história familiar)
├── components/     # Disclaimer, TermTooltip (tradução de termos)
├── pages/          # Início, Triagem, Exames, IBATs, Aprender, Glossário, Sobre
├── types.ts
└── main.tsx / App.tsx
```

## Desenvolvimento

```bash
npm install
npm run dev        # servidor de desenvolvimento
npm test           # testes do motor de triagem
npm run build      # build de produção (PWA)
npm run preview    # pré-visualizar o build
```

## Governança de conteúdo

Todo o conteúdo clínico deriva da diretriz e fontes citadas, é rastreável e versionado
(`src/content/meta.json`). Mudanças devem passar por revisão de especialista antes de publicar.
Cada módulo exibe a fonte e a data da última revisão.

## Ícones do PWA

Adicione em `public/`: `icon-192.png`, `icon-512.png`, `icon-512-maskable.png`
(o `favicon.svg` já está incluído).

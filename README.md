# Refluxo Gastroesofágico no Paciente Pediátrico — Vídeo Motion Design

Vídeo educativo curto (motion design retrô) sobre as **principais preocupações
do pediatra** ao atender um lactente/criança com refluxo gastroesofágico.
Construído com [Remotion](https://www.remotion.dev/).

## Especificações do vídeo

| Item        | Valor                      |
| ----------- | -------------------------- |
| Resolução   | **3840 × 2160 (4K UHD)**   |
| Proporção   | **16:9**                   |
| Duração     | **10 s** (300 frames)      |
| Frame rate  | 30 fps                     |
| Codec       | H.264 (CRF 16)             |
| Estilo      | Motion design retrô (cartaz mid-century / anos 70) |

O arquivo renderizado fica em [`out/pediatric-gerd-4k.mp4`](out/pediatric-gerd-4k.mp4).

## Roteiro / conteúdo clínico

O vídeo percorre, em ritmo de cartaz animado, as três grandes preocupações:

1. **Fisiológico ou doença?** — diferenciar a regurgitação benigna do lactente
   (que costuma melhorar por volta dos 12 meses) da doença do refluxo
   gastroesofágico (DRGE), que cursa com sintomas ou complicações.
2. **Sinais de alarme** — vômito bilioso, sangue ou em jato; baixo ganho de
   peso e recusa alimentar; irritabilidade intensa e sintomas respiratórios.
3. **Manejo racional** — acompanhar a curva de crescimento, priorizar medidas
   não farmacológicas e usar IBP com cautela e prazo definido.

Encerramento: *"Observe. Diferencie. Trate com cautela — a maioria melhora com o tempo."*

> Conteúdo com finalidade educativa; não substitui diretrizes clínicas nem
> julgamento profissional individualizado.

## Como rodar

```bash
npm install        # instala as dependências
npm run dev        # abre o Remotion Studio (pré-visualização interativa)
npm run render     # renderiza o MP4 em out/pediatric-gerd-4k.mp4
npm run still      # exporta um quadro estático (pôster)
npm run typecheck  # checagem de tipos TypeScript
```

## Estrutura

```
src/
  Root.tsx              Registro da composição (4K, 30 fps, 10 s)
  Video.tsx             Linha do tempo: Intro → 3 preocupações → Outro
  theme.ts              Paleta retrô e tokens de design
  fonts.ts              Fontes auto-hospedadas (Anton, Fraunces, Space Grotesk)
  scenes/
    Intro.tsx           Abertura / título
    Concern.tsx         Cena reutilizável de cada preocupação
    Outro.tsx           Encerramento
  components/
    Sunburst.tsx        Raios de sol giratórios
    Halftone.tsx        Trama de meio-tom (bolinhas)
    Grain.tsx           Grão de filme animado
    Vignette.tsx        Vinheta analógica
    PosterFrame.tsx     Moldura de cartaz
    icons.tsx           Ícones line-art (balança, alerta, crescimento)
public/fonts/           Fontes .woff2 auto-hospedadas (render offline)
```

### Fontes auto-hospedadas

As fontes ficam em `public/fonts/` e são carregadas via `fonts.css` local
(em vez do Google Fonts pela rede), garantindo que o render funcione offline e
de forma determinística.

# PRD — Alagille: Aplicativo de Reconhecimento da Síndrome de Alagille e Indicação de IBATs

> **Documento de Requisitos de Produto (Product Requirements Document)**
> Versão 1.1 · Data: 04/06/2026 · Status: Rascunho para revisão
> Base científica: Diretriz SBP nº 22 (23/01/2026) — *Síndrome de Alagille em Pediatria no Brasil e os Inibidores do Transportador de Ácido Biliar Ileal (IBAT)* — complementada por fontes médicas de alto impacto (GeneReviews, FDA, *The Lancet*, *Hepatology*, *J Pediatr Gastroenterol Nutr*).

---

## ⚠️ Aviso médico-legal (a ser exibido no app)

O **Alagille** é uma **ferramenta de apoio à decisão clínica e educação médica**. Ele **não substitui o julgamento clínico**, não estabelece diagnóstico definitivo nem prescreve tratamento. O diagnóstico e a indicação de IBATs devem ser confirmados por gastroenterologista/hepatologista pediátrico. O conteúdo é destinado **exclusivamente a profissionais de saúde**.

---

## 1. Sumário executivo

A Síndrome de Alagille (ALGS) é uma doença genética rara (prevalência estimada de 1:30.000 a 1:50.000 nascidos vivos), multissistêmica, de herança autossômica dominante, causada por variantes nos genes **JAG1** (mais comum) ou **NOTCH2**, que afetam a via de sinalização Notch. No Brasil, o diagnóstico é frequentemente **tardio — ou nem acontece** — por baixa familiaridade da doença nos níveis iniciais de atenção, ausência de linha de cuidado e acesso limitado a exames-chave (dosagem de ácidos biliares séricos e painel genético não estão disponíveis no SUS).

O **Alagille** é um aplicativo móvel/web voltado a **médicos não especialistas** (pediatras de atenção primária, neonatologistas, médicos de família, plantonistas) para:

1. **Reconhecer precocemente** sinais sugestivos de ALGS por meio de uma ferramenta estruturada baseada nos **critérios clínicos** (3 de 7 características; 2 se houver história familiar).
2. **Orientar o encaminhamento** correto e a solicitação dos exames apropriados.
3. **Apresentar os critérios de indicação dos IBATs** (inibidores do transportador de ácido biliar ileal) — primeira classe *on-label* para o prurido colestático na ALGS — como referência educacional para a tomada de decisão compartilhada com o especialista.

Objetivo central: **reduzir o atraso diagnóstico** e qualificar o encaminhamento, atacando diretamente a lacuna de "ausência de ações estruturadas de educação continuada para pediatras e profissionais da atenção primária" apontada pela diretriz.

---

## 2. Contexto e problema

### 2.1 Justificativa clínica
- A ALGS manifesta-se predominantemente na infância com **colestase crônica, prurido intratável, xantomas, deficiência de vitaminas lipossolúveis** e risco progressivo de cirrose.
- Entre **15% e 47%** dos pacientes necessitam de **transplante hepático**, frequentemente motivado pelo **prurido intratável**, mesmo com função hepática preservada — uma lacuna terapêutica crítica.
- O prurido colestático é intenso e incapacitante: afeta sono, humor, concentração, desempenho escolar; gera escoriações, sangramentos, risco de infecção, estigma e *bullying* (xantomas desfigurantes).
- Diagnóstico diferencial crítico na infância: **atresia biliar** (nos primeiros meses pode ocorrer proliferação ductular, levando a diagnósticos equivocados).

### 2.2 Barreiras no Brasil (mapeadas pela diretriz SBP)
- Diagnóstico **tardio ou inexistente**; baixa familiaridade na atenção primária.
- **Ausência de linha de cuidado e de protocolo clínico** estruturado.
- Terapias atuais majoritariamente ***off-label*** (ácido ursodesoxicólico, rifampicina, colestiramina, naltrexona, sertralina, anti-histamínicos), com eficácia variável e baixa em casos graves.
- **Acesso limitado** a exames: dosagem de ácidos biliares séricos e painel genético (JAG1/NOTCH2) **indisponíveis no SUS**.
- Nenhum tratamento incorporado ao SUS que altere o curso natural da doença.

### 2.3 Oportunidade do produto
Um app de apoio à decisão, **construído sobre a diretriz da SBP e evidências internacionais**, endereça diretamente: educação continuada, reconhecimento precoce, padronização de encaminhamento e disseminação dos critérios de indicação dos IBATs.

---

## 3. Objetivos e métricas de sucesso

### 3.1 Objetivos do produto
| # | Objetivo | Indicador (KPI) | Meta (12 meses) |
|---|----------|-----------------|------------------|
| O1 | Aumentar a suspeição precoce de ALGS | Nº de triagens concluídas/mês | ≥ 2.000 |
| O2 | Qualificar o encaminhamento | % de triagens "alta suspeição" que geram relatório de encaminhamento | ≥ 70% |
| O3 | Educar o não especialista | % de usuários que concluem ≥ 1 módulo educacional | ≥ 50% |
| O4 | Usabilidade | Tempo médio para concluir uma triagem | ≤ 3 min |
| O5 | Satisfação | SUS (System Usability Scale) | ≥ 80 |
| O6 | Retenção | Retenção D30 | ≥ 30% |

### 3.2 Fora de escopo de métricas
O app **não** mede desfechos clínicos do paciente (não é dispositivo de monitoramento); mede adoção e qualidade do processo de reconhecimento/encaminhamento.

---

## 4. Público-alvo e personas

- **Persona primária — Dra. Marina (pediatra da atenção básica):** vê colestase neonatal/lactente esporadicamente; precisa de checklist rápido e confiável e saber "quando e para onde encaminhar".
- **Persona secundária — Dr. Paulo (plantonista/PS):** tempo escasso; quer um *red-flag* objetivo.
- **Persona terciária — Dr. Lia (hepatologista pediátrica, especialista):** usa o módulo de IBATs como referência e recebe o relatório de encaminhamento estruturado.
- **Persona de apoio — Residente/estudante:** usa o conteúdo educacional.

> O app **não** é destinado a pacientes/familiares no MVP (público exclusivamente profissional). Versão para famílias é roadmap futuro.

---

## 5. Escopo

### 5.1 Dentro do escopo (MVP)
1. **Ferramenta de triagem / reconhecimento** (calculadora de critérios clínicos).
2. **Guia de exames e encaminhamento** (com a realidade de acesso no SUS).
3. **Módulo de referência de IBATs** (critérios de indicação, monitoramento, eventos adversos).
4. **Biblioteca educacional** (manifestações sistêmicas, diagnóstico diferencial, Figura/atlas visual).
5. **Geração de relatório/resumo** para encaminhamento (PDF/compartilhável).
6. **Funcionamento offline** do conteúdo clínico.

### 5.2 Fora do escopo (MVP)
- Prontuário eletrônico / integração com sistemas hospitalares (RES/PEP).
- Telemedicina ou agendamento.
- Prescrição eletrônica.
- Dosagem automática prescritiva de medicamentos (apenas referência educacional).
- Diagnóstico definitivo automatizado / "IA diagnóstica".

---

## 6. Requisitos funcionais

### RF-1 — Ferramenta de triagem de reconhecimento (núcleo do produto)

**Lógica clínica (baseada na diretriz SBP + GeneReviews):**

O diagnóstico clínico da ALGS baseia-se na identificação de pelo menos **3 das 7 características clínicas clássicas**. Quando há **história familiar** de ALGS, **2 critérios** são suficientes.

As **7 características clínicas clássicas** — apresentadas com **termo técnico + tradução em linguagem acessível + "como reconhecer na prática"** (princípio de design obrigatório, ver RF-1.7 e Apêndice A):

1. **Colestase crônica** — *"o fígado não consegue eliminar bem a bile"*. Como reconhecer: **icterícia (pele/olhos amarelados) que persiste**, urina escura, fezes claras/esbranquiçadas, coceira; nos exames, **GGT e bilirrubina direta elevadas**. Associada à **escassez de ductos biliares (ductopenia)** — *"poucos canais que levam a bile para fora do fígado"*, achado de biópsia mais frequente após os 6 meses.
2. **Cardiopatia congênita** — *"defeito no coração de nascença"*. Na ALGS, tipicamente **estenose periférica da artéria pulmonar** (*"estreitamento dos vasos que levam sangue do coração aos pulmões"* — costuma dar **sopro**); também tetralogia de Fallot.
3. **Alterações esqueléticas** — principalmente **vértebra "em borboleta"** (*"osso da coluna com formato partido ao meio, lembrando asas de borboleta", visto na radiografia*); pode haver fraturas com pouco trauma.
4. **Alterações oftalmológicas** — **embriotóxon posterior** (*"um anel/linha esbranquiçada na borda da córnea (parte da frente do olho)", visto na lâmpada de fenda pelo oftalmologista*); drusas no disco óptico.
5. **Dismorfismos faciais característicos** — *"feições típicas do rosto"*: **face triangular** (testa larga, queixo fino e pontudo), **fronte alta e proeminente**, olhos fundos e **afastados (hipertelorismo)**, nariz reto com **ponta arredondada (bulbosa)**.
6. **Alterações renais** — *"rins malformados ou que funcionam mal"*: displasia renal, acidose tubular renal (pode aparecer como atraso de crescimento e alterações nos eletrólitos).
7. **Alterações vasculares** — *"vasos sanguíneos malformados"* no cérebro/pulmões, com risco de **sangramento dentro da cabeça (intracraniano)**.

**Frequência por sistema (Figura 1 da diretriz — usar como apoio visual e ponderação informativa):**

| Sistema | Frequência geral | JAG1(+) | NOTCH2(+) |
|---------|------------------|---------|-----------|
| Hepático | 89–100% | 100% | 100% |
| Cardíaco | 94% | 100% | 60% |
| Facial | 70–96% | 97% | 20% |
| Ocular | 56–95% | 75% | 60% |
| Esquelético | 33–87% | 64% | 10% |
| Renal | 20–73% | 40% | 40% |
| Vascular | 15% | — | — |

**Comportamento da ferramenta:**
- `RF-1.1` Apresentar os 7 domínios como itens selecionáveis (checklist), com **descrição, imagem/ilustração e ajuda contextual** ("o que é embriotóxon posterior?").
- `RF-1.2` Capturar **história familiar de ALGS** (sim/não) — ajusta o limiar de 3 → 2 critérios.
- `RF-1.3` Calcular em tempo real o número de critérios presentes e classificar o resultado:
  - **Baixa suspeição** (critérios insuficientes) → orientações de seguimento e *red flags* a vigiar.
  - **Suspeição moderada** → recomendar exames de primeira linha e reavaliação.
  - **Alta suspeição** (≥ critérios necessários) → **recomendação de encaminhamento ao gastro/hepatologista pediátrico** + lista de exames.
- `RF-1.4` Destacar o **gatilho de investigação isolado**: colestase persistente e/ou biópsia com escassez de ductos biliares (ductopenia) → encaminhamento mesmo sem fechar os critérios.
- `RF-1.5` Exibir **alerta de diagnóstico diferencial** (atresia biliar) quando lactente < 6 meses com colestase.
- `RF-1.6` **Nunca** apresentar o resultado como "diagnóstico"; sempre como "grau de suspeição / recomendação de conduta". Disclaimer fixo.
- `RF-1.7` **Linguagem acessível obrigatória (requisito central de usabilidade):** todo termo técnico exibido na triagem deve trazer, lado a lado, uma **explicação em linguagem simples** e uma dica de **"como reconhecer na prática"** (sinal observável, achado de exame ou pergunta a fazer aos pais). O médico não especialista nunca deve precisar sair do app para entender um termo.
  - Cada termo técnico é **clicável** → abre um *card* com: (a) definição simples (1 frase), (b) imagem/ilustração quando aplicável, (c) "como procurar/identificar", (d) sinônimos leigos. Conteúdo proveniente do **Apêndice A — Glossário/Tradutor clínico**.
  - Os domínios da triagem podem ser exibidos em **modo "pergunta simples"** (ex.: *"A criança tem icterícia que não passa, com fezes claras e urina escura?"*) em vez de apenas o termo técnico, reduzindo a barreira de reconhecimento.

### RF-2 — Guia de exames e encaminhamento (com realidade do SUS)

Reproduzir, de forma navegável e filtrável, o **Quadro 1 da diretriz** (exames importantes × acesso no SUS):

| Categoria | Exames | Acesso no SUS |
|-----------|--------|----------------|
| Avaliação clínica | Avaliação dirigida (3 das 7 características) | Disponível em todos os níveis; depende de conhecimento especializado |
| Laboratoriais | AST, ALT, GGT, FA, bilirrubinas (BT/BD), albumina, coagulograma, ureia, creatinina | Disponíveis na rotina, boa cobertura |
| Laboratoriais | **Dosagem sérica de ácidos biliares** | **Não disponível no SUS**; acesso restrito a serviços privados/pesquisa |
| Imagem | USG de abdome total (rins e vias urinárias) | Disponível, acesso limitado (fila/qualidade técnica) |
| Imagem | Ecocardiograma | Disponível, acesso pode ser demorado; varia por região |
| Imagem | Radiografia de coluna | Disponível, acesso relativamente fácil |
| Oftalmologia | Fundo de olho + lâmpada de fenda (embriotóxon posterior) | Disponível, acesso limitado/dependente de referência |
| Genética | Painel genético ALGS (JAG1, NOTCH2) | **Não disponível no SUS**; restrito ao privado; alto custo |

- `RF-2.1` Para cada exame: finalidade, como interpretar no contexto da ALGS, e **status de acesso** (com aviso de variação regional).
- `RF-2.2` "Pacote de solicitação sugerido" copiável/exportável para colar no pedido de exames.
- `RF-2.3` Sinalizar visualmente os exames **indisponíveis no SUS** com orientação de caminho alternativo (centro de referência, judicialização/assistência, pesquisa).

### RF-3 — Módulo de referência dos IBATs

Conteúdo educacional estruturado a partir do **Quadro 4 da diretriz** e das bulas/evidências (maralixibate, odevixibate):

- `RF-3.1` **Critério principal de indicação:** prurido colestático na ALGS.
- `RF-3.2` **Perfil clínico de maior benefício:** colestase evidente, prurido intenso, presença de xantomas, sinais de progressão hepática **sem cirrose estabelecida**.
- `RF-3.3` **Marcador laboratorial complementar:** ácidos biliares séricos (quando disponíveis), úteis sobretudo em sintomas leves com colestase bioquímica significativa.
- `RF-3.4` **Efeitos esperados:** melhora do prurido; melhora da colestase crônica e complicações; melhora do crescimento; melhora do sono e qualidade de vida.
- `RF-3.5` **Monitoramento terapêutico:** avaliação contínua (prurido, colestase, ganho pôndero-estatural, sono/QV) + níveis de ácidos biliares quando possível.
- `RF-3.6` **Ajuste de dose:** considerar em pacientes sem melhora clínica significativa ou sem redução de ácidos biliares após início.
- `RF-3.7` **Eventos adversos comuns:** diarreia, dor abdominal, alterações laboratoriais (transaminases, bilirrubinas).
- `RF-3.8` **Conduta frente a eventos adversos:** possível suspensão temporária ou descontinuação conforme gravidade/persistência.
- `RF-3.9` **Continuidade em pediatria:** considerar manutenção mesmo após melhora clínica, pelo benefício adicional no crescimento linear e ganho de peso.
- `RF-3.10` **Estratégia de transição:** início por **adição** ao esquema vigente, com retirada gradual das medicações *off-label* conforme resposta.
- `RF-3.11` **Contraindicação relativa ao adiamento do transplante:** atenção a cardiopatias congênitas graves não corrigíveis ou histórico de sangramento significativo em SNC — situações que podem limitar a postergação do transplante.

**Referência farmacológica (rotulada como "informação de bula/evidência internacional — não prescritiva"):**

| Fármaco | Indicação aprovada (FDA) | Faixa etária | Posologia de referência |
|---------|--------------------------|--------------|--------------------------|
| **Maralixibate** (Livmarli) | Prurido colestático na ALGS | ≥ 3 meses (FDA) | Início 190 mcg/kg 1×/dia; aumentar para **380 mcg/kg** 1×/dia após ~1 semana, conforme tolerância; **30 min antes da 1ª refeição** |
| **Odevixibate** (Bylvay) | Prurido colestático na ALGS | ≥ 12 meses (FDA) | 40 mcg/kg/dia, titulável até 120 mcg/kg/dia |

> **Nota regulatória:** verificar o status de registro/disponibilidade na **ANVISA** e a indicação em bula vigente no Brasil. A posologia exibida é referência educacional e **não constitui prescrição**; a prescrição é responsabilidade do especialista.

### RF-4 — Biblioteca educacional / atlas
- `RF-4.1` Ficha-resumo da ALGS (fisiopatologia Notch, herança autossômica dominante, prevalência, história natural).
- `RF-4.2` **Atlas visual** das manifestações (facial, ocular — embriotóxon posterior, esquelético — vértebra em borboleta) com imagens/ilustrações anotadas.
- `RF-4.3` Diagnóstico diferencial (ênfase em atresia biliar).
- `RF-4.4` Microconteúdos ("cards") de 1–2 min; quiz opcional com feedback.
- `RF-4.5` **Glossário / "Tradutor clínico"** (ver Apêndice A): cada termo técnico com **definição em 1 frase, sinônimo leigo, "como reconhecer" e imagem quando aplicável**. Disponível offline, com busca, e acessível por toque em qualquer termo técnico ao longo de todo o app (tooltips/cards contextuais).
- `RF-4.6` **Modo "pergunta simples"**: versão da triagem e dos sinais expressa como perguntas observáveis pelo médico generalista (ver RF-1.7), priorizando o reconhecimento sobre a nomenclatura.

### RF-5 — Relatório de encaminhamento
- `RF-5.1` Gerar resumo estruturado: critérios presentes, grau de suspeição, exames já realizados/sugeridos, motivo do encaminhamento.
- `RF-5.2` Exportar como **PDF** e compartilhar (sem dados pessoais identificáveis por padrão; campos de identificação opcionais e locais).
- `RF-5.3` Linguagem pronta para anexar à referência/contrarreferência.

### RF-6 — Funcionalidades transversais
- `RF-6.1` Busca global no conteúdo.
- `RF-6.2` Favoritos/marcadores.
- `RF-6.3` Modo offline (todo o conteúdo clínico essencial disponível sem rede).
- `RF-6.4` Atualização de conteúdo versionada (com changelog e data da última revisão da diretriz).
- `RF-6.5` Feedback do usuário e canal de reporte de erro de conteúdo.
- `RF-6.6` Onboarding curto + confirmação de "sou profissional de saúde" e aceite do disclaimer.

---

## 7. Requisitos não funcionais

| Categoria | Requisito |
|-----------|-----------|
| **Privacidade / LGPD** | Não coletar dados de pacientes por padrão; processamento local; consentimento explícito; minimização de dados; política de privacidade clara. |
| **Segurança** | Comunicação via HTTPS/TLS; armazenamento local criptografado para qualquer dado sensível; sem PII em telemetria. |
| **Acessibilidade** | Conformidade **WCAG 2.1 AA**: contraste, escalonamento de fonte, leitor de tela, navegação por teclado, *touch targets* ≥ 44px. |
| **Desempenho** | Abertura < 2s; triagem completa ≤ 3 min; conteúdo offline. |
| **Disponibilidade** | App funciona offline; sincronização de conteúdo quando online. |
| **Confiabilidade do conteúdo** | Cada tela clínica exibe **fonte** e **data de revisão**; governança de conteúdo por especialistas. |
| **Internacionalização** | PT-BR no MVP; arquitetura preparada para i18n. |
| **Compatibilidade** | iOS, Android e PWA/web responsivo. |
| **Regulatório** | Avaliar enquadramento como **SaMD/Software as a Medical Device** (RDC ANVISA 657/2022). No MVP, posicionar como **ferramenta educacional/apoio**, evitando função de "diagnóstico automatizado" para reduzir risco regulatório. |
| **Auditabilidade** | Versionamento do algoritmo de triagem e do conteúdo clínico. |

---

## 8. UX / Diretrizes de design

- **Princípio reitor:** *clareza sob pressão de tempo*. O não especialista decide em minutos.
- **Fluxo principal em ≤ 3 toques** até iniciar a triagem.
- **Hierarquia visual orientada a ação:** resultado sempre acompanhado de "próximo passo" explícito.
- **Sistema de design consistente** (componentes, tipografia, tokens de cor) com **semáforo de suspeição** (verde/amarelo/vermelho) usado de forma acessível (cor + ícone + texto, nunca só cor).
- **Conteúdo progressivo:** resumo primeiro, detalhe sob demanda ("saiba mais").
- **Microcopy clínico, sem jargão desnecessário**; termos técnicos com tooltip.
- **Estados vazios e de erro** tratados; nada de tela "morta".
- **Disclaimer persistente** mas não obstrutivo.
- Validação com **testes de usabilidade** (≥ 5 médicos não especialistas por rodada) antes do lançamento; meta SUS ≥ 80.

### Mapa de navegação (informação)
```
Home
├─ Triagem (RF-1)            → Resultado → Relatório (RF-5)
├─ Exames & Encaminhamento (RF-2)
├─ IBATs (RF-3)
├─ Aprender / Atlas (RF-4)
└─ Buscar · Favoritos · Sobre/Disclaimer
```

---

## 9. Arquitetura técnica sugerida

> Recomendações (não vinculantes) alinhadas a boas práticas de desenvolvimento de apps.

- **Cliente multiplataforma:** Flutter ou React Native (código único iOS/Android) + **PWA** para web.
- **Conteúdo clínico como dados versionados** (JSON/headless CMS), desacoplado do código — permite atualização de conteúdo sem nova publicação na loja, com **revisão médica obrigatória** antes de publicar.
- **Offline-first:** cache local (SQLite/Hive); sincronização incremental.
- **Motor de regras de triagem** isolado e testável (regras dos critérios como configuração versionada, não *hardcoded*).
- **Backend leve** (apenas conteúdo, telemetria anônima e feedback): API REST/GraphQL serverless.
- **Telemetria anônima e em conformidade com LGPD** (consentimento, sem PII).
- **CI/CD** com testes automatizados; **testes unitários do motor de critérios** como item crítico de qualidade.
- **Geração de PDF** local no dispositivo (sem enviar dados a servidor).

---

## 10. Governança de conteúdo clínico

- Todo conteúdo deriva da **Diretriz SBP nº 22 (2026)** e fontes citadas; cada item rastreável à referência.
- **Comitê de revisão** (hepatologia/gastroenterologia pediátrica) aprova mudanças.
- **Ciclo de revisão** mínimo semestral ou a cada atualização de diretriz/bula.
- Exibir **data da última revisão** e **versão** em cada módulo.

---

## 11. Roadmap / faseamento

| Fase | Entregáveis | Critério de pronto |
|------|-------------|--------------------|
| **MVP (v1.0)** | RF-1, RF-2, RF-3, RF-4 (núcleo), RF-5, RF-6; offline; disclaimer; LGPD | Validação clínica do conteúdo + testes de usabilidade (SUS ≥ 80) |
| **v1.1** | Atlas visual ampliado, quiz/educação continuada com certificado, busca avançada | Adoção O1/O3 atingida |
| **v2.0** | Painel de centros de referência (mapa), contrarreferência, multi-idioma | Parcerias institucionais |
| **Futuro** | Módulo para famílias/cuidadores; integração com diretrizes da SBP atualizadas | Avaliação regulatória SaMD |

---

## 12. Riscos e mitigações

| Risco | Impacto | Mitigação |
|-------|---------|-----------|
| Uso como "diagnóstico definitivo" | Alto (clínico/legal) | Linguagem de "suspeição", disclaimers, sem rótulo diagnóstico, enfatizar encaminhamento |
| Conteúdo desatualizado vs. diretriz/bula | Alto | Conteúdo versionado, governança, datas de revisão visíveis |
| Enquadramento regulatório (ANVISA SaMD) | Médio | Posicionamento educacional no MVP; assessoria regulatória antes de funções de "decisão automatizada" |
| Indisponibilidade de exames no SUS gera frustração | Médio | Transparência sobre acesso + caminhos alternativos |
| Baixa adoção pela atenção primária | Médio | Parcerias SBP, divulgação em residências, microaprendizado, offline |
| Privacidade de dados de paciente | Alto | Processamento local, sem PII por padrão, LGPD |

---

## 13. Critérios de aceitação do MVP

- [ ] A triagem aplica corretamente a regra **3 de 7** (e **2 de 7** com história familiar) e foi validada por especialista.
- [ ] Todo resultado de triagem apresenta **conduta/encaminhamento** e disclaimer.
- [ ] Quadro de exames reflete fielmente o **Quadro 1** da diretriz, incluindo status de acesso no SUS.
- [ ] Módulo de IBATs reflete o **Quadro 4** + referência farmacológica com nota regulatória.
- [ ] Conteúdo funciona **offline**.
- [ ] Conformidade **WCAG 2.1 AA** verificada.
- [ ] Conformidade **LGPD** (sem coleta de PII de paciente por padrão).
- [ ] Cada módulo exibe **fonte e data de revisão**.
- [ ] Teste de usabilidade com ≥ 5 médicos não especialistas, **SUS ≥ 80**.

---

## 14. Referências

**Diretriz base:**
- Sociedade Brasileira de Pediatria. Diretriz nº 22 (23/01/2026): *Síndrome de Alagille em Pediatria no Brasil e os Inibidores do Transportador de Ácido Biliar Ileal (IBAT)*. ISBN 978-85-88520-68-4. Porta G, Carvalho E, Rocha BPR, Melere MU, Miura IK, Vieira SMF.

**Fontes de alto impacto (complementares):**
1. Turnpenny PD, Ellard S. Alagille syndrome: pathogenesis, diagnosis and management. *Eur J Hum Genet.* 2012;20(3):251–7.
2. Kohut TJ, Gilbert MA, Loomes KM. Alagille Syndrome: A Focused Review on Clinical Features, Genetics, and Treatment. *Semin Liver Dis.* 2021;41(04):525–37.
3. Kamath BM, Baker A, Houwen R, Todorova L, Kerkar N. Systematic Review: Epidemiology, Natural History, and Burden of Alagille Syndrome. *J Pediatr Gastroenterol Nutr.* 2018;67(2):148–56.
4. Ayoub MD, Kamath BM. Alagille Syndrome: Diagnostic Challenges and Advances in Management. *Diagnostics (Basel).* 2020;10(11):907.
5. Gonzales E, Hardikar W, Stormon M, et al. Efficacy and safety of maralixibat in patients with Alagille syndrome and cholestatic pruritus (ICONIC): a randomised phase 2 study. *The Lancet.* 2021;398(10311):1581–92.
6. Sokol RJ, Gonzales EM, Kamath BM, et al. Predictors of 6-year event-free survival in Alagille syndrome treated with maralixibat. *Hepatology.* 2023;78(6):1698–710.
7. Hansen BE, Vandriel SM, Vig P, et al. Event-free survival of maralixibat-treated patients with Alagille syndrome compared to a real-world cohort from GALA. *Hepatology.* 2024;79(6):1279–92.
8. Muntaha HST, et al. Ileal Bile Acid Transporter Blockers for Cholestatic Liver Disease in Pediatric Patients with Alagille Syndrome: A Systematic Review and Meta-Analysis. *J Clin Med.* 2022;11(24):7526.
9. GeneReviews® — Alagille Syndrome. NCBI Bookshelf (atualizado em 2024). https://www.ncbi.nlm.nih.gov/books/NBK1273/
10. FDA. LIVMARLI (maralixibat) — Prescribing Information. https://www.accessdata.fda.gov/drugsatfda_docs/label/2024/214662s011lbl.pdf
11. FDA. BYLVAY (odevixibat) — Prescribing Information.

---

## Apêndice A — Glossário / "Tradutor clínico" (linguagem acessível)

> **Propósito:** permitir que pediatras e médicos de família reconheçam a ALGS **sem barreira de nomenclatura**. Conteúdo-fonte dos *cards* contextuais (RF-1.7, RF-4.5). Cada verbete deve estar disponível por toque em qualquer ponto do app e funcionar offline.

| Termo técnico | Em linguagem simples | Como reconhecer na prática |
|---------------|----------------------|-----------------------------|
| **Colestase** | A bile não flui bem do fígado para o intestino. | Icterícia persistente, **fezes claras/esbranquiçadas (acolia)**, **urina escura (colúria)**, coceira. |
| **Colestase crônica** | Esse bloqueio da bile dura semanas/meses. | Icterícia que **não melhora** + GGT e bilirrubina direta altas mantidas. |
| **Icterícia** | Pele e parte branca dos olhos ficam amareladas. | Olhar a esclera (olhos) e a pele sob luz natural. |
| **Ductopenia / escassez de ductos biliares** | Há **poucos "canais"** que drenam a bile dentro do fígado. | Achado da **biópsia hepática**; mais evidente após os 6 meses. |
| **Prurido colestático** | Coceira intensa causada pelo acúmulo de substâncias da bile. | Criança que se coça muito, com **escoriações**, perda de sono, irritabilidade. |
| **Ácidos biliares séricos** | Componentes da bile dosados no sangue; sobem na colestase. | Exame de sangue (**não disponível no SUS**); marcador de gravidade/resposta. |
| **GGT (Gama-GT)** | Enzima do fígado que **sobe quando há obstrução da bile**. | Exame de sangue de rotina; valor alto reforça colestase. |
| **Fosfatase alcalina (FA)** | Enzima que também sobe na colestase (interpretar com cautela em crianças, pois cresce com o osso). | Exame de sangue de rotina. |
| **Bilirrubina direta (BD)** | Fração da bilirrubina que aumenta quando a bile não escoa. | **BD elevada = colestase** (sinal de alarme em recém-nascido com icterícia prolongada). |
| **Estenose periférica da artéria pulmonar** | Estreitamento dos vasos que levam sangue do coração aos pulmões. | **Sopro cardíaco**; confirma-se no **ecocardiograma**. |
| **Cardiopatia congênita** | Defeito do coração presente desde o nascimento. | Sopro, cansaço às mamadas, cianose; ecocardiograma. |
| **Vértebra "em borboleta"** | Osso da coluna com fenda no meio, lembrando asas de borboleta. | Achado na **radiografia de coluna** (frente). |
| **Embriotóxon posterior** | Anel/linha esbranquiçada na borda da córnea (frente do olho). | Visto pelo **oftalmologista na lâmpada de fenda**; isolado pode ocorrer em pessoas saudáveis. |
| **Drusas do disco óptico** | Pequenos depósitos no nervo óptico, no fundo do olho. | **Fundo de olho** pelo oftalmologista. |
| **Dismorfismo facial** | Conjunto de feições típicas do rosto. | **Face triangular**, testa proeminente, queixo fino e pontudo, olhos fundos e afastados, nariz com ponta arredondada. |
| **Hipertelorismo** | Olhos mais afastados do que o usual. | Observação clínica do rosto. |
| **Displasia renal** | Rim formado de maneira anormal. | Pode aparecer no **ultrassom de abdome**; às vezes assintomática. |
| **Acidose tubular renal** | O rim não equilibra bem os ácidos do corpo. | Atraso de crescimento, alterações de eletrólitos no sangue. |
| **Xantoma** | Caroços amarelados de gordura na pele (colesterol alto da colestase). | Vistos em mãos, cotovelos, joelhos, dobras; podem ser desfigurantes. |
| **Herança autossômica dominante** | Basta **uma** cópia alterada do gene; cada filho tem ~50% de chance de herdar. | Investigar **história familiar** (pais/irmãos afetados). |
| **JAG1 / NOTCH2 (via Notch)** | Genes que, quando alterados, causam a ALGS. | Confirmação por **painel genético** (não disponível no SUS). |
| **Cirrose** | Cicatrização avançada e irreversível do fígado. | Fígado endurecido, sinais de hipertensão portal; evitar que se instale. |
| **IBAT (inibidor do transportador de ácido biliar ileal)** | Remédio que reduz a recirculação dos ácidos biliares, aliviando a coceira. | Classe *on-label* para o prurido da ALGS (maralixibate, odevixibate). |
| **Atresia biliar** | Doença em que as vias biliares se fecham — **principal diagnóstico a descartar** no lactente com colestase. | Urgência: investigar precocemente; difere da ALGS. |

**Regras de conteúdo do glossário:**
- Toda definição em **1 frase**, sem jargão; "como reconhecer" sempre com **sinal observável ou exame acessível**.
- Termos com correspondência visual **devem ter ilustração/foto** anotada.
- O glossário é a **única fonte de verdade** dos tooltips do app (reuso, consistência e governança de conteúdo — Seção 10).

---

## Histórico de revisões

| Versão | Data | Mudanças |
|--------|------|----------|
| 1.0 | 04/06/2026 | Versão inicial do PRD. |
| 1.1 | 04/06/2026 | Ênfase em **linguagem acessível** para pediatras/médicos de família: RF-1.7 (tradução obrigatória de termos + modo "pergunta simples"), 7 critérios reescritos com tradução e "como reconhecer", RF-4.5/4.6 e **Apêndice A — Glossário/Tradutor clínico**. |

---

*Fim do documento — PRD Alagille v1.1.*

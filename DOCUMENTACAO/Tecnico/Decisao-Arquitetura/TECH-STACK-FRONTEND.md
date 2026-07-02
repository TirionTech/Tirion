# Tech Stack — Frontend (Web + Mobile)

Este documento registra as decisões de tecnologia para as camadas de web e mobile do TIRION, com o porquê de cada escolha. Objetivo: evitar retrabalho de discussão e dar contexto pra quem entrar no time depois.

---

## Web — React + Vite

**Por quê:**

- **Velocidade de build/dev**: Vite usa ESBuild/Rollup e dá hot reload quase instantâneo, importante numa fase de ideação onde o design muda com frequência.
- **Ecossistema React**: maior disponibilidade de bibliotecas prontas (animação, 3D, formulários) e mais fácil achar devs/colaboradores que já conhecem.
- **Reuso de lógica com o mobile**: como o mobile também é React (React Native), dá pra compartilhar tipos, lógica de negócio e chamadas de API entre web e app sem reescrever tudo.
- **Alternativas consideradas**: Next.js foi descartado nessa fase porque o projeto não depende de SSR/SEO pesado (é mais um dashboard + site institucional) — Vite é mais leve pra esse escopo.

## Mobile — React Native + Expo

**Por quê:**

- **Um único código para Android/iOS**: time pequeno (8 pessoas), não dá pra manter duas bases nativas.
- **Expo** reduz a complexidade de configuração nativa (build, permissões, câmera, notificações) e acelera o ciclo de testes com o Expo Go durante o desenvolvimento.
- **Compatibilidade com React web**: mesma lógica de estado/API do lado web, menor curva de aprendizado pro time.
- **Trade-off aceito**: menor controle sobre módulos nativos muito específicos, mas não é um problema para o escopo atual (app de gestão/pontos, não tem necessidade de acesso profundo a hardware do celular).

## Estilização — Tailwind CSS

**Por quê:**

- Consistência visual rápida com o design system do TIRION (cores: quase-preto, ameixa profundo, terracota, lavanda-branco, laranja ember).
- Evita CSS solto e duplicado com vários devs mexendo no mesmo projeto.
- Fácil de tokenizar as cores/tipografia da marca (Cinzel, Manrope, Space Mono) como classes utilitárias reutilizáveis.

## Animações e 3D

**Por quê:**

- O diagrama animado assinatura (fluxo único se ramificando em 6 canais de triagem) precisa de uma camada de animação robusta — a decisão foi usar bibliotecas compatíveis com React (ex: Framer Motion para transições 2D, Three.js/R3F para elementos 3D) por já se integrarem nativamente ao ecossistema React/Vite escolhido.

---

*Última atualização: 02-07-2026
*Responsável pela decisão: Grupo

# Tech Stack — Backend / Infra

## Supabase

**Por quê:**
- **Velocidade de desenvolvimento em equipe pequena**: Supabase entrega banco (Postgres), autenticação, storage e API realtime prontos, sem precisar montar backend do zero — crítico pra um time de 8 pessoas em fase pré-protótipo, onde tempo de engenharia é o recurso mais escasso.
- **Postgres real por baixo**: ao contrário de soluções NoSQL, isso dá flexibilidade pra modelar relações (usuários, pontos, dispositivos coletores, histórico de descarte) sem gambiarra.
- **Realtime nativo**: útil pro dashboard operacional, que precisa refletir o status dos coletores (cheio, com erro, volume por categoria) quase em tempo real.
- **Custo**: tier gratuito/baixo custo inicial é adequado pra fase de validação, antes de captar investimento.
- **Alternativas consideradas**: Firebase foi cogitado, mas descartado por ser NoSQL (pior fit pro modelo relacional de pontos/recompensas/venues) e por lock-in mais forte no ecossistema Google.

## Comunicação Coletor ↔ Backend

**Por quê:**
- Os ESP32-CAM e o Raspberry Pi 4 de cada unidade se comunicam com o backend via Wi-Fi, usando HTTP ou MQTT (a decidir por unidade/caso de uso).
- **HTTP**: mais simples de integrar direto com API do Supabase, bom para eventos discretos (ex: registrar descarte, status de manutenção).
- **MQTT**: mais eficiente para telemetria contínua/alta frequência (ex: leitura de sensores), caso o volume de dados justifique — mantido como opção em aberto conforme os testes de protótipo avançarem.

---

*Última atualização: 02-07-2026
*Responsável pela decisão: Grupo

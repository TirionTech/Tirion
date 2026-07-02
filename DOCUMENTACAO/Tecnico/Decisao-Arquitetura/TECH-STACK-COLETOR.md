# Tech Stack — Coletor (Hardware)

## Arquitetura geral: ESP32-CAM (captura) + Raspberry Pi 4 (inferência central)

**Por quê:**
- **Custo-benefício**: ESP32-CAM é barato e compacto, ideal para multiplicar pontos de captura de imagem e leitura de sensores sem custo alto por unidade.
- **ESP32-CAM sozinho não é suficiente para IA embarcada**: capacidade de processamento é baixa demais para rodar inferência de visão computacional em tempo real com boa acurácia — por isso a arquitetura centraliza o processamento pesado no Raspberry Pi 4.
- **Raspberry Pi 4 como unidade central de inferência**: roda TensorFlow Lite, tem poder de processamento suficiente pra classificar os materiais em tempo aceitável, e mantém o custo do sistema controlado (comparado a, por ex., usar uma GPU dedicada ou um Jetson Nano nessa fase).
- **Comunicação Wi-Fi (HTTP/MQTT)** entre ESP32-CAM e RPi4: evita fiação complexa entre os módulos, facilita manutenção e substituição de peças.

## Sistema híbrido de 3 camadas: Visão computacional → Sensores físicos → Atuadores

**Por quê:**
- Depender só de visão computacional é arriscado (erros de classificação, objetos parcialmente visíveis, contaminação). Os sensores físicos atuam como camada de confirmação/correção antes da atuação mecânica.

## Sensores escolhidos

| Sensor | Função | Por quê esse |
|---|---|---|
| Indutivo | Detecção de metal | Detecção direta e confiável de metais, sem depender só de imagem |
| Célula de carga (load cell) | Peso/densidade | Ajuda a diferenciar materiais com aparência visual parecida (ex: plástico vazio vs cheio) |
| Capacitivo | Detecção de vidro | Vidro é difícil de diferenciar de plástico transparente só por câmera; sensor capacitivo resolve essa ambiguidade |
| Umidade | Detecção de orgânico | Material orgânico tem assinatura de umidade distinta, útil pra evitar contaminação de outras categorias |
| HC-SR04 (ultrassônico) | Detecção de presença | Barato e confiável pra saber quando um item foi inserido, disparando o ciclo de triagem |
| SG90 (servo) + PCA9685 (driver) | Atuação mecânica | Servos de baixo custo para movimentar as comportas de triagem; PCA9685 permite controlar vários servos simultaneamente a partir de poucos pinos do RPi4/ESP32 |

## Pontos ainda em aberto
- Definição final entre HTTP vs MQTT para telemetria contínua dos sensores.
- Validação se o RPi4 aguenta múltiplas unidades ESP32-CAM simultâneas em cenário de alto tráfego (shopping, por ex.) ou se será necessário RPi dedicado por totem.

---

*Última atualização: 02-07-2026
*Responsável pela decisão: Grupo

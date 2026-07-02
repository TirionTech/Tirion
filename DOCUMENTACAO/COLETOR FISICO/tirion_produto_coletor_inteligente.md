# TIRION — Coletor Inteligente de Resíduos

*Documento descritivo do produto — estágio de idealização*

## Visão Geral

A TIRION está desenvolvendo um coletor de resíduos inteligente capaz de identificar e separar automaticamente diferentes tipos de lixo no momento do descarte. A proposta é eliminar a etapa manual de triagem — tanto para quem descarta quanto para quem precisa lidar com o lixo depois — substituindo-a por um sistema híbrido que combina inteligência artificial, sensoriamento físico e mecanismos de direcionamento automatizado. O produto nasce como uma extensão física da filosofia da marca: assim como a TIRION moderniza sistemas legados sem descartar o que já existe, o coletor pretende modernizar o processo de descarte de resíduos sem exigir que o usuário mude seu comportamento — a inteligência fica no produto, não na exigência de educação ambiental do usuário.

## O Problema

Existem três dores centrais que motivam o projeto. A primeira é a falta de acesso: muitas pessoas têm intenção genuína de descartar corretamente, mas simplesmente não encontram locais com infraestrutura adequada de separação por perto, o que torna a reciclagem correta uma questão de sorte geográfica e não de vontade. A segunda é a ausência de retorno: hoje, descartar corretamente é um ato unilateral — quem separa o lixo não recebe nada em troca, nem reconhecimento, nem benefício financeiro, o que reduz o incentivo a manter o hábito ao longo do tempo. A terceira é o custo operacional da separação manual para empresas e estabelecimentos: manter equipes ou processos dedicados à triagem de resíduos é uma despesa recorrente, muitas vezes terceirizada, que pesa no orçamento sem gerar valor percebido direto para o negócio.

## A Solução

O coletor TIRION ataca essas três dores simultaneamente. Ele resolve o problema de acesso ao se tornar a própria infraestrutura de separação — colocado em locais de alto fluxo, ele dispensa a necessidade de o usuário conhecer regras de reciclagem ou procurar pontos de coleta especializados. Ele resolve o problema da ausência de retorno através de um sistema de pontos e cupons, transformando o ato de descartar em algo que gera benefício tangível para quem descarta. E resolve o problema do custo operacional ao substituir a triagem manual por automação, reduzindo a dependência de mão de obra dedicada exclusivamente a essa tarefa nos estabelecimentos parceiros.

## Como Funciona — Arquitetura Híbrida (IA + Sensores + Mecânica)

A separação não depende de uma única tecnologia, mas da combinação deliberada de três camadas que se cobrem mutuamente. A primeira camada é a inteligência artificial, responsável por reconhecer visualmente o tipo de material descartado — um modelo de visão computacional treinado para identificar categorias como plástico, papel, vidro, metal e orgânico a partir da aparência do item. A segunda camada é o sensoriamento físico, que atua como uma rede de segurança contra erros de classificação da IA: sensores de metal (por indução ou condutividade) já estão definidos como parte do sistema, e outros sensores complementares ainda estão em estudo — candidatos naturais incluem sensores de peso para inferir densidade do material, sensores infravermelho de proximidade (NIR) para diferenciar tipos de plástico que visualmente se parecem mas têm composição distinta, sensores capacitivos para detectar vidro, e até sensores de umidade para identificar resíduos orgânicos ou contaminados por líquido. A relação entre IA e sensores é pensada como redundância cruzada: quando a IA erra ou tem baixa confiança na classificação, os sensores corrigem; quando um sensor isolado não é conclusivo, a IA complementa com contexto visual. A terceira camada é o sistema mecânico, que executa a decisão final — uma vez que o material é classificado, atuadores físicos direcionam o resíduo para o compartimento correto dentro do próprio coletor, sem que o usuário precise escolher manualmente em qual abertura jogar o lixo.

## Categorias de Separação

O coletor foi pensado para separar cinco grandes categorias: vidro, metal, orgânico, papel e plástico. Além dessas, existe um compartimento adicional para "outros materiais", destinado a itens que exigem descarte especial, como lixo eletrônico e medicamentos — categorias que normalmente não têm rota de descarte clara para o usuário comum e que o coletor pretende absorver dentro do mesmo fluxo de uso.

## Tratamento de Resíduos Sujos ou Misturados

Um dos cuidados de design do produto é evitar que resíduos sujos contaminem os compartimentos de material limpo — um problema comum em sistemas de reciclagem tradicionais, onde uma embalagem com resto de comida pode comprometer um lote inteiro de papel ou plástico reciclável. Para isso, o coletor terá compartimentos específicos destinados a resíduos sujos ou contaminados, separados dos compartimentos "limpos" da mesma categoria de material. Essa distinção é feita principalmente pela camada de inteligência artificial, que, além de identificar o tipo de material, também avalia o estado de limpeza do item antes de decidir para qual compartimento ele deve ser direcionado.

## Modo de Uso Atual e Visão Futura

No modelo atual de funcionamento, o coletor possui um único ponto de entrada: o usuário deposita o resíduo nesse compartimento de entrada, e é o sistema interno — IA, sensores e mecânica trabalhando juntos — quem realiza toda a separação, sem exigir que o usuário pré-classifique o que está descartando. Existe uma visão de evolução futura, ainda não priorizada, em que o coletor seria capaz de lidar com múltiplos itens de categorias diferentes depositados juntos de uma só vez, separando-os individualmente dentro do mesmo ciclo. Essa capacidade representa um salto de complexidade técnica significativo e foi deliberadamente colocada como uma fase posterior do roadmap, depois que a separação de item único estiver validada e estável.

## Especificações Físicas e Infraestrutura

O coletor é um equipamento de porte grande, com altura estimada em torno de dois metros — um porte mais próximo de um totem ou estrutura urbana do que de um eletrodoméstico doméstico. Essa escolha de porte está diretamente ligada ao público-alvo inicial: ambientes de alto tráfego como shoppings, condomínios e mercados, onde o volume de descarte é maior e justifica uma estrutura robusta. Em termos de infraestrutura, a conectividade à internet já é um requisito confirmado, necessária para sincronização com o aplicativo de gestão, atualização do modelo de IA e envio de dados para o dashboard. A necessidade de alimentação elétrica dedicada ainda não foi formalmente definida, mas é considerada altamente provável dado que o produto depende de processamento de IA em tempo real, sensores ativos e atuadores mecânicos — componentes que dificilmente operariam de forma sustentável apenas com bateria em um equipamento desse porte e com esse uso contínuo.

## Capacidade e Logística de Esvaziamento

A capacidade exata de armazenamento ainda não foi dimensionada, mas o porte grande do equipamento foi pensado justamente para permitir acomodar um volume relevante de resíduos antes da necessidade de esvaziamento, reduzindo a frequência de manutenção operacional exigida dos estabelecimentos parceiros. Internamente, cada categoria de material é destinada a um saco individual, e esses sacos contam com algum tipo de diferenciação visual ou identificação entre si — facilitando o trabalho de quem realiza a coleta e o descarte final, que poderá reconhecer rapidamente qual saco corresponde a qual material sem precisar abri-lo ou inspecionar o conteúdo.

## Software: Aplicativo de Gestão e Dashboard

O ecossistema de software do produto não é voltado para o público final que descarta o lixo, mas sim para quem gerencia o equipamento — os estabelecimentos parceiros e a própria operação da TIRION. Está prevista a construção de um aplicativo de gestão, disponível em versão desktop e mobile, que não terá exposição pública: o acesso será restrito a quem administra o coletor. Esse aplicativo será acompanhado por um dashboard de métricas operacionais, peça considerada essencial e já definida como obrigatória no produto — permitindo acompanhar volume de resíduos processados, distribuição por categoria, frequência de uso e, futuramente, indicadores de impacto ambiental.

## Inteligência Artificial Evolutiva

O modelo de IA não é estático: a intenção declarada é construir um sistema que aprende continuamente com o uso, refinando sua capacidade de reconhecimento de materiais ao longo do tempo a partir dos dados coletados em campo. Isso significa que a precisão do coletor deve, em tese, melhorar progressivamente conforme mais unidades forem instaladas e mais dados de classificação — incluindo casos corrigidos pelos sensores — forem retroalimentados ao modelo central.

## Modelo de Negócio e Canais de Distribuição

O posicionamento inicial do produto é B2B: o coletor será instalado em estabelecimentos parceiros, como shoppings, condomínios e mercados, e não comercializado diretamente para uso doméstico. Existe uma visão de longo prazo para uma versão residencial, mas essa não é a prioridade do momento — o foco está em ambientes de alto fluxo, onde o volume de descarte e a visibilidade do produto justificam o investimento inicial em uma estrutura de maior porte.

## Diferencial Competitivo

Já existe no mercado um precedente direto de iniciativa parecida: a Heineken possui uma máquina de descarte automatizado, mas seu funcionamento é fechado — opera exclusivamente com as próprias embalagens da marca. A proposta da TIRION é justamente romper essa limitação, oferecendo um sistema de separação automática que funcione de forma agnóstica a marca, aceitando qualquer tipo de produto e material, e não apenas uma linha específica de embalagens de uma única empresa. Esse caráter universal, combinado a um sistema de recompensas e à facilidade do descarte automatizado, é apontado como o principal diferencial frente à referência de mercado já existente.

## Sistema de Incentivos: Pontos e Cupons

Para tornar o ato de descartar corretamente algo recompensador — e não apenas um gesto de boa vontade sem retorno — o produto contará com um sistema de pontos e cupons. A lógica é dar ao usuário um benefício tangível cada vez que ele utiliza o coletor, criando um incentivo direto e recorrente para o uso correto do equipamento, em vez de depender exclusivamente de consciência ambiental.

## Identidade de Marca

O coletor inteligente é um produto da própria TIRION, e não um projeto ou empresa separada. Ele se conecta à narrativa central da marca — inspirada na antiga Tiro, símbolo de durabilidade, inovação e capacidade de conectar diferentes eras — ao propor uma ponte entre o comportamento humano de descarte, que muitas vezes falha por falta de estrutura, e um futuro de gestão de resíduos totalmente automatizada e inteligente.

## Estágio Atual do Projeto

É importante registrar que o produto está, neste momento, em fase de idealização e captação de investidores. Ainda não existe um protótipo físico construído, embora haja expectativa — não garantia — de que essa etapa avance rapidamente. Diversas especificações técnicas seguem em aberto, incluindo a capacidade exata de armazenamento, a lista completa de sensores complementares ao sensor de metal, a necessidade formal de infraestrutura elétrica dedicada, e a sustentabilidade dos próprios materiais usados na fabricação do coletor — considerada provável, mas ainda não confirmada. Da mesma forma, ainda não existem números validados sobre redução de erro de separação ou impacto ambiental gerado; a expectativa da equipe é de uma redução significativa frente à separação manual tradicional, mas sem dados empíricos por enquanto, dado que o projeto está em estágio pré-protótipo.

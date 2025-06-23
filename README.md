# 🏎️ Simulador de Corridas do Mario Kart com Node.js

Este projeto simula uma corrida divertida entre personagens do universo **Mario Kart**, utilizando **Node.js** e conceitos fundamentais de lógica de programação.

Desenvolvido como parte de um **desafio complementar** da formação **Node.js Fundamentals** na [DIO - Digital Innovation One](https://www.dio.me/).



## 🎮 Como funciona

Dois personagens (Mario e Luigi) competem entre si em 5 rodadas. A cada rodada:

- Um **tipo de bloco** é sorteado (`RETA`, `CURVA`, ou `CONFRONTO`);
- Ambos os personagens **rolam um dado** (de 1 a 6);
- O valor do dado é somado ao atributo correspondente:
  - `RETA` → velocidade
  - `CURVA` → manobrabilidade
  - `CONFRONTO` → poder

No final da rodada, o personagem com maior total vence o desafio e marca **1 ponto**. No confronto direto, o perdedor perde um ponto (se tiver algum). Após as 5 rodadas, o personagem com mais pontos vence a corrida!



## 🧠 Conceitos utilizados

- Programação assíncrona com `async/await`
- Funções puras e reutilizáveis
- Estruturas condicionais (`if`, `switch`)
- Laços de repetição (`for`)
- Manipulação de objetos
- Simulação de dados aleatórios (`Math.random()` e `Math.floor()`)



## 📁 Estrutura do Projeto

simuladordecorridasdomariokartcomnode/

├── 📂src

│ └── 📜index.js # Arquivo principal com toda a lógica do jogo

├── 📜package.json # Configuração do projeto Node.js



## 📦 Exemplo de saída no console

```text
🏁🚨 Corrida entre Mario e Luigi começando ...

🏁 Rodada 1
Bloco: CURVA
Mario 🎲 rolou um dado de manobrabilidade 3 + 3 = 6
Luigi 🎲 rolou um dado de manobrabilidade 4 + 4 = 8

Luigi marcou um ponto!
---------------------------------------------------------
.....
Resultado final:
Mario: 2 ponto(s)
Luigi: 3 ponto(s)

Luigi venceu a corrida! Parabéns! 🏆
```


## 👾 Personagens

| Personagem | Velocidade (Speed) | Manobrabilidade (Handling) | Poder (Power) |
|------------|--------------------|-----------------------------|---------------|
| **Mario**  | 4                  | 3                           | 3             |
| **Luigi**  | 3                  | 4                           | 4             |



## 📜 Licença

Distribuído sob a licença ISC.



## 👤 Autor

JVRFurtado — projeto pessoal com base no desafio complementar da formação DIO 🚀

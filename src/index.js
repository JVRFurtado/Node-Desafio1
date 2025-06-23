const player1 = {
    name: "Mario",
    speed: 4,
    handling: 3,
    power: 3,
    score: 0,
};

const player2 = {
    name: "Luigi",
    speed: 3,
    handling: 4,
    power: 4,
    score: 0,
};

async function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock() {
    let random = Math.random();
    let result;

    switch(true) {
        case random < 0.33:
            result = 'RETA'
            break;
        case random < 0.66:
            result = 'CURVA'
            break;
        default:
            result = 'CONFRONTO'
            break;
    }

    return result;
}

async function logRollResult(characterName, block, diceResult, attribute) {
    console.log(`${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`);
}

async function plural(score) {
    if(score > 1){
        return 'pontos.'
    } else {
        return 'ponto.'
    }    
}

async function declareWinner(character1, character2) {
    console.log("Resultado final:")
    console.log(`${character1.name}: ${character1.score} ${await plural(character1.score)}`);
    console.log(`${character2.name}: ${character2.score} ${await plural(character2.score)}\n`);

    if (character1.score > character2.score)
        console.log(`${character1.name} venceu a corrida! Parabéns! 🏆`);
    else if (character2.score > character1.score)
        console.log(`${character2.name} venceu a corrida! Parabéns! 🏆`);
    else
        console.log(`A corrida terminou em empate!`);
}

async function playRaceEngine(character1, character2) {
    for (let round = 1; round <= 5; round++) {
      console.log(`🏁 Rodada ${round}`);

    // sortear bloco
    let block = await getRandomBlock()
    console.log(`Bloco: ${block}`);

    // rolar os dados
    let diceResult1 = await rollDice();
    let diceResult2 = await rollDice();

    // teste de habilidade
    let totalTestSkill1 = 0;
    let totalTestSkill2 = 0;

    if(block === "RETA") {
        totalTestSkill1 = diceResult1 + character1.speed;
        totalTestSkill2 = diceResult2 + character2.speed;

        await logRollResult(
            character1.name, 
            "velocidade", 
            diceResult1, 
            character1.speed
        );
        await logRollResult(
            character2.name, 
            "velocidade", 
            diceResult2, 
            character2.speed
        );

        if (totalTestSkill1 === totalTestSkill2) {
            console.log(`\nEmpate! Ninguém leva ponto.`)
        }
    } 
    
    if(block === "CURVA") {
        totalTestSkill1 = diceResult1 + character1.handling
        totalTestSkill2 = diceResult2 + character2.handling

        await logRollResult(
            character1.name, 
            "manobrabilidade", 
            diceResult1, 
            character1.handling
        );
        await logRollResult(
            character2.name, 
            "manobrabilidade", 
            diceResult2, 
            character2.handling
        );

        if (totalTestSkill1 === totalTestSkill2) {
            console.log(`\nEmpate! Ninguém leva ponto.`)
        }
    } 
    
    if(block === "CONFRONTO") {
        let powerResult1 = diceResult1 + character1.power;
        let powerResult2 = diceResult2 + character2.power;

        console.log(`${character1.name} confrontou com ${character2.name}! 🥊`);

        await logRollResult(
            character1.name, 
            "poder", 
            diceResult1, 
            character1.power
        );
        await logRollResult(
            character2.name, 
            "poder", 
            diceResult2, 
            character2.power
        );

        if(powerResult1 > powerResult2) {
            if (character2.score > 0){
                character2.score--;
                console.log(`\n${character1.name} venceu o confronto! ${character2.name} perdeu 1 ponto 🐢!`);
            } else {
                console.log(`\n${character1.name} venceu o confronto! Mas ${character2.name} não possui pontos a ser tirados!`);
            }
        }

        if (powerResult2 > powerResult1) {
            if (character1.score > 0){
                character1.score--;
                console.log(`\n${character2.name} venceu o confronto! ${character1.name} perdeu 1 ponto 🐢!`);
            } else {
                console.log(`\n${character2.name} venceu o confronto! Mas ${character1.name} não possui pontos a ser tirados!`);
            }
        }
        
        if (powerResult2 === powerResult1) {
            console.log(`\nConfronto empatado! Nenhum ponto foi perdido!`);
        }
    }


    // verificando o vencendor
    if(totalTestSkill1 > totalTestSkill2) {
        console.log(`\n${character1.name} marcou um ponto!`);
        character1.score++;
    } else if(totalTestSkill2 > totalTestSkill1) {
        console.log(`\n${character2.name} marcou um ponto!`);
        character2.score++;
    }

    console.log(`---------------------------------------------------------\n`)
    }
}
    // função que chama as outras
(async function main() {
    console.log(
        `🏁🚨 Corrida entre ${player1.name} e ${player2.name} começando ... \n`
    );

    await playRaceEngine(player1, player2);
    await declareWinner(player1, player2);
})()
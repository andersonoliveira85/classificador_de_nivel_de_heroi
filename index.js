// # 1️⃣ Desafio Classificador de nível de Herói

// **O Que deve ser utilizado**

// - Variáveis
// - Operadores
// - Laços de repetição
// - Estruturas de decisões

// ## Objetivo

// Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

// Se XP for menor do que 1.000 = Ferro
// Se XP for entre 1.001 e 2.000 = Bronze
// Se XP for entre 2.001 e 5.000 = Prata
// Se XP for entre 5.001 e 7.000 = Ouro
// Se XP for entre 7.001 e 8.000 = Platina
// Se XP for entre 8.001 e 9.000 = Ascendente
// Se XP for entre 9.001 e 10.000= Imortal
// Se XP for maior ou igual a 10.001 = Radiante

// ## Saída

// Ao final deve se exibir uma mensagem:
// "O Herói de nome **{nome}** está no nível de **{nivel}**"


valor_nivel = 7001;

nome = "Anderson";

if(valor_nivel<1000){
    console.log("O Herói de nome: %s está no nível de ** %s **", nome, 'Ferro')
} else if(valor_nivel>1000 && valor_nivel < 2000){
    console.log("O Herói de nome: %s está no nível de ** %s **", nome, 'Bronze')
}else if(valor_nivel>2000 && valor_nivel < 5000){
    console.log("O Herói de nome: %s está no nível de ** %s **", nome, 'Prata')
}else if(valor_nivel>5000 && valor_nivel < 7000){
    console.log("O Herói de nome: %s está no nível de ** %s **", nome, 'Ouro')
}else if(valor_nivel>7000 && valor_nivel < 8000){
    console.log("O Herói de nome: %s está no nível de ** %s **", nome, 'Platina')
}else if(valor_nivel>8000 && valor_nivel < 9000){
    console.log("O Herói de nome: %s está no nível de ** %s **", nome, 'Ascendente')
}else if(valor_nivel>9000 && valor_nivel < 10000){
    console.log("O Herói de nome: %s está no nível de ** %s **", nome, 'Imortal')
}else if(valor_nivel > 10000){
    console.log("O Herói de nome: %s está no nível de ** %s **", nome, 'Radiante')
}
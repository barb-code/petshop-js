//                                  Aula Digital House
//   Autor: Bárbara Lícia(barb-code)
//
//                                                   |Anotações|
//  let nome = 'Barbara'; existe três maneiras de criar uma variavel(var, const ou let).
//  const nomePetsho = "PETSHO AVANADE";  Porém o const não pode ser alterado, é interessante usar em dados que 
//  não devem ser alterados.
//  var idade = 25; Diferente do const o var pode ser alterado e por isso é interesante pra ser usado em dados 
//  que podem ser alterados.

const nomePetshop = "PETSHOP AVANADE";

const moment = require('moment');
const bancoDados = require('./bancoDados.json') ;

let pets =bancoDados.pets;


const listarPet = () => {
    for (const pet of pets) {
        console.log(`${pet.nome}`);
    }
}
// listarPet();
const vacinarPet = () => {                                                          //Criando uma função para listar o nome dos pets e ao utilizar const fica impossivel de alterar essa função.
    for(let pet of pets){                                                           //for(let i = 0; i < pets.length; i++){    Criando um metodo interativo para fazer a contagem dos objetos
        
        if (!pet.vacinado) {
            pet.vacinado == true
            console.log(`${pet.nome} foi vacinado!`);        //console.log("O nome do pet é " + pets[i].nome); Utilizando o console.log para "imprimir os itens .nome da lista de objetos pets"
        }
        else{
            console.log(`Opps! ${pet.nome} já foi vacinado. `);        //console.log("O nome do pet é " + pets[i].nome); Utilizando o console.log para "imprimir os itens .nome da lista de objetos pets"
        }
    }                                                                               //Utilizando o console.log para "imprimir os itens .nome da lista de objetos pets"
}    

//vacinarPet();                                                                       //Utilizando a função


const campanhaVacina = () => {                                                          //Criando uma função para listar o nome dos pets e ao utilizar const fica impossivel de alterar essa função.
    let animaisvacinados = 0;
    console.log("Campanha de vacina 2020");
    console.log("vacinando...");
    for(let pet of pets){                                                           //for(let i = 0; i < pets.length; i++){    Criando um metodo interativo para fazer a contagem dos objetos
        if(!pet.vacinado)
        {
            vacinarPet(pet);
            animaisvacinados ++;
        }
    }
    console.log(`Dando um total de ${animaisvacinados} animais vacinados na campanha!`);                                                                                //Utilizando o console.log para "imprimir os itens .nome da lista de objetos pets"
}    

//campanhaVacina();   
const adicionarPet = novoPet => {
    if (typeof novoPet == "object" && validarDados(novoPet)) {
        // adiciona o pet
        novoPet.nome = String(novoPet.nome);
        novoPet.idade = parseInt(novoPet.idade);

        if (!novoPet.servicos) {
            novoPet.servicos = [];
        }

        pets.push(novoPet);
    } else {
        console.log("Ops, insira um argumento valido!");
    }
}
//adicionarPet();

const darBanhoPet = pet => {
    pet.servicos.push({
        'nome':'banho',
        'data': moment().format('DD-MM-YYYY')
    });
    console.log(`${pet.nome} está de banho tomado!`);
};
//darBanhoPet();

const tosarPet = pet => {
    pet.servicos.push({
        'nome':'tosar',
        'data': moment().format('DD-MM-YYYY')
    }) 
    console.log(`${pet.nome} está com o cabelinho na regua!`)
}       
//tosarPet();
const apararUnhasPet = () => {
    pet.servicos.push({
        'nome':'aparar unhas',
        'data': moment().format('DD-MM-YYYY')
    }) 
    console.log(`${pet.nome} está com as unhas cortadas!`)
}       
//apararUnhasPet();

//console.log(bancoDados);

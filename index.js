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
const fs = require('fs');
const moment = require('moment');
let bancoDados = fs.readFileSync('bancoDados.json','utf-8')

bancoDados = JSON.parse(bancoDados);

const atualizarBanco = () => {
    let petsAtualizado = JSON.stringify(bancoDados,);

    fs.writeFileSync('bancoDados.json', petsAtualizado, 'utf-8')
}
const listarPet = () => {
    for (const pet of bancoDados.pets) {
    
    !pet.vacinado ? console.log(`${pet.nome} não foi vacinado.`) : console.log(`${pet.nome} foi vacinado!`) 
    
    }
}
//listarPet();

const vacinarPet = () => {                                                          //Criando uma função para listar o nome dos pets e ao utilizar const fica impossivel de alterar essa função.
    for(let pet of bancoDados.pets){                                                           //for(let i = 0; i < pets.length; i++){    Criando um metodo interativo para fazer a contagem dos objetos
        
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
    for(let pet of bancoDados.pets){                                                           //for(let i = 0; i < pets.length; i++){    Criando um metodo interativo para fazer a contagem dos objetos
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
    bancoDados.pets.push(novoPet);
    atualizarBanco();
    console.log(`${novoPet.nome} foi adicionado com sucesso!`)
}


const darBanhoPet = pet => {
    pet.servicos.push({
        'nome':'banho',
        'data': moment().format('DD-MM-YYYY')
    });
    atualizarBanco();
    console.log(`${pet.nome} está de banho tomado!`);
};
//darBanhoPet();

const tosarPet = pet => {
    pet.servicos.push({
        'nome':'tosar',
        'data': moment().format('DD-MM-YYYY')
    }) 
    atualizarBanco();
    console.log(`${pet.nome} está com o cabelinho na regua!`)
}       
//tosarPet();
const apararUnhasPet = pet => {
    pet.servicos.push({
        'nome':'aparar unhas',
        'data': moment().format('DD-MM-YYYY')
    }) 
    atualizarBanco();
    console.log(`${pet.nome} está com as unhas cortadas!`)
}       
//apararUnhasPet();
//let pet = dados.pets.find(findPet => findPet.nome == petNome);

const atenderClientes = (tipodeservico, pet) => {

    console.log(`${pet.tutor} bem vindo!`)
        switch (tipodeservico) {
            case 'banho':
                darBanhoPet(pet);
                break;
            case 'tosar':
                tosarPet(pet);
                 break;
            case 'aparar unhas':
                apararUnhasPet(pet);
                break;
            default:
                console.log('Serviço não disponivel -- Por favor consultar tabela de serviços!');
                break;
            }
    console.log(`${pet.tutor} obrigado pela preferencia!`)   
}   
    
    
  
    

atenderClientes('tosar',bancoDados.pets[0])
    
 //tosarPet(bancoDados.pets[4])       
//darBanhoPet(bancoDados.pets[0])
//apararUnhasPet(bancoDados.pets[2])
//atenderClientes();
//console.log(bancoDados);

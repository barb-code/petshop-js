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

let pets = [                                    
    {                                        // Aqui estamos criando uma lista de objetos utilizado o "[",
         nome: 'Tito',                       // a chave "{" esta sendo utilizada para criar o objeto
         tipo: 'cachorro',                   // cada item criado após os dois pontos ":" cria um item(pesquisar 
         idade: 4,                           // nome correto).
         raca: 'labradudle',                 
         peso: 5,                            
         tutor: 'Bárbara',                   
         contato: '(81) 99974-6366',         
         vacinado: true,
         servicos: ['banho', 'tosa']
    },
    {                                        
        nome: 'Belinha',                     
        tipo: 'cachorro',                    
        idade: 13,                           
        raca: 'cocker',                      
        peso: 8,                             
        tutor: 'Bárbara',
        contato: '(81) 99974-6366',
        vacinado: false,
        servicos: ['banho', 'tosa']
    },
    {                                       
        nome: 'Tony',                        
        tipo: 'gato',                        
        idade: 7,                            
        raca: 'salsicha',                    
        peso: 4,                             
        tutor: 'Shirlei',
        contato: '(81) 98974-63766',
        vacinado: false,
        servicos: [ 'corte de unha']
    },

];

const vacinarPet = () => {                                                          //Criando uma função para listar o nome dos pets e ao utilizar const fica impossivel de alterar essa função.
    for(let pet of pets){                                                           //for(let i = 0; i < pets.length; i++){    Criando um metodo interativo para fazer a contagem dos objetos
        
        if (pet.vacinado == true) {
            console.log(`${pet.nome} foi vacinado!`);        //console.log("O nome do pet é " + pets[i].nome); Utilizando o console.log para "imprimir os itens .nome da lista de objetos pets"
        }
        else{
            console.log(`Opps! ${pet.nome} não foi vacinado :(`);        //console.log("O nome do pet é " + pets[i].nome); Utilizando o console.log para "imprimir os itens .nome da lista de objetos pets"
        }
    }                                                                               //Utilizando o console.log para "imprimir os itens .nome da lista de objetos pets"
}    

//vacinarPet();                                                                       //Utilizando a função


const campanhaVacina = () => {                                                          //Criando uma função para listar o nome dos pets e ao utilizar const fica impossivel de alterar essa função.
    var animaisvacinados = 0;
    for(let pet of pets){                                                           //for(let i = 0; i < pets.length; i++){    Criando um metodo interativo para fazer a contagem dos objetos
        if(pet.vacinado == false)
        {
            console.log(`${pet.nome} foi vacinado na campanha!`);
            animaisvacinados ++;
        }
    }
    console.log(`Dando um total de ${animaisvacinados} animais vacinados na campanha!`);                                                                                //Utilizando o console.log para "imprimir os itens .nome da lista de objetos pets"
}    

//campanhaVacina();   

const adicionarPet = () => {
    pets.push(
        {                                       
        nome: 'TJeff',                        
        tipo: 'gato',                        
        idade: 7,                            
        raca: 'salsicha',                    
        peso: 4,                             
        tutor: 'Shirlei',
        contato: '(81) 98974-63766',
        vacinado: false,
        servicos: ['corte de unha']
        }
    )
    
}
adicionarPet();

const darBanhoPet = () => {
    for(let pet of pets){
            if(!(pet.servicos.includes('banho'))){
                pet.servicos.push('banho');
                console.log(`${pet.nome} acabou de tomar banho!`);  
              
            }
            else{
                console.log(`${pet.nome} já tomou banho`);
            }
    } 
}       
darBanhoPet();

const tosarPet = () => {
    for(let pet of pets){
            if(!(pet.servicos.includes('tosar'))){
                pet.servicos.push('tosar');
                console.log(`${pet.nome} agora está de cabelinho na regua`);    
            }
            else{
                console.log(`${pet.nome} já estava com o cabelinho da regua`);
            }
           
    } 
}       
tosarPet();
const apararUnhasPet = () => {
    for(let pet of pets){
            if(!(pet.servicos.includes('corte de unhas'))){
                pet.servicos.push('corte de unhas');
                console.log(`${pet.nome} acabou de aparar as unhas`);    
            }
            else{
                console.log(`${pet.nome} já estva de unhas aparada`);
            }
    }   
}       
apararUnhasPet();

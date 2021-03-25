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
        vacinado: true,
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
        vacinado: true,
        servicos: ['banho', 'corte de unha']
    },
    

];

const listarpets = () => {                      //Criando uma função para listar o nome dos pets e ao utilizar const fica impossivel de alterar essa função.
    for(let i = 0; i < pets.length; i++){       //Criando um metodo interativo para fazer a contagem dos objetos
        console.log(pets[i].nome);              //Utilizando o console.log para "imprimir os itens .nome da lista de objetos pets"
    }
}

listarpets();                                    //Utilizando a função

const pessoas = [
    { nome: 'Ana', cargo: 'Analista' },
    { nome: 'João', cargo: 'Gerência' },
    { nome: 'Aline', cargo: 'Analista' },
    { nome: 'Joana', cargo: 'Gerência' },
  ];
  
  const verificaCargo = pessoas.some((pessoa) => pessoa.cargo === 'Gerência');
  
  console.log(verificaCargo); // true

//Caso a pessoa esteja na lista de convidados, o retorno da função hasName deve ser true. Caso contrário, deve ser false.
  const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) =>{
  return arr.some((currentName) => currentName === name);
};

console.log(hasName(names, 'Ana'));
console.log(hasName(names, 'Pedro'));

//Crie uma função que verifica se todas as pessoas do array people possuem a idade mínima especificada;
//Retorne true se todas tiverem a idade maior ou igual à mínima e, caso contrário, false.
const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
    const verifyAges = (arr, minimumAge) => {
        return arr.every((person) => person.age >= minimumAge);
    };
  
  console.log(verifyAges(people, 18));
  console.log(verifyAges(people, 14));

  const peoples = [
    { nome: 'Joana', idade: 37 },
    { nome: 'Ana', idade: 25 },
    { nome: 'João', idade: 32 },
    { nome: 'Aline', idade: 28 },
  ];

    const verificaIdade = (arr, idadeMinima) => {
        return arr.every((pessoa) => pessoa.idade >= idadeMinima);
    };

    console.log(verifyAges(peoples, 37));
    console.log(verifyAges(peoples, 28));


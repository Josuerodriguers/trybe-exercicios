  // Executando esse código, recebe-se um erro `TypeError: Assignment to constant variable.`
  const pessoa = {
    nome: 'Henri',
    idade: 20
  }
    pessoa.nome = 'Luana'
    pessoa.idade = 19

  //Altere essa estrutura para corrigir o erro.
  console.log(`Nome: ${pessoa.nome}\nIdade: ${pessoa.idade}`);
//console.log('Nome:', pessoa.nome);
//console.log('Idade:', pessoa.idade);

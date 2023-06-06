//crie uma função que receba como parâmetro o nome completo da nova pessoa colaboradora e que automaticamente gere um email no formato nome_da_pessoa@trybe.com;
//utilize a função newEmployees, definida abaixo, para receber a sua função como parâmetro e criar o objeto de cada pessoa contratada.

const employeesGenerator = (fullName) => {
 const email = fullName.toLowerCase().replace(' ', '_');
 return {fullName, email: `${email}@trybe.com`};
};

const newEmployees = (employeesGenerator) => {
  const employees = {
    
    id1: employeesGenerator ('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: employeesGenerator('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: employeesGenerator('Carla Paiva'),   // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    id3: employeesGenerator('Josue Azevedo') // Nome: Josue Azevedo -> Chame sua função passando o nome Josue Azevedo como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees(employeesGenerator));
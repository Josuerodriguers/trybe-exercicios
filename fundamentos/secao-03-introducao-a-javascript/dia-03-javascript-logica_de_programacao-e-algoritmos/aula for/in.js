let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };
  
  for (let key in car) {
    console.log(key + ': ' + car[key]);
  }

  let customer = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
  };
  
  let newKey = 'lastName';
  let lastName = 'Ferreira';
  
  function addProperty(object, key, value) {
    object[key] = value;
  };
  
  addProperty(customer, newKey, lastName);
  console.log(customer);

  let student1 = {
    html: 'Muito Bom',
    css: 'Bom',
    javascript: 'Ótimo',
    softskills: 'Ótimo',
  };
  
  let student2 = {
    html: 'Bom',
    css: 'Ótimo',
    javascript: 'Ruim',
    softskills: 'Ótimo',
    git: 'Bom', // chave adicionada
  };
  
  function listSkills(student) {
    let arrayOfSkills = Object.keys(student);
    for (let index in arrayOfSkills) {
      console.log(arrayOfSkills[index] + ', Nível: ' + student[arrayOfSkills[index]]);
    }
  };
  
  console.log('Estudante 1');
  listSkills(student1);
  
  console.log('Estudante 2');
  listSkills(student2);

  let countries = {
    franca: 'Paris',
    brasil: 'Brasília',
    espanha: 'Madrid',
    portugal: 'Lisboa',
  };
  let pairKeyValue = Object.entries(countries);
  console.log(pairKeyValue);


  for(index in pairKeyValue) {
    console.log('--------');
    console.log('País:', pairKeyValue[index][0]);
    console.log('Capital:', pairKeyValue[index][1]);
  };
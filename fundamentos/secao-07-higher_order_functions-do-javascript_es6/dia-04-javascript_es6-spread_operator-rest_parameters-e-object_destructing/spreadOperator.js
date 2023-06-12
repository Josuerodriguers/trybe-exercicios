// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Banana', 'Maçã', 'Laranja'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Abacaxi', 'Uva', 'Morango'];

const fruitSalad = (fruit, additional) => {
  // Escreva sua função aqui
  const additionalFruit = [...fruit, ...additional];
    return additionalFruit;
};

console.log(fruitSalad(specialFruit, additionalItens));
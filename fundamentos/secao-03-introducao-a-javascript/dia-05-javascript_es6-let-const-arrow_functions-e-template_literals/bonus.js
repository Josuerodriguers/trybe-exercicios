const substituaX = (nome) => {
    const frase = 'Tryber x aqui!';
    const fraseArray = frase.split ('');
    for (let index = 0; index < fraseArray.length; index +=1){
        if (fraseArray[index] === 'x'){
            fraseArray[index] = nome;
        }
    }
    return fraseArray.join('');
  };

  console.log(substituaX('Bebeto'));

  const minhasSkills = (func) => {
    const skills = ['JavaScript', 'Html', 'CSS' ];
    let resultado = ` ${func} Minhas três habilidades são`;
    for (let index = 0; index < skills.length; index += 1) {
        resultado = `${resultado}
        - ${skills[index]}`; 
      }
      return resultado;
    };
    console.log(minhasSkills(substituaX('Bebeto')));

    const sentence = 'go Trybe';
const numWords = 2;

const result = splitSentence(sentence, numWords);

return result; // Saída: ['go', 'Trybe']

function splitSentence(sentence, numWords) {
  const words = sentence.split(' '); // Separa as palavras da frase
  return words.slice(0, numWords); // Retorna as n primeiras palavras
}






function splitSentence(sentence, numWords) {
  const words = sentence.split(' '); // Separa as palavras da frase
  return words.slice(0, numWords); // Retorna as n primeiras palavras
}


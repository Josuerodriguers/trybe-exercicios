// Jogo do Neidson
let studentGame = [18, 26, 35, 50, 60, 5];
let rodsGame = [10, 20, 30, 40, 50, 60];
let JojoGame = [33, 55, 20, 50, 60,];
// Jogo sorteado

const confereGame = (game) => {
  if (game.length < 6) {
    throw new Error ("Jogo inválido, precisa-se de pelo menos de 6 números.");
  }
};

let megaSenaNumbers = [];
   
for (let index = 0; index < 6; index += 1) {
  let randomNumber = Math.floor(Math.random() * 60) + 1;
  megaSenaNumbers.push(randomNumber);
  
}

// Confere o jogo
function megaSenaChecker (game) {
  try {
    confereGame(game);
    let numberOfHits = 0;
    
    for (let index = 0; index < megaSenaNumbers.length; index += 1) {
      let drawnNumber = megaSenaNumbers[index];
      
      for (let gameIndex = 0; gameIndex < game.length; gameIndex += 1) {
        let studentNumber = game[gameIndex];
        
        if (drawnNumber === studentNumber) {
          numberOfHits += 1;
        }
      }
    }
    return numberOfHits;
    
  } catch (error) {
    return error.message;
  }

}

console.log("jogo sorteado", megaSenaNumbers);
console.log("Jogo do Neidson:", studentGame);
console.log("Número de acertos:", megaSenaChecker(studentGame));
console.log("--------");
console.log("jogo sorteado", megaSenaNumbers);
console.log("Jogo do Rods:", rodsGame);
console.log("Número de acertos:", megaSenaChecker(rodsGame));
console.log("--------");
console.log("jogo sorteado", megaSenaNumbers);
console.log("Jogo do Rods:", JojoGame);
console.log("Número de acertos:", megaSenaChecker(JojoGame));
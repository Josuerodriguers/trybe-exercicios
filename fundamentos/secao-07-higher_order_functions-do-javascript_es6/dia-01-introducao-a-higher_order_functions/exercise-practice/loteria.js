const numberChecker = (myNumber, number) => myNumber === number;

const lotteryResult = (myNumber, callBack) => {
    const number = Math.floor((Math.random() * 5) + 1);
    return callBack(myNumber, number) ? 'Parabéns, Você ganhou!' : 'Tenta novamente!';
};

console.log(lotteryResult(6, numberChecker));
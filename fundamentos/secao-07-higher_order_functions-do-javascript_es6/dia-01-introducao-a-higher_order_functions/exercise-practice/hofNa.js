const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compareAnswers = (rightAnswers, studentAnswers, callback) => {
    if (rightAnswers === studentAnswers) {
        return 1;
    } if (studentAnswers === 'N.A') {
        return 0;
    }
    return -0.5;
};

const countPoints = (rightAnswers, studentAnswers, action) => {
    let contador = 0;
    rightAnswers.forEach((answer, index) => {
        const actionReturn = action(answer, studentAnswers[index]);
        contador += actionReturn;
      });
    
      return `Resultado final: ${contador} corretas`;
    };
    console.log(countPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers));
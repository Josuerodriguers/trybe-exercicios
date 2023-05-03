let angleA = 65;
let angleB = 100;
let angleC = 15;

let somaAngle = angleA + angleB + angleC;

let allAngle = angleA > 0 && angleB > 0 && angleC > 0;

if (allAngle) {
    if (somaAngle === 180){
        console.log(true);
    } else {
        console.log(false);
    }

} else {
    console.log("Erro: ângulo inválido");

}
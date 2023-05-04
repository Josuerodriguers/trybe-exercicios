let numbers = [];

for (let index = 1; index <= 25; index +=1) {
    numbers.push(index);
        console.log("numeros",numbers);
    for (let index = 0; index < numbers.length; index +=1){
        console.log("Dividido por 2",numbers[index] / 2);
    }
}


function maisRepetido(numeros) {
    let num = {};
    for (let index = 0; index < numeros.length; index +=1){
        let valor = numeros[index];
        if (num[valor] === undefined) {
            num[valor] = 1;
        }else {
            num[valor] +=1;
        }
    
    }
        return num;
    }

maisRepetido ([2, 3, 2, 5, 8, 2, 3]);
maisRepetido ([2, 3, -2, 3, -2, 2, 3]);
function indiceMenor(array){
    let indiceMenor = 0;
  for (let indice in array){

    if(array[indiceMenor] > array[indice]) {
        indiceMenor = indice;
        
    }
  }
return indiceMenor
}
    indiceMenor([2, 3, 6, 7, 10, 1]);
    indiceMenor([2, 4, 6, 7, 10, 0, -3]);
    

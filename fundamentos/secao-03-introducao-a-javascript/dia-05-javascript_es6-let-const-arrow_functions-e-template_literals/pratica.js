let condicao = 'ligado';
const ligaDesliga = (condicao) => (
    condicao === 'desligado' ? condicao = 'ligado' : condicao = 'desligado'
);


const compareTrue = (param1, param2) => {
    if (param1 && param2){
      return true;
    } else {
    return false;
    }
  };
  const girafa = true;
  const elefante = true;
  const macaco = false;
  console.log(compareTrue(girafa, macaco));
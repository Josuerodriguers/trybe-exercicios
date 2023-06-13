// Escreva uma função filterPeople que, dada uma lista de pessoas, retorna todas as pessoas australianas que nasceram no século 20:
const people = [
    {
      name: 'Nicole',
      bornIn: 1992,
      nationality: 'Australian',
    },
    {
      name: 'Harry',
      bornIn: 2008,
      nationality: 'Australian',
    },
    {
      name: 'Toby',
      bornIn: 1901,
      nationality: 'Australian',
    },
    {
      name: 'Frida',
      bornIn: 1960,
      nationality: 'Dannish',
    },
    {
      name: 'Fernando',
      bornIn: 2001,
      nationality: 'Brazilian',
    },

  ];
  const filterPeople = (listPeople) =>  listPeople.filter (({ nationality, bornIn}) => {
        return nationality === 'Australian' && bornIn > 1900 && bornIn <= 2000;
    })
  
  console.log(filterPeople(people));


// -5 Escreva uma função shipLength que, dado um objeto representando um navio, retorna o comprimento dele, mostrando também a devida unidade de medida:

const ships = [
    {
      name: 'Titanic',
      length: 269.1,
      measurementUnit: 'meters',
    },
    {
      name: 'Queen Mary 2',
      length: 1132,
      measurementUnit: 'feet',
    },
    {
      name: 'Yamato',
      length: 256,
      measurementUnit: 'meters',
    },
    // measurementUnit: unidade de medida
];

// escreva shipLength abaixo
    const shipLength = ({ name, length, measurementUnit }) => `${name} is ${length} ${measurementUnit} long`;
  
  // retorno esperado
  console.log(shipLength(ships[0])); // 'Titanic is 269.1 meters long'
  console.log(shipLength(ships[1])); // 'Queen Mary 2 is 1132 feet long'
  console.log(shipLength(ships[2])); // 'Yamato is 256 meters long'
let lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

let lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

let lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

function turno2 (obj, key, value) {
  obj[key = value];
}

turno2 (lesson2, 'Turno' , 'noite');
console.log(lesson2);

function keysObject (obj) {
  return Object.keys(obj);
}

console.log(keysObject(lesson1));
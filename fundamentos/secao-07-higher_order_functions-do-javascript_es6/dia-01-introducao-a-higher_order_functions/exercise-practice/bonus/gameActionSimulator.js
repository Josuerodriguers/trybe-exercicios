const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

//crie uma função que retorne o dano do dragão
//O dano será um número aleatório entre 15(dano mínimo) e o valor do atributo strength(dano máximo).

const dragonDamage = () => {
    const min = 15;
    const max = dragon.strength;
    const damage = Math.floor(Math.random() * (max - min + 1) + min);
    return damage;
};
console.log(dragonDamage());

//crie uma função que retorne o dano causado pelo warrior
//O dano será um número aleatório entre o valor do atributo strength(dano mínimo) e o valor de strength * weaponDmg(dano máximo).

const warriorDamage = () => {
    const min = warrior.strength;
    const max = warrior.strength * warrior.weaponDmg;
    const damage = Math.floor(Math.random() * (max - min + 1) + min);
    return damage;
};

console.log(warriorDamage());

//crie uma função que retorne o objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
//O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
// A mana consumida por turno é 15. Além disso, a função deve ter uma condicional: caso o mago tenha menos de 15 de mana, o valor de dano recebe uma mensagem (Ex: “Não possui mana suficiente”), e a mana gasta é 0.

const mageDamage = () => {
    const min = mage.intelligence;
    const max = mage.intelligence * 2;
    const damage = Math.floor(Math.random() * (max - min + 1) + min);
    const mana = mage.mana;
    const obj = {
        damage: damage,
        mana: mana,
    };
    if (mana < 15) {
        obj.damage = 'Não possui mana suficiente';
        obj.mana = 0;
    }
    return obj;
};

console.log(mageDamage());

//Crie a primeira HOF que compõe o objeto gameActions.
const gameActions = {
    // Crie as HOFs neste objeto.
  };
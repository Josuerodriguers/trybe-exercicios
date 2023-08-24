// 1 - Adicione a tag h1 com o texto TrybeTrip - Agência de Viagens como filho da tag body;
const h1 = document.createElement('h1');
h1.innerText = 'TrybeTrip - Agência de Viagens'
 // 2 - Adicione a tag main com a classe main-content como filha da tag body;
 const mainContent = document.createElement('main');
 mainContent.className = 'main-content';
 document.body.appendChild(mainContent);
// 3 - Adicione a tag section com a classe center-content como filha da tag main criada no passo 2;
const centerContet = document.createElement('section');
centerContet.className = 'center-content';
mainContent.appendChild(centerContet);

// 4 - Adicione a tag p como filha da section criada no passo 3 e coloque algum texto;
const tagP = document.createElement('p');
centerContet.appendChild(tagP);
tagP.innerText = 'Olá, Seja bem vindo! :D';
// 5 - Adicione a tag section com a classe left-content como filha da tag main criada no passo 2;
const leftContent =  document.createElement('section');
leftContent.className = 'left-content';
mainContent.appendChild(leftContent);

// 6 - Adicione a tag section com a classe right-content como filha da tag main criada no passo 2;
const rightContent = document.createElement('section');
rightContent.className = 'right-content';
mainContent.appendChild(rightContent);

// 7 - Adicione uma imagem com src configurado para valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho da section criada no passo 5;
const img = document.createElement('img');
img.src = 'https://picsum.photos/200';
img.className = 'small-image';
leftContent.appendChild(img);

// 8 - Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, e assim por diante. Essa lista deve ser filha da section criada no passo 6;
const ul = document.createElement('ul');
const numbers = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];

for(let index = 0; index < numbers.length; index += 1) {
  const li = document.createElement('li');
  li.innerText = numbers[index];
  ul.appendChild(li);
}
rightContent.appendChild(ul);

// 9 - Adicione 3 tags h3, todas filhas do main criado no passo 2.
for(let index = 0; index < 3; index += 1) {
  const h3 = document.createElement('h3');
  h3.innerText = index;
  mainContent.appendChild(h3);
}

//Bônus

// 10 - Adicione a classe title na tag h1 criada.
const title = document.querySelector('h1');
title.className = 'title';
// 11 - Adicione a classe description nas 3 tags h3 criadas.
const description = document.getElementsByTagName ('h3');
for (let index = 0; index < 3; index += 1 );
h3[index].className = 'description';

// 12 - Remova a section criada no passo 5 (aquela que possui a classe left-content) por meio da função .removeChild();
const sectionLeftContent = document.getElementsByClassName('left-content')[0]
mainContent.removeChild(sectionLeftContent);
// 13 - Troque a cor de fundo do elemento-pai da section criada no passo 3 (aquela que possui a classe center-content) para a cor verde;
const sectionCenterContent = document.getElementsByClassName('center-content')[0];
sectionCenterContent.parentNode.style.backgroundColor = 'green';
// 14 - Remova os dois últimos elementos (nove e dez) da lista criada no passo 8.
ul.lastChild.remove();
ul.lastChild.remove();
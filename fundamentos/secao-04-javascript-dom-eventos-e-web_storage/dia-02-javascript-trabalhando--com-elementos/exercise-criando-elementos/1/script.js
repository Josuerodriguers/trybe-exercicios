// Arquivo script.js

// Cria um novo elemento <li> e o armazena na variável newElement
let newElement = document.createElement('li');

// Acessa o novo elemento armazenado em newElement e altera seu conteúdo
newElement.innerHTML = 'Um texto para o novo elemento';

// Recupera o elemento que será o pai de newElement e o armazena na variável parent
let parent = document.getElementById('parent');

// Insere o novo elemento como filho de parent
parent.appendChild(newElement);


// Criando dois novos elementos
//Enquanto o innerText é usado para definir apenas elementos textuais, sem formatações e/ou elementos HTML, o innerHTML permite obter/atualizar qualquer elemento (incluindo a marcação HTML) 
let newElement2 = document.createElement('div');
let newElement3 = document.createElement('div');

newElement2.innerText = 'Um texto sem marcação HTML';
newElement3.innerHTML = '<b>Um texto com marcação HTML</b>';

parent.appendChild(newElement2);
parent.appendChild(newElement3);
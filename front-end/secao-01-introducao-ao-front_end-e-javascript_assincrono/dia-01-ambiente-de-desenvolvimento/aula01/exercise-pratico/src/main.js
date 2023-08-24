// Vamos importar nossa biblioteca
import validator from 'validator';

// Aqui, vamos selecionar, pelos ids, os campos em nossa página
const getValue = document.querySelector('#value');
const getOption = document.querySelector('#option');
const getButton = document.querySelector('#button');
const getAnswer = document.querySelector('#answer');

getButton.addEventListener('click', (event) => {
    // Vamos usar o preventDefault() para evitar que, ao
    // clicar no botão, ele recarregue a página
    event.preventDefault();

    // Aqui, criamos um objeto cujas chaves são os tipos a
    // serem validados. Por exemplo, a chave CPF valida se
    // o campoDeTexto.value é um CPF.
    const UUID_VERSION = 4;
    const options = {
        cpf: validator.isTaxID(getValue.value, 'pt-BR'),
        hexColor: validator.isHexColor(getValue.value),
        email: validator.isEmail(getValue.value),
        uuid: validator.isUUID(getValue.value, UUID_VERSION),
        url: validator.isURL(getValue.value),
    };

    // O objeto 'campos' possui as chaves com o mesmo nome
    // das opções do seletor em nossa página. Assim, podemos
    // selecionar a chave de acordo com o selecionado no HTML
    getAnswer.innerHTML = `A validação retornou ${options[getOption.value]}`;
});

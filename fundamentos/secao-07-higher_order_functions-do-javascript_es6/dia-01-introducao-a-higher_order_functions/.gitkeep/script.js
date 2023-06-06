const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const enviarEmail = (email) => {
    console.log(`O Email ${email} está cadastrado em nosso banco de dados!`);
};

emailListInData.forEach((item, posicao) => {
    enviarEmail(item);
    console.log(`O email ${item} está na posição: ${posicao}`);
});
const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
  // Adicione o código do exercício aqui:
  //Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
  //De olho na dica 👀: use a função find.

  const expectedResult = 'Stephen King';
  const authorBornIn1947 = () => {
    const author = books.find((book) => book.author.birthYear === 1947);
    return author.author.name;
  };

  console.log(authorBornIn1947(1947));

//Retorne o nome do livro com menor número de caracteres (menor nome).
//De olho na dica 👀: use a função forEach. 

const minorName = 'Duna';
const smallerName = () => {
    let nameBook;
    books.forEach((book) => {
        if (!nameBook || book.name.length < nameBook.length) {
        nameBook = book.name;
        }
    });
    return nameBook;
};

console.log(smallerName());

//Encontre o primeiro livro cujo nome possui 26 caracteres.

const expectedBook = {
    author: {
      birthYear: 1948,
      name: 'George R. R. Martin',
    },
    genre: 'Fantasia',
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    releaseYear: 1991,
  };
  
  const getNamedBook = () => {
    const book = books.find((book) => book.name.length === 26);
    return book;
  }

  console.log(getNamedBook());

//Faça uma função que retorne true se todas as pessoas autoras tiverem nascido no século XX, ou false, caso contrário.
 const expectedFunction = false;
    const everyoneWasBornOnSecXX = () => {
        const author = books.every((book) => book.author.birthYear > 1900 && book.author.birthYear <= 2000);
        return author;
    };

console.log(everyoneWasBornOnSecXX());

//Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário.
const expectedValue = true;
const someBookWasReleaseOnThe80s = () => {
    const book = books.some((book) => book.releaseYear >= 1980 && book.releaseYear <= 1989);
    return book;
};

console.log(someBookWasReleaseOnThe80s());

//Faça uma função que retorne true, caso nenhuma pessoa autora tenha nascido no mesmo ano, e false, caso contrário.
const expectedValueYear = false;
const authorUnique = () => {
    const author = books.every((book) => book.author.birthYear !== book.author.birthYear);
    return author;
};

console.log(authorUnique());
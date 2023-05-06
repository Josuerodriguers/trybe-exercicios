let object = { a: 1, b: 2, c: 3 };

for (let property in object) {
  console.log(property + ' = ' + object[property]);
}


let starships = {
    option1: "Tardis",
    option2: "Millennium Falcon",
    option3: "Enterprise",
    option4: "Heart of Gold"
  }
  console.log(Object.values(starships));


  let top3Albums = {
    1: 'Nightfall in Middle-Earth',
    2: 'Imaginations from the Other Side',
    3: 'Somewhere Far Beyond',
  };

  console.log(Object.entries(top3Albums));


  let band = {
    name: 'Blind Guardian',
    formedIn: 1986,
    lastAlbum: 'Beyond the Red Mirror',
  };
  
  let info = {
    genre: 'Power Metal',
    lastAlbum: 'Twilight Orchestra: Legacy of the Dark Lands',
  };

  console.log(Object.assign(band, info));


  let newObject = {
    
  }
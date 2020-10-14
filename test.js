require('dotenv').config()
var petfinder = require("@petfinder/petfinder-js");
var client = new petfinder.Client({ apiKey: process.env.PET_FINDER_API_KEY, secret: process.env.PET_FINDER_SECRET });

// client.animal.search()
// 	.then(function (response) {
// 		// Do something with `response.data.animals`
// 		console.log(response.data.animals[1]);
// 	})
// 	.catch(function (error) {
// 		// Handle the error
// 	});

//search organizations by zipcode
// client.organization.search({zip:"19146"})
// .then(response => {
// 	console.log(response.data);
// })

// search by zip code
// client.animal.search({
// 	location: 19146,
// 	distance: 10
//   }).then(resp => {
// 	// Do something with resp.data.animals
// 	console.log(resp.data)
//   });

// limit animal search results. See full docs for all available parameters.
// client.animal.search({
// 	type: "Dog",
// 	breed: "Bernedoodle",
// 	page: 1,
// 	limit: 100,
//   }).then(resp => {
// 	// Do something with resp.data.animals
// 	console.log(resp.data.animals)
//   });

async function showAnimals(zipCode, animalType, gender, age, size) {
	// let page = 1;
	// do {
	  apiResult = await client.animal.search({
		location: zipCode,
		distance: 15,
		type: animalType,
		gender: gender,
		age: age,
		size: size,
		page: 1,
		limit: 20,
	  });
	//   let idx = (page - 1) * 10;
	console.log(apiResult.data.animals);
	console.log(`=======================`)

	
	  apiResult.data.animals.forEach(function(animal) {
		console.log(
		  ` ID: ${animal.id} || Name: ${animal.name} || Gender: ${animal.gender} || Age: ${animal.age} || Size: ${animal.size}`
		);
	  });
	//   page++;
	// } while (
	//   apiResult.data.pagination &&
	//   apiResult.data.pagination.total_pages >= page
	// );
  }
  (async function() {
	await showAnimals();
  })();


//===============================

async function showAnimals() {
  apiResult = await client.animal.search({
    location: zipcode,
    distance: 15,
    type: animalType,
    gender: gender,
    age: age,
    size: size,
    page: 1,
    limit: 10,
  });

  // console.log(apiResult.data.animals);
  // console.log(`=======================`);

  apiResult.data.animals.forEach(function(animal) {
    res.render(animal);
  });
}

(async function() {
	await showAnimals();
})();

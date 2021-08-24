const { Dog, saveAll } = require('./index.js');


const models = {

	findOneDog: (dogName) => {
		return Dog.findOne({name: new RegExp(dogName, 'i')}).exec()
		.then(data => {
			console.log(data);
			return data;
		})
		.catch(err => console.log('Error retrieving single dog data from database: ', err));
	}

	// postOneDog: (dogPost) => {

	// 	return saveAll([dogPost])
	// 	.catch(err => console.log('Error posting dog to database: ', err));
	// }

}

module.exports = models;


// console.log(models.postOneDog(
// 	{
//     "bred_for": "Partying",
//     "breed_group": "Toy",
//     "height": {
//       "imperial": "9 - 11.5",
//       "metric": "23 - 29"
//     },
//     "id": 1,
//     "image": {
//       "height": 1199,
//       "id": "BJa4kxc4X",
//       "url": "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg",
//       "width": 1600
//     },
//     "life_span": "10 - 12 years",
//     "name": "Dave",
//     "origin": "The Moon",
//     "reference_image_id": "BJa4kxc4X",
//     "temperament": "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving",
//     "weight": {
//       "imperial": "6 - 13",
//       "metric": "3 - 6"
//     }
//   }));

// const findOneDog = (dogName) => {
// 	dogName = dogName || 'Husky';
// 	return Dog.findOne({name: new RegExp(dogName, 'i')}).exec()
// 	.then(data => {
// 		console.log(data);
// 		return data;
// 	})
// 	.catch(err => console.log('Error retrieving single dog data from database: ', err));
// };

// console.log(models.findOneDog('husky'));
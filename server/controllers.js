const { retrieveAllDogs } = require('../database/models');

const controllers = {
  getAllDogs: (req, res) => {

		retrieveAllDogs()
		.then(data => res.status(200).send(data))
		.catch(err => {
			console.log('Error fetching database dogs in controller: ', err);
			res.sendStatus(404);
		});

	},

	postDog: () => {

	}
}

module.exports = controllers;
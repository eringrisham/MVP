const axios = require('axios');
const { TOKEN } = require('./config');
const dbModel = require('./database/schema');

//https://docs.thedogapi.com/api-reference/breeds/breeds-list

const getDogData = () => {

	const options = {
		url: 'https://docs.thedogapi.com/api-reference/breeds/breeds-list',
		headers: {
			'x-api-key': TOKEN,
			'User-Agent': 'request',
			'Content-Type': 'application/json'
		}
	}

  return axios.get(options.url, options.headers)
    .then(dogs => {

			const promiseArray = dogs.map(dog => {
				//do model DB insert work here
				const dogToSave = new dbModel(dog);


				return dogToSave.findOneAndUpdate(
					{name: dog.name},
					{name: dog.name


					//add db rows

					},
					{upsert: true})
				.then()
				.catch();

			})

      return Promise.all(promiseArray);
    })
    .catch(err => {
      console.log('Error retrieving all dog data to put in database at getDogAPIData: ', err)
    });

}
getDogData();

module.exports = getDogData;
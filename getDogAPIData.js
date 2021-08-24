const axios = require('axios');
const { TOKEN } = require('./config');
const { saveAll } = require('./database');

const getDogData = () => {

	const options = {
		url: 'https://api.thedogapi.com/v1/breeds',
		headers: {
			'x-api-key': TOKEN,
			'User-Agent': 'request',
			'Content-Type': 'application/json'
		}
	}

  return axios.get(options.url, options.headers)
    .then(({data}) => {
			saveAll(data);
    })
    .catch(err => {
      console.log('Error retrieving all dog data to put in database at getDogAPIData: ', err)
    });
}
getDogData();

module.exports = getDogData;

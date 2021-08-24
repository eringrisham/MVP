const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/dogs', { useNewUrlParser: true, useUnifiedTopology: true });

//verify database connection
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('We\'re connected to the DB!');
});

let dogSchema = mongoose.Schema({
  id: { type: Number, unique : true },
	name: String,
	image_url: String,
	height: String,
	weight: String,
	life_span: String,
	temperament: String,
	breed_group: String,
	bred_for: String,
	origin: String
});

const Dog = mongoose.model('Dog', dogSchema);

const saveAll = (dogs) => {
	return Promise.all(
		dogs.map(dog => {
			return Dog.findOneAndUpdate(
				{
					id: dog.id
				},
				{
					id: dog.id,
					name: dog.name,
					image_url: dog.image.url,
					height: dog.height.imperial,
					weight: dog.weight.imperial,
					life_span: dog.life_span,
					temperament: dog.temperament,
					breed_group: dog.breed_group,
					bred_for: dog.bred_for,
					origin: dog.origin
				},
				{upsert: true}
			)
		})
	)
}

module.exports.saveAll = saveAll;

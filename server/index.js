const express = require('express');
const port = 3014;
const router = require('./routes');
let app = express();

// the body parser
app.use(express.json());

// serve up static files
app.use(express.static(__dirname + '/../client/dist'));

app.use(express.json());

// Set up our routes
app.use('/dogs', router);

app.get('/dogs', (req, res) => res.json({ message: 'Hello World' }));

app.listen(port, () => console.log(`App listening on port ${port}!`));
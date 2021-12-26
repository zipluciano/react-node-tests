const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const app = express();
const port = dotenv.parsed.PORT;

const origin = ['http://localhost:3333', `http://localhost:${port}/`];
const options = {
	methods: ['GET', 'POST'],
	origin: origin,
};

app.use(express.json());
// app.use(cors(options));

app.get('/', (req, res) => {
	res.status(200).send('Hello World from BackEnd');
});

app.post('/texts', cors(options), (req, res) => {
	const { texts } = req.body;
	console.log(texts);
	res.status(201).send(texts);
});

app.listen(port, () => {
	console.log(`Server running on PORT: http://localhost:${port}`);
});

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const app = express();
const port = dotenv.parsed.PORT;

app.use(express.json());

// Configs for CORS, but not working
// const origins = [
// 	`http://localhost:${port}`,
// 	`http://localhost:${port}/`,
// 	`http://localhost:${port}/name`,
// ];
// const options = {
// 	origin: origins,
// 	methods: ['GET', 'POST'],
// };
// Tried this
// app.use(cors(options))

app.use(cors());

app.get('/', (req, res) => {
	res.status(200).json({ message: 'Simple Form' });
});

app.post('/name', (req, res) => {
	const { name } = req.body;
	res.status(201).json({ message: name });
});

app.listen(port, () => {
	console.log(`Server running on PORT: http://localhost:${port}`);
});

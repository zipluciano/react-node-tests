import React, { useState, useEffect } from 'react';
import axios from 'axios';

const url = `http://localhost:${process.env.REACT_APP_PORT}/`;

function App() {
	const [greeting, setGreeting] = useState('Hello from useState');
	const [inputData, setInputData] = useState('');
	const [responseText, setResponseText] = useState('');

	async function loadGreeting(path) {
		await axios({
			method: 'get',
			url: path,
		}).then((res) => setGreeting(res.data));
	}

	async function handleSubmit(e) {
		e.preventDefault();
		const header = {
			method: 'post',
			url: `${url}texts`,
			data: {
				texts: inputData,
			},
		};
		await axios(header).then((res) => setResponseText(res.data));
	}

	useEffect(() => {
		loadGreeting(url);
	}, []);

	return (
		<div className='App'>
			<h3>{greeting}</h3>
			<form method='post' onSubmit={handleSubmit}>
				<label htmlFor='text'>Type some text</label>
				<br />
				<input
					type='text'
					name='text'
					id='text'
					onChange={(e) => setInputData(e.target.value)}
				/>
				<button type='submit'>Send Data</button>
			</form>
			<h3>{responseText}</h3>
		</div>
	);
}

export default App;

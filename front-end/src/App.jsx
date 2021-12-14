import React from 'react';
import axios from 'axios';

function App() {
	const [get, setGet] = React.useState('');
	const [response, setResponse] = React.useState('');
	const [value, setValue] = React.useState('');
	const port = process.env.REACT_APP_PORT;
	const url = `http://localhost:${port}/`;

	async function handleSubmit(event) {
		event.preventDefault();
		axios
			.post(url + 'name', {
				name: value,
			})
			.then((res) => setResponse(res.status));
	}

	React.useEffect(() => {
		try {
			axios.get(url).then((res) => setGet(res.data.message));
		} catch (error) {
			console.log(error);
		}
	});

	return (
		<div className='App'>
			<h1>{get}</h1>
			<form action='POST' onSubmit={handleSubmit}>
				<input
					type='text'
					value={value}
					onChange={(event) => setValue(event.target.value)}
				/>
				<button type='submit'>Send Message</button>
			</form>
			<div style={{ color: 'green' }}>
				{response && `Your data was sended to server. Status code: ${response}`}
			</div>
		</div>
	);
}

export default App;

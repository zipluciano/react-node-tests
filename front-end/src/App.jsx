import React from 'react';

function App() {
	const [getMessage, setGetMessage] = React.useState('');
	const [name, setName] = React.useState('');
	const port = process.env.REACT_APP_PORT;
	const url = `http://localhost:${port}/`;

	async function callApi(path, setterFunc) {
		const response = await fetch(path).then((res) => res.json());
		await setterFunc(response.message);
	}

	async function handleSubmit(event) {
		event.preventDefault();
		await fetch(url + 'name', {
			method: 'POST',
			body: JSON.stringify('postValue'),
			headers: { 'Content-Type': 'text/plain' },
		});
	}

	React.useEffect(() => {
		callApi(url, setGetMessage);
	}, [url]);

	return (
		<div className='App'>
			<h2>Testing GET</h2>
			<p>{getMessage}</p>
			<br />
			<div>
				<h2>Testing POST</h2>
				<form method='post' onSubmit={handleSubmit}>
					<label htmlFor='name'>
						<strong>Type a name {''}</strong>
					</label>
					<input
						type='text'
						id='name'
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<div>
						<button type='submit'>Send name</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default App;

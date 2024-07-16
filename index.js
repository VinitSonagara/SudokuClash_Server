import express from 'express';
import generateUniqueCode from './utils/generateUniqueCode.js';

const app = express();

app.get('/create', (req, res) => {
	const code = generateUniqueCode(6);
	res.json({ code });
});

app.listen(3000, () => {
	console.log('server running at http://localhost:3000');
});

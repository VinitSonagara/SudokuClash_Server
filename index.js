import express from 'express';
import { Server } from 'socket.io';
import cors from 'cors';
import generateUniqueCode from './utils/generateUniqueCode.js';

const app = express();
app.use(cors());

const server = app.listen(3000, () => {
	console.log('server running at http://localhost:3000');
});

const io = new Server(server, {
	cors: {
		origin: '*', // Allow all origins, you can specify a particular domain if needed
		methods: ['GET', 'POST'],
		allowedHeaders: ['Content-Type'],
		credentials: true,
	},
});

app.get('/create', (req, res) => {
	const code = generateUniqueCode(6);
	res.json({ code });
});

io.on('connection', (socket) => {
	console.log('a user connected:', socket.id);

	socket.on('joinLobby', (lobbyId) => {
		socket.join(lobbyId);
		console.log(`User ${socket.id} joined lobby ${lobbyId}`);
	});

	socket.on('disconnect', () => {
		console.log('user disconnected:', socket.id);
	});
});

/* eslint-disable */
const path = require('path');
const jsonServer = require('json-server');
const pause = require('connect-pause');

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'mock-db.json'));
const middlewares = jsonServer.defaults();

server.use(pause(500)); // delay in MS to simulate slower response
server.use(middlewares);
server.use(jsonServer.bodyParser);
const lowdb = router.db;

server.post('/example', (req, res) => {
	res.send(lowdb.get('example'));
});

server.post('/v1/auth/login', (req, res) => {
	res.send({
		token:
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5hZ3lAYWRhbS5jb20iLCJuYW1lIjoiTmFneSDDgWTDoW1zIiwicm9sZXMiOlsiQURNSU4iXX0.JkoBi2Kg56xNW8YSf9LiuoXgAFTGhvobwv12k_bCNfQ',
	});
});

server.get('/v1/symbol/:symbol/dividend-history', (req, res) => {
	res.send(lowdb.get('dividend-history'));
});

server.use(router);

const port = 5002;

server.listen(port, () => {
	console.log('JSON Mock Server is running on Port:', port);
});

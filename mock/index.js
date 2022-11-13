/* eslint-disable */
const path = require('path');
const jsonServer = require('json-server');
const pause = require('connect-pause');
const fs = require('fs');

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

server.use(router);

const port = 5002;

server.listen(port, () => {
	console.log('JSON Mock Server is running on Port:', port);
});

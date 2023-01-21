/* eslint-disable */
const path = require('path');
const jsonServer = require('json-server');
const pause = require('connect-pause');

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'mock-db.json'));
const dividendPercentages = jsonServer.router(
	path.join(__dirname, 'dividend-percentages-history.json')
);
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
			'eyJhbGciOiJIUzI1NiJ9.eyJmaXJzdG5hbWUiOiJOYWd5IiwibGFzdG5hbWUiOiJBZGFtIiwic3ViIjoiYWRtaW5AZ21haWwuY29tIiwiaWF0IjoxNjc0MzMxNDI5LCJleHAiOjE2NzQzMzI4Njl9.nu1h_C4AhOkSNcftxSss7-LfD9GC0OOIK8Eh-QGonLE'
	});
});

server.get('/v1/symbol/:symbol', (req, res) => {
	res.send(lowdb.get('stock-summary'));
});

server.get('/v1/symbol/:symbol/dividend-history', (req, res) => {
	res.send(lowdb.get('dividend-history'));
});

server.get('/v1/symbol/:symbol/dividend-percentage-history', (req, res) => {
	res.send(dividendPercentages.db.get('dividend-percentage'));
});

server.use(router);

const port = 5002;

server.listen(port, () => {
	console.log('JSON Mock Server is running on Port:', port);
});

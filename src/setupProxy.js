const { createProxyMiddleware } = require('http-proxy-middleware');

const proxy = {
	target: 'https://query1.finance.yahoo.com',
	changeOrigin: true
}

module.exports = function(app) {
	app.use('/v1/finance/search', createProxyMiddleware(proxy));
};
const express = require('express');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
	res.status(200).json({ message: 'Hello World' });
});

module.exports = app;

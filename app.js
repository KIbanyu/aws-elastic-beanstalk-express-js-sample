const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Am done with ci/cd!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);

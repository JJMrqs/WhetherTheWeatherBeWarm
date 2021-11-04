const express = require('express');
const cors = require('cors');

const app = express();

// eslint-disable-next-line no-path-concat
app.use(express.static(`${__dirname}/../dist`));
app.use(express.json);
app.use(cors());

// http requests go here

const port = 3000;

app.listen(port, () => {
  console.log(`Express server listening on port: ${port}`);
});
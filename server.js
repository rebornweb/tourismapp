//This server is just to change port cause App service Azure does not like script command 'next start' Check package.json

const express = require('express');
const next = require('next');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
const { Duffel } = require('@duffel/api');
const bodyParser = require('body-parser');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.use(cors()); // Enable CORS for all routes
  server.use(express.json());
  server.use(bodyParser.json());

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  const PORT = process.env.PORT || 8080; // Define the port
  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Server running on port ${PORT}`);
  });
});

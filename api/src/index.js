// import dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

// define the express app
const app = express();

// the database
const portlets = [];

// enhance your app security with helmet
app.use(helmet());

// use body-parser to parse application/json content-type
app.use(bodyParser.json());

// enable all cors requests
app.use(cors());

// log HTTP requests
app.use(morgan('combined'));

// retrieve all portlets
app.get('/', (req, res) => {
  const ps = portlets.map(p => ({
    id: p.id,
    title: p.title,
    description: p.description,
    messages: p.messages.length
  }));
  res.send(ps);
});

// get a specific portlet
app.get('/:id', (req, res) => {
  const portlet = portlets.filter(p => (p.id === parseInt(req.params.id)));
  if (portlet.length > 1) return res.status(500).send();
  if (portlet.length === 0) return res.status(404).send();
  res.send(portlet[0]);
});

// JSON Web Tokens middleware
const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://tictacturing-adamayd.auth0.com/.well-known/jwks.json`
  }),

  // Validate the audience and the issuer
  audience: '8UyLuLEaMP05pbalVya3jqZTqlmg80xS',
  issuer: `https://tictacturing-adamayd.auth0.com/`,
  algorithms: ['RS256']
});

// insert a new portlet
app.post('/', checkJwt, (req, res) => {
  const {title, description} = req.body;
  const newPortlet = {
    id: portlets.length + 1,
    title,
    description,
    messages: [],
    author: req.user.name
  };
  portlets.push(newPortlet);
  res.status(200).send();
});

// insert a new message into a portlet
app.post('/message/:id', checkJwt, (req, res) => {
  const { message } = req.body;

  const portlet = portlets.filter(q => (q.id === parseInt(req.params.id)));
  if (portlet.length > 1) return res.status(500).send();
  if (portlet.length === 0) return res.status(404).send();

  portlet[0].messages.push({
    message,
    author: req.user.name
  });

  res.status(200).send();
});

// start the server
app.listen(8081, () => {
  console.log('listening on port 8081');
});


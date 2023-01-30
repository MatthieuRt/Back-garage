const cors  = require('cors');
app.use(cors());

app.use((req, res, next) => {
    if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Origin', 'https://front-garage.vercel.app');
      res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      res.status(200).end();
    } else {
      next();
    }
  });
const express = require('express');
const app = express();


const bodyParser = require('body-parser');
require('./DbConnexion');

const reparationsRoute = require('./routes/reparationsRoute');
const pieceRoute = require('./routes/pieceRoute');
const demandePaiementRoute = require('./routes/demandePaiementRoute');
const beneficeRoute = require('./routes/beneficeRoute');



app.use(bodyParser.json());

const userRoute = require('./routes/userRoute');
app.use('/user',userRoute);
app.use('/reparation',reparationsRoute);
app.use('/piece',pieceRoute);
app.use('/demandepaiement',demandePaiementRoute);
app.use('/benefice',beneficeRoute);
app.listen(9000);
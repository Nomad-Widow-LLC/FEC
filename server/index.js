require('dotenv').config();

const path = require("path")
const express = require("express"); // npm installed

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "../client/dist")));
// other configuration...

app.get('/reviews', (req, res) => {
  console.log('Received Get Request for Reviews');
  res.status(200).send('This Works');
})

app.listen(3001);
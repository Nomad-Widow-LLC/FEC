require('dotenv').config();
const axios = require('axios');

const path = require("path")
const express = require("express"); // npm installed


const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "../client/dist")));
// other configuration...

app.listen(3001);

let api_header = {headers:{Authorization: `${process.env.TOKEN}`}};

// get detail of a specific product
app.get('/product', (req, res) => {
  let product = req.query.product_id;
  //console.log('PRODUCT', product);
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${product}`, api_header)
    .then ((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => {
      console.log('ERROR', err)
      res.status(500).send('did not obtain data')
    })
})

app.get('/styles', (req, res) => {
  let product = req.query.product_id;
  console.log('PRODUCT', product);
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${product}/styles`,{headers:{Authorization: `${process.env.TOKEN}`}})
    .then ((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => {
      console.log('ERROR', err)
      res.status(500).send('did not obtain data')
    })
})


// get reviews of a specific product
app.get('/review', (req, res) => {
  let product = req.query.product_id;
  let sort = req.query.sort || 'relevant';
  let count = req.query.count || 5;
  // console.log(product, sort);
  // console.log('WHAT IS THE DIFFERENce', config.TOKEN)
  // console.log('HERE IS YOUR TOKEN', process.env.TOKEN)
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews?sort=${sort}&&product_id=${product}&&count=${count}`, api_header)
    .then ((response) => {
      // console.log('RESPONSE', response.data)

      res.status(200).send(response.data);

    })
    .catch((err) => {
      // console.log('ERROR', err)
      res.status(500).send('did not obtain data')
    })
})

app.get('/review/meta', (req, res) => {
  //console.log(`Getting reviews for: ${JSON.stringify(req.query)}`)
  let product = req.query.product_id;

  axios.get(`${process.env.API_URL}/reviews/meta?product_id=${product}`, api_header)
  .then ((response) => {
    res.status(200).send(response.data);
  })
  .catch((err) => {console.log(`meta Error: ${err}`)})
})

app.post('/review', (req, res) => {
  // console.log('Recieved Post Request for Reviews: ', req.body);

  axios.post(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews`, req.body, api_header)
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => {console.log(err)})
})

app.put('/review', (req, res) => {
  console.log('Recieved Put Request: ', req.body.reviewID);
  axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/${req.body.reviewID}/helpful`, req.body, api_header)
    .then(() => {
      res.sendStatus(204);
    })
    .catch((err) => {console.log(err)})

})

app.get('/products', (req, res) => {
  let numOfProducts = req.query.count;
  let pageNum = req.query.page;
  let productID = req.query.id;
  let related = req.query.related;
  let styles = req.query.styles;
  let api_endpoint = ``;
  // console.log(`Query Parameters: `);
  // console.log(req.query);

  if (numOfProducts === undefined && pageNum === undefined && productID === undefined) {
    api_endpoint = `${process.env.API_URL}/products`;
  } else if (numOfProducts !== undefined && pageNum === undefined && productID === undefined) {
    api_endpoint = `${process.env.API_URL}/products?count=${numOfProducts}`;
  } else if (numOfProducts === undefined && pageNum !== undefined && productID === undefined) {
    api_endpoint = `${process.env.API_URL}/products?page=${pageNum}`;
  } else if (numOfProducts !== undefined && pageNum !== undefined && productID === undefined) {
    api_endpoint = `${process.env.API_URL}/products?count=${numOfProducts}&page=${pageNum}`;
  }

  if (productID && related && !styles) {
    api_endpoint = `${process.env.API_URL}/products/${productID}/related`
  } else if (productID && !related && styles) {
    api_endpoint = `${process.env.API_URL}/products/${productID}/styles`
  } else if (productID && !related && !styles) {
    api_endpoint = `${process.env.API_URL}/products/${productID}`
  }

  axios.get(api_endpoint, api_header)
      .then((results) => {
        // console.log("Results:");
        // console.log(results.data);
        res.status(200).send(results.data);
      })
});


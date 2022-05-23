import React, { useState, useEffect } from 'react';
import useToGetProducts from './lib/hooks.js';
import Card from './Card.jsx';
import axios from 'axios';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [],
      page: 4
    }
  }

  getEndPoint(page, count) {
    let endpoint = '';

    if (page === undefined && count === undefined) {
      // Default with no arguments will retrieve 5 items
      endpoint = `/products`;
    } else if (page !== undefined && count === undefined) {
      // This will return a single page which contains 5 items
      endpoint = `/products?page=${page}`;
    } else if (page === undefined && count !== undefined) {
      // This will retrieve n number of items
      endpoint = `/products?count=${count}`;
    } else if (page !== undefined && count !== undefined) {
      // This will navigate to the desired page and retrieve the first n items
      endpoint = `/products?page=${page}&count=${count}`
    }

    return endpoint;
  }

  componentDidMount() {
    // getEndPoints accepts 'page' and 'count': page = the page number you want (default 10 per page), count = the numger of items you want to retrieve.
    let endpoint = this.getEndPoint(this.state.page);

    axios.get(endpoint)
      .then((product) => {
        console.log('Have data back from API, mapping it now...')
        this.setState({productList: product.data})
        console.log(product.data)
      })
      .catch((err) => console.log(`Error in hooks /product get request: ${err}`))
  }


  render () {
    return (
      <div className="carousel">
        {this.state.productList.map((item) =>
          <Card item={item} key={item.id} />
        )}
      </div>
    )
  }
}

export default Carousel = Carousel;
import React, { Component } from "react";
import ProductList from "./ProductList";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      products: []
    };
  }

  async componentDidMount() {
    let response = await fetch("http://localhost:1338/products");
    if (!response.ok) {
      return;
    }

    let products = await response.json();
    this.setState({ loading: false, products: products });
  }


  render() {
    if (!this.state.loading) {
      return (
        <div>
          <ProductList />
        </div>
      );
    }

    return <h2 className="ProductList-title">Waiting for API...</h2>;
  }
}

export default Home;

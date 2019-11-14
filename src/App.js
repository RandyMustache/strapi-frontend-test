import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";
import Product from './components/Product';
import ProductList from './components/ProductList'

function App() {
  return (
      <div className="App">
        <Header />
        <main className="App-content">
          <Switch>
            <Route path="/" exact component={ProductList} />
            <Route path="/product/:id" component={Product} />
          </Switch>
        </main>
      </div >
  );
}

const Header = () => {
  return (
    <header className="App-header">
      <Link to="/"><h1>🦐 Exotic Fish Supplies</h1></Link>
      <div className="right">
        <button className="snipcart-checkout snipcart-summary">
          Checkout (<span className="snipcart-total-items"></span>)
      </button>
      </div>
    </header>
  );
}

export default App;

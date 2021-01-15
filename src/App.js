import "./App.css";
import { Navbar, Product, ProductDetails, Cart } from "./Component/index";
import { Route, Switch } from "react-router-dom";
import { DataProvider } from "./Component/Context/DataProvider";
function App() {
  return (
    <div className="app">
      <DataProvider>
        <Navbar />
        <Switch>
          <Route path="/products" exact>
            <Product />
          </Route>
          <Route path="/products/:id">
            <ProductDetails />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </DataProvider>
    </div>
  );
}

export default App;

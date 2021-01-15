import React, { useContext } from "react";
import ProductCard from "./ProductCard";
import { DataContext } from "../../Component/Context/DataProvider";
import "./Product.css";
function Product() {
  const [products, setProducts] = useContext(DataContext).products;
  
  return (
    <div className={`product_container`}>
      {products.map((product) => (
        <ProductCard product={product} key={product._id} />
      ))}
    </div>
  );
}

export default Product;

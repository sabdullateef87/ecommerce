import React, { useContext } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { DataContext } from "../../Component/Context/DataProvider";
import "./Product.css";

function ProductCard({ product }) {
  const { path, url } = useRouteMatch();
  const [cart, setCart] = useContext(DataContext).cart;
  const addToCart = useContext(DataContext).addToCart;
  return (
    <div className={`card`}>
      <div className={`image_container`}>
        <Link className={`links`} to={`${url}/${product._id}`}>
          <img src={product.images[0]} alt="shoe" />
        </Link>
      </div>
      <div>
        <Link className={`links`} to={`${url}/${product._id}`}>
          <h3>{product.title}</h3>
        </Link>

        <p>{product.description}</p>
        <p className={`sizes`}>
          {product.sizes.map((size, index) => (
            <span className={`size`} key={index}>
              {size}
            </span>
          ))}
        </p>
        <h4>${product.price}</h4>
        <button onClick={() => addToCart(product._id)}>Add To Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;

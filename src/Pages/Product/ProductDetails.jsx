import React, { useContext, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { DataContext } from "../../Component/Context/DataProvider";
import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();
  const [products] = useContext(DataContext).products;
  const addToCart = useContext(DataContext).addToCart;
  const [img, setImg] = useState(0);
  const details = products.filter((product, index) => product._id === id);

  return (
    <>
      {details.map((item, index) => (
        <div key={index} className={`container`}>
          <div
            className={`image_container`}
            style={{ backgroundImage: `url(${item.images[img]})` }}
          ></div>

          <div className={`item_details`}>
            <h1>{item.title}</h1>
            <h4>${item.price}</h4>
            <div className={`colors`}>
              {item.colors.map((color, index) => (
                <button
                  key={index}
                  style={{ backgroundColor: `${color}` }}
                ></button>
              ))}
            </div>

            <div className={`sizes`}>
              {item.sizes.map((size, index) => (
                <button key={index}>{size}</button>
              ))}
            </div>
            <p>{item.description}</p>
            <p>{item.content}</p>

            <div className={`thumbnail`}>
              {item.images.map((image, index) => (
                <img
                  src={image}
                  alt=""
                  key={index}
                  onClick={() => setImg(index)}
                />
              ))}
            </div>

            <div className={`add_to_cart`}>
              <Link to="/cart">
                <button onClick={() => addToCart(item._id)}>ADD TO CART</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
export default ProductDetails;

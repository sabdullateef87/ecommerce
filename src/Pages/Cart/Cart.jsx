import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "../../Component/Context/DataProvider";
import "./Cart.css";

function Cart() {
  const [cart, setCart] = useContext(DataContext).cart;
  const [total, setTotal] = useState(0);

  const getTotal = () => {
    let summ = 0;
    for (let i = 0; i < cart.length; i++) {
      summ += cart[i].price * cart[i].count;
    }
    setTotal(summ);
  };
  useEffect(() => {
    getTotal();
  }, [cart, getTotal]);

  const increase = (id) => {
    cart.forEach((element) => {
      if (element._id === id) {
        element.count += 1;
      }
    });
    setCart([...cart]);
  };
  const decrease = (id) => {
    cart.forEach((element) => {
      if (element._id === id) {
        if (element.count <= 1) {
          element.count = 1;
        } else {
          element.count -= 1;
        }
      }
    });
    setCart([...cart]);
  };

  const remove = (id) => {
    const filteredCart = cart.filter((item) => item._id !== id);
    console.log(filteredCart);

    setCart(filteredCart);
  };

  return (
    <>
      {cart.map((item, index) => (
        <div key={index} className={`container`}>
          <div
            className={`image_container`}
            style={{ backgroundImage: `url(${item.images[0]})` }}
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
            <div className={`change_button`}>
              <button onClick={() => decrease(item._id)}> - </button>
              <span>{item.count}</span>
              <button onClick={() => increase(item._id)}> + </button>
              <h4>${item.count * item.price}</h4>
            </div>
          </div>

          <div className={`remove_btn`}>
            <button onClick={() => remove(item._id)}>
              <i>X</i>
            </button>
          </div>
        </div>
      ))}

      <div className={`item_total`}>
        <button>CHECKOUT</button>
        <p>
          Total : &nbsp;<span>${total}</span>
        </p>
      </div>
    </>
  );
}
export default Cart;

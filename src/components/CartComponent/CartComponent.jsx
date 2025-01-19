import React from "react";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import {useDispatch, useSelector} from "react-redux"

import "./CartComponent.scss";
import { removeItem, resetCart } from "../../redux/store";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { makeRequest } from "../../makeRequest";

const CartComponent = () => {
  const products = useSelector(state=>state.cart.products)
  const totalUp = ()=>{
    let total = 0;
    products.forEach(item=>(
      total += item.quantity * item.price));
    return total.toFixed(2)
    };
  const dispatch = useDispatch()

  const stripePromise = loadStripe('pk_test_51QiHgNAQivp40UlaDF59HIZKpOMCbzVXi53Mfm8XkT3HTgk72OuJ5lDyIeZkuLMqibKvwXrCWwUajbXtRf3uyNcH00DDUmB5j2')

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;

      const res = await makeRequest.post("/orders", {
        products,
      })

      await stripe.redirectToCheckout({
        sessionId:res.data.stripeSession.id,
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      {products?.map((item) => (
        <div className="item" key={item.id}>
          <img src={process.env.REACT_APP_UPLOAD_URL + item.img.url} alt={item.title} />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">Price: {item.quantity} x ${item.price}</div>
          </div>
          <DeleteOutlinedIcon className="delete" onClick={()=>dispatch(removeItem(item.id))}/>
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>${totalUp()}</span>
      </div>
      <button onClick={handlePayment}>PROCEED TO CHECKOUT</button>
      <span className="reset" onClick={()=>dispatch(resetCart())}>Reset Cart</span>
    </div>
  );
};

export default CartComponent;

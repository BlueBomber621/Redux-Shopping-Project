import React, { useState } from "react";

import "./Product.scss";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/AccountBalance";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/store";

const Product = () => {
  const id = useParams().id;
  const [selectImg, setSelectImg] = useState("img");
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch()
  const { data, loading, error } = useFetch(
    `/products/${id}?populate=*`
  )

  return (
    <div className="product">
      {loading ? "loading" : (<>
      <div className="left">
        <div className="images">
          <img src={process.env.REACT_APP_UPLOAD_URL + data?.img?.url} alt="img" onClick={(e) => setSelectImg("img")} />
          <img src={process.env.REACT_APP_UPLOAD_URL + data?.img2?.url} alt="img" onClick={(e) => setSelectImg("img2")} />
        </div>
        <div className="mainImg">
          <img src={process.env.REACT_APP_UPLOAD_URL + data[selectImg]?.url} alt="img" />
        </div>
      </div>
      <div className="right">
        <h1>{data?.title}</h1>
        <span className="price">${data?.price}</span>
        <p>
          {data?.desc}
        </p>
        <div className="quantity">
          <button
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <div className="add" onClick={() => dispatch(addToCart({
          id:data.id,
          title:data.title,
          desc:data.desc,
          price:data.price,
          img:data.img,
          quantity,
        }))}>
          <AddShoppingCartIcon /> ADD TO CART
        </div>
        <div className="links">
          <div className="item">
            <FavoriteBorderIcon /> ADD TO WISHLIST
          </div>
          <div className="item">
            <BalanceIcon /> ADD TO COMPARE
          </div>
        </div>
        <div className="info">
          <span>Vendor: Polo</span>
          <span>Product Type: {(data?.type)}</span>
          <span>Tag: Item</span>
        </div>
        <hr />
        <div className="info">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
      </>)}
    </div>
  );
};

export default Product;

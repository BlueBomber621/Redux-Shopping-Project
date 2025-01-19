import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import List from "../../components/List/List";

import "./Products.scss";

const Products = () => {
  const categoryId = parseInt(useParams().id) + 1;
  const [maxPrice, setMaxPrice] = useState(400);
  const [sort, setSort] = useState("asc");
  const [selectedSubCategories, setSelectedSubCategories] = useState([]);

  const { data, loading, error } = useFetch(
    `/sub-categories?populate=*&filters[categories][id][$eq]=${categoryId}`
  );

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCategories(
      isChecked
        ? [...selectedSubCategories, value]
        : selectedSubCategories.filter((item) => item !== value)
    );
  };

  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          {data?.map((item) => (
            <div className="inputItem" key={item.id}>
              <input
                type="checkbox"
                id={item.id}
                value={item.id}
                onChange={handleChange}
              />
              <label htmlFor={item.id}>{item.title}</label>
            </div>
          ))}
        </div>
        <div className="filterItem">
          <h2>Filter By Price</h2>
          <div className="inputItem">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={400}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort By</h2>
          <div className="inputItem">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={(e) => setSort("asc")}
            />
            <label htmlFor="asc">Price: Lowest First</label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              id="desc"
              value="desc"
              name="price"
              onChange={(e) => setSort("desc")}
            />
            <label htmlFor="desc">Price: Highest First</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          className="categoryImg"
          src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="img"
        />
        <List
          categoryId={categoryId}
          maxPrice={maxPrice}
          sort={sort}
          subCategories={selectedSubCategories}
        />
      </div>
    </div>
  );
};

export default Products;

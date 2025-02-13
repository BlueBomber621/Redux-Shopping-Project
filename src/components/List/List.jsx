import React from "react";
import useFetch from "../../hooks/useFetch";
import Card from "../Card/Card";

import "./List.scss";

const List = ({ categoryId, maxPrice, sort, subCategories }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&filters[categories][id][$eq]=${categoryId}${subCategories?.map(
      (item) => `&filters[sub_categories][id][$eq]=${item}`
    )}&filters[price][$lte]=${maxPrice}&sort=price:${sort}`
  );

  console.log(data)

  return (
    <div className="list">
      {loading
        ? "Loading"
        : data?.map((item) => <Card item={item} key={item.id} />)}
    </div>
  );
};

export default List;

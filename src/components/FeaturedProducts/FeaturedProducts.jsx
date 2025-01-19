import useFetch from "../../hooks/useFetch";
import Card from "../Card/Card";

import "./FeaturedProducts.scss";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&filters[type][$eq]=${type}`
  );

  return (
    <div className="featured-products" type="">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
          odio dolores? Architecto distinctio, blanditiis porro sequi quibusdam
          eius eum temporibus quas optio iste veniam deserunt veritatis odit
          autem incidunt omnis.
        </p>
      </div>
      <div className="bottom">
        {error
          ? "Something went wrong!"
          : loading
          ? "Loading"
          : data.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;

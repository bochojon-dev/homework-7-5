import React, { useEffect, useState } from "react";
import axios from "../../api/index";
import { Link, useParams } from "react-router-dom";

const SingleRoute = () => {
  const { id } = useParams();

  console.log(id);
  const [product, setProduct] = useState();
  useEffect(() => {
    axios
      .get(`/product/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  console.log(product);
  return (
    <div className="single">
      <div className="container">
        <div
          style={{
            paddingTop: 120,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 20,
          }}
          className="single_contents"
        >
          <img src={product?.images[0]} alt="product" />
          <div className="more_images"></div>
          <h3>{product?.title}</h3>
          <p>{product?.description} description</p>
          <h4>
            Price: <span>cost</span>
          </h4>
          <Link to={"/"}>
            <button>go back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleRoute;

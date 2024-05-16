// import React, { useEffect, useState } from "react";
// import "../products/Products.css";
// import card1 from "../../assets/card1.png";
// import card2 from "../../assets/card2.png";
// import card3 from "../../assets/card3.png";
// import card4 from "../../assets/card4.png";
// import { Link } from "react-router-dom";
// import axios from "../../api";

// const Products = () => {
//   const [product, setProduct] = useState([]);
//   useEffect(() => {
//     axios
//       .get("/product")
//       .then((res) => setProduct(res.data.products))
//       .catch((err) => console.log(err));
//   }, []);
//   const products = product?.map((e) => (
//     <div key={e.id} className="card">
//       <div className="image">
//         <button>sale !</button>
//         <Link to={`/product/${e.id}`}>
//           <img src={e.images[0]} alt="product" />
//         </Link>
//       </div>
//       <p>{e.title}</p>
//       <p>LKR 799</p>
//     </div>
//   ));
//   return (
//     <div className="products">
//       <div className="container">
//         <div className="product_contents">
//           {/* <div className="card">
//             <div className="image">
//               <button>sale !</button>
//               <Link to={`/product/${e.id}`}>
//                 <img src={card1} alt="product" />
//               </Link>
//             </div>
//             <p>iPhone 13 Pro - Transparent</p>
//             <p>LKR 499</p>
//           </div>
//           <div className="card">
//             <div className="image">
//               <button>sale !</button>
//               <Link to={`/product/${e.id}`}>
//                 <img src={card2} alt="product" />
//               </Link>
//             </div>
//             <p>Samsung S23+ - Transparent</p>
//             <p>LKR 799</p>
//           </div>
//           <div className="card">
//             <div className="image">
//               <button>sale !</button>
//               <Link to={`/product/${e.id}`}>
//                 <img src={card3} alt="product" />
//               </Link>
//             </div>
//             <p>iPhone 14 - Transparent with magsafe</p>
//             <p>LKR 799</p>
//           </div>
//           <div className="card">
//             <div className="image">
//               <button>sale !</button>
//               <Link to={`/product/${e.id}`}>
//                 <img src={card4} alt="product" />
//               </Link>
//             </div>
//             <p>Pixel 7 Pro - Transparent Wireless</p>
//             <p>LKR 599</p>
//           </div> */}
//           {products}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Products;

import React, { useEffect, useState } from "react";
import "../products/Products.css";
import { Link } from "react-router-dom";
import axios from "../../api";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("/product")
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="products">
      <div className="container">
        <div className="product_contents">
          {products.map((product) => (
            <div key={product.id} className="card">
              <div className="image">
                <button>sale !</button>
                <Link to={`/single/${product.id}`}>
                  <img src={product.images[0]} alt="product" />
                </Link>
              </div>
              <p>{product.title}</p>
              <p>LKR 799</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;

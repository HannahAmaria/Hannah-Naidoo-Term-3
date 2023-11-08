import Banner from "./Banner";
import FeatureProduct from "./FeatureProduct";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function Landing() {
  const [products, setProducts] = useState([]); 

  useEffect(() => {
    axios.get("http://localhost:5000/api/watchbands") 
      .then((response) => {
        setProducts(response.data);
        console.log(response.data)
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <>
    
      <Banner />
      <div className="d-flex flex-column bg-white py-4">
        <p className="text-center px-5">
          Shop unique watch straps and accessories
        </p>
        <div className="d-flex justify-content-center">
          <Link to="/addwatchform" className="btn btn-primary" replace>
            Add your own watch
          </Link>
        </div>
      </div>
      <h2 className="text-muted text-center mt-4 mb-3">New and Discounted Products</h2>
      <div className="container pb-5 px-lg-5">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 px-md-5">
          {products.map((product) => (
            <FeatureProduct key={product.id} product={product} />
          ))}
        </div>
      </div>
      <div className="d-flex flex-column bg-white py-4">
        <h5 className="text-center mb-3">Follow us on</h5>
        <div className="d-flex justify-content-center">
          <a href="!#" className="me-3">
            <FontAwesomeIcon icon={["fab", "facebook"]} size="2x" />
          </a>
          <a href="!#">
            <FontAwesomeIcon icon={["fab", "instagram"]} size="2x" />
          </a>
          <a href="!#" className="ms-3">
            <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Landing;

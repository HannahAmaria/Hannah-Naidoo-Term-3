import React from "react";
import { Link } from "react-router-dom";

function FeatureProduct({ product }) {
  return (
    <div className="col">
      <div className="card shadow-sm">
        <img
          className="card-img-top bg-dark cover"
          height="240"
          alt=""
          src={product.image} 
        />
        <div className="card-body">
          <h5 className="card-title text-center">{product.name}</h5>
          <p className="card-text text-center text-muted">{product.price}</p>
          <div className="d-grid gap-2">
            <Link to={`/products/${product._id}`} className="btn btn-outline-dark">
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureProduct;

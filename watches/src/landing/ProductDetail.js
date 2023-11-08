import Ratings from "react-ratings-declarative";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const iconPath =
  "M18.571 7.221c0 0.201-0.145 0.391-0.29 0.536l-4.051 3.951 0.96 5.58c0.011 0.078 0.011 0.145 0.011 0.223 0 0.29-0.134 0.558-0.458 0.558-0.156 0-0.313-0.056-0.446-0.134l-5.011-2.634-5.011 2.634c-0.145 0.078-0.29 0.134-0.446 0.134-0.324 0-0.469-0.268-0.469-0.558 0-0.078 0.011-0.145 0.022-0.223l0.96-5.58-4.063-3.951c-0.134-0.145-0.279-0.335-0.279-0.536 0-0.335 0.346-0.469 0.625-0.513l5.603-0.815 2.511-5.078c0.1-0.212 0.29-0.458 0.547-0.458s0.446 0.246 0.547 0.458l2.511 5.078 5.603 0.815c0.268 0.045 0.625 0.179 0.625 0.513z";

function ProductDetail() {
  const [productDetails, setDetails] = useState({});
  function changeRating(newRating) {}
  const { id } = useParams();

  useEffect(() =>{
    axios.get(`http://localhost:5000/api/readwatch/${id}`)
    .then((response) => {
      setDetails(response.data);
      console.log(response.data)
    })
    .catch((error) => {
      console.error('Error fetching product details:', error);
      
    });


  },[])

  const addToCart = () => {

    const cartItems = JSON.parse(sessionStorage.getItem("cartItems")) || [];

    const newItem = {
      code: productDetails.code,
      name: productDetails.name,
      price: productDetails.price,
    };

    cartItems.push(newItem);

    sessionStorage.setItem("cartItems", JSON.stringify(cartItems));

    alert("Item added to cart!");
  };


  return (
    <div className="container mt-5 py-4 px-xl-5">
      <div className="row mb-4">
        <div className="d-none d-lg-block col-lg-1">
          <div className="image-vertical-scroller">
            <div className="d-flex flex-column">
              {Array.from({ length: 10 }, (_, i) => {
                let selected = i !== 1 ? "opacity-6" : "";
                return (
                  <a key={i} href="!#">
                  
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="row">
            <div className="col-12 mb-4">
              <img
                className="border rounded ratio ratio-1x1"
                alt=""
                src={productDetails.image}
              />
            </div>
          </div>
        </div>

        <div className="col-lg-5">
          <div className="d-flex flex-column h-100">
            <h2 className="mb-1">{productDetails.name}</h2>
            <h4 className="text-muted mb-4">R {productDetails.price}</h4>

            <div className="row g-3 mb-4">
              <div className="col">
                <button onClick={addToCart} className="btn btn-outline-dark py-2 w-100">
                  Add to cart
                </button>
              </div>
            
            </div>

            <h4 className="mb-0">Details</h4>
            <hr />
            <dl className="row">
              <dt className="col-sm-4">Code</dt>
              <dd className="col-sm-8 mb-3">{productDetails.code}</dd>

              <dt className="col-sm-4">Category</dt>
              <dd className="col-sm-8 mb-3">{productDetails.category}</dd>

              <dt className="col-sm-4">Brand</dt>
              <dd className="col-sm-8 mb-3">{productDetails.brand}</dd>

              <dt className="col-sm-4">Manufacturer</dt>
              <dd className="col-sm-8 mb-3">{productDetails.manufacturer}</dd>

              <dt className="col-sm-4">Color</dt>
              <dd className="col-sm-8 mb-3">{productDetails.color}</dd>

              <dt className="col-sm-4">Status</dt>
              <dd className="col-sm-8 mb-3">{productDetails.stock > 0 ? 'In Stock' : 'No Stock'}</dd>

              <dt className="col-sm-4">Rating</dt>
              <dd className="col-sm-8 mb-3">
                <Ratings
                  rating={productDetails.rating}
                  widgetRatedColors="rgb(253, 204, 13)"
                  changeRating={changeRating}
                  widgetSpacings="2px"
                >
                  {Array.from({ length: 5 }, (_, i) => {
                    return (
                      <Ratings.Widget
                        key={i}
                        widgetDimension="20px"
                        svgIconViewBox="0 0 19 20"
                        svgIconPath={iconPath}
                        widgetHoverColor="rgb(253, 204, 13)"
                      />
                    );
                  })}
                </Ratings>
              </dd>
            </dl>

            <h4 className="mb-0">Description</h4>
            <hr />
            <p className="lead flex-shrink-0">
              <small>
              The {productDetails.name} strap is a sporty and stylish accessory designed specifically for use with Apple Watch. It features a durable and lightweight material, often made of a combination of soft fluoroelastomer and unique perforated design for enhanced breathability during physical activities. The strap is known for its comfortable fit and sweat resistance, making it ideal for sports and workouts. Additionally, it is equipped with the Apple Watch's proprietary attachment mechanism, ensuring a secure and easy installation. The Apple Watch strap is available in various colors and designs, reflecting the energetic and dynamic branding associated with Apple products.
              </small>
            </p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12 mb-4">
          <hr />
      
         
          
          </div>
        </div>
      </div>
  
  );
}

export default ProductDetail;

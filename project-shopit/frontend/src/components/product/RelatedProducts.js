import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Product from "./Product";

const RelatedProducts = ({ category }) => {
  const { products } = useSelector((state) => state.products);
  const i = 0;
  return (
    <>
      {category ? (
        <>
          <section className="related-product pb-100">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h3 className="eg-title1 eg-title2 mb-50">Related Product</h3>
                </div>
              </div>
              <div className="row">
                {products.map(function (product) {
                  if (product.category === category) {
                    return (
                      <>
                        <Product key={product._id} product={product} col={3} />
                      </>
                    );
                  }
                })}
              </div>
            </div>
          </section>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default RelatedProducts;

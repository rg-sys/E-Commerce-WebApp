import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../../App1.css";
const CategorySection = () => {
  const { category } = useSelector((state) => state.category);
  return (
    <div class="category-area-start category-style-one mt-100 position-relative">
      <div style={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}>
        <div class="row">
          <div class="col-lg-12">
            <div class="section-head-style-one">
              <h2>What do you looking for ?</h2>
              <p>We have variety of catagories available</p>
            </div>
          </div>
        </div>
        <div class="row">
          {category.map((category, idx) => {
            return (
              <div
                class="col-lg-2 col-md-3 col-sm-6 category-box-alpha shadow-sm"
                style={{ borderRadius: "20px" }}
              >
                <div class="category-icon">
                  <Link to={`/search/${category.name}`}>
                    <img src={category.images[0].url} />
                  </Link>
                </div>
                <h5 class="category-title">
                  <Link to={`/search/${category.name}`}>{category.name}</Link>
                </h5>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategorySection;

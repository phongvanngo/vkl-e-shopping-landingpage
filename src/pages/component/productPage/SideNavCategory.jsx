import React from "react";
import { Link } from "react-router-dom";

export default function SideNavCategory({ listCategories, currentCategory }) {
  listCategories = [{ id: null, name: "Tất cả sản phẩm" }, ...listCategories];
  return (
    <div>
      <div className="side-nav-categories">
        <div className="block-title"> Danh mục sản phẩm </div>

        {/* <!--block-title--> */}

        {/* <!-- BEGIN BOX-CATEGORY --> */}
        <div className="box-content box-category">
          <ul>
            {listCategories.map((category, index) => (
              <li key={index}>
                {" "}
                <Link
                  style={{ textDecoration: "none" }}
                  className={
                    category.id === currentCategory?.id ? "active" : ""
                  }
                  to={`/product/${category.id}`}
                >
                  {category.name}
                </Link>{" "}
                <span className="subDropdown minus"></span>
              </li>
            ))}

            {/* <!--level 0--> */}
          </ul>
        </div>

        {/* <!--box-content box-category--> */}
      </div>
    </div>
  );
}

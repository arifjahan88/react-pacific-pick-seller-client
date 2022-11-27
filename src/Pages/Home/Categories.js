import React from "react";
import { useQuery } from "@tanstack/react-query";
import { BsArrowRightSquareFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Categories = () => {
  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: () => fetch("http://localhost:5000/bikescategoris").then((res) => res.json()),
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:m-5 mt-4">
      {categories.map((category) => (
        <div key={category._id}>
          <div className="card w-96 bg-base-100 shadow-xl p-4">
            <figure>
              <img className="w-52" src={category.img} alt="Shoes" />
            </figure>
            <div className=" flex m-5 justify-between">
              <h2 className="card-title">{category.name}</h2>

              <div className="card-actions justify-end">
                <Link to={`/category/${category._id}`} className="btn btn-outline btn-sm">
                  Buy Now{" "}
                  <span className="ml-2">
                    <BsArrowRightSquareFill></BsArrowRightSquareFill>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;

import React from "react";
import { BsArrowLeftSquare } from "react-icons/bs";
import { Link } from "react-router-dom";

const Route404 = () => {
  return (
    <div className="text-center">
      <img
        className="w-1/2 mx-auto"
        src="https://cdn.dribbble.com/users/1022481/screenshots/3018253/404-snow.gif"
        alt=""
      />
      <Link to={"/"} className="btn btn-outline btn-sm">
        <span className="mr-1">
          <BsArrowLeftSquare></BsArrowLeftSquare>
        </span>
        Go to Home
      </Link>
    </div>
  );
};

export default Route404;

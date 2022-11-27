import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";
import CategoryModal from "./CategoryModal";

const Category = () => {
  const { user } = useContext(AuthContext);
  const [usecategory, setcategory] = useState(null);
  const { data: category = [] } = useQuery({
    queryKey: ["category"],
    queryFn: () => fetch("https://react-pacific-pick-seller-server.vercel.app/bikeslist").then((res) => res.json()),
  });
  return (
    <div className="lg:mx-32 mt-10">
      <h2 className="text-center text-2xl font-bold">Available Products</h2>
      {category.map((c) => (
        <div key={c._id} className="card card-side bg-base-100 shadow-xl my-3 p-5">
          <figure>
            <img className="w-96 rounded-lg" src={c.img} alt="Movie" />
          </figure>
          <div className="card-body">
            <h2 className="text-3xl font-semibold">{c.name}</h2>
            <h3 className="font-semibold">Location : {c.location}</h3>
            <div>
              <p>
                Original Price : <span className="font-bold">${c.originalprice}</span>
              </p>
              <p>
                Resail Price : <span className="font-bold">${c.resaleprice}</span>
              </p>
            </div>
            <div>
              <p>
                Using year : <span className="font-bold">${c.use}</span>
              </p>
              <p>
                Total View : <span className="font-bold">${c.total_view}</span>
              </p>
              <p>Published Date : {c.published_date}</p>
              <p>Published By : {user?.displayName}</p>
            </div>
            <div className="card-actions justify-end">
              <label onClick={() => setcategory(c)} htmlFor="booking-modal" className="btn btn-outline btn-sm">
                Book Now
              </label>
            </div>
          </div>
        </div>
      ))}
      <CategoryModal category={usecategory} setcategory={setcategory}></CategoryModal>
    </div>
  );
};

export default Category;

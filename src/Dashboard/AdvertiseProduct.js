import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../Contexts/AuthProvider";

const AdvertiseProduct = () => {
  const { user } = useContext(AuthContext);
  const { data: advertisedata = [], refetch } = useQuery({
    queryKey: ["advertisedata", user?.email],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/advertiseproduct?email=${user?.email}`);
      const data = await res.json();
      return data;
    },
  });
  const handlesellclick = (booking) => {
    fetch(`http://localhost:5000/advertiseproduct/${booking._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success(`${booking.itemname} Deleted SuccessFully`);
          refetch();
        }
      });
  };
  return (
    <div>
      <h1 className="text-3xl text-semibold mb-5">My Products</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>S.L</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {advertisedata.map((booking, index) => (
              <tr key={booking._id} className="hover cursor-default">
                <th>{index + 1}</th>
                <td>{booking.itemname}</td>
                <td>{booking.price}</td>
                <td>
                  <button onClick={() => handlesellclick(booking)} className="btn btn-outline btn-error btn-xs mr-2">
                    SELL
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdvertiseProduct;

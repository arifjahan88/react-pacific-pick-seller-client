import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../Contexts/AuthProvider";

const Myproducts = () => {
  const [advertisedata, setadvertsedata] = useState("");
  const { user } = useContext(AuthContext);
  const { data: bookings = [], refetch } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(`https://react-pacific-pick-seller-server.vercel.app/bookings?email=${user?.email}`);
      const data = await res.json();
      return data;
    },
  });

  const handlAdvertise = (id) => {
    fetch(`https://react-pacific-pick-seller-server.vercel.app/bookings/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setadvertsedata(data);
        refetch();
      });
    const productsdata = {
      itemname: advertisedata.itemname,
      Image: advertisedata.image,
      price: advertisedata.price,
      email: advertisedata.email,
    };

    fetch("https://react-pacific-pick-seller-server.vercel.app/advertiseproduct", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(productsdata),
    })
      .then((res) => res.json())
      .then((advertisement) => {
        if (advertisement.acknowledged) {
          refetch();
          toast.success("Advertise Added");
        } else {
          toast.error(advertisement.message);
        }
      });
  };

  const handledeleteclick = (booking) => {
    fetch(`https://react-pacific-pick-seller-server.vercel.app/${booking._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        toast.success(`${booking.itemname} is deleted Successfully`);
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
              <th>User Name</th>
              <th>Item Name</th>
              <th>Date</th>
              <th>Phone</th>
              <th>Price</th>
              <th>Location</th>
              <th>Purchase Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {bookings.map((booking, index) => (
              <tr key={booking._id} className="hover cursor-default">
                <th>{index + 1}</th>
                <td>{booking.name}</td>
                <td>{booking.itemname}</td>
                <td>{booking.puchaseDate}</td>
                <td>{booking.phone}</td>
                <td>{booking.price}</td>
                <td>{booking.location}</td>
                <td>{booking.purchase}</td>
                <td>
                  <button
                    onClick={() => handlAdvertise(booking._id)}
                    className="btn btn-outline btn-success btn-xs mr-2"
                  >
                    Advertise
                  </button>
                  <button onClick={() => handledeleteclick(booking)} className="btn btn-outline btn-error btn-xs">
                    Delete
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

export default Myproducts;

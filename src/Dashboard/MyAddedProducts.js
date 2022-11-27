import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../Contexts/AuthProvider";

const MyAddedProducts = () => {
  const { user } = useContext(AuthContext);
  const { data: addedproducts = [], refetch } = useQuery({
    queryKey: ["addedproducts"],
    queryFn: async () => {
      const res = await fetch(`https://react-pacific-pick-seller-server.vercel.app/addedproducts?email=${user?.email}`);
      const data = await res.json();
      return data;
    },
  });

  const handleDelete = (booking) => {
    console.log(booking._id);
    fetch(`http://localhost:5000/addedproducts/${booking._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        toast.success(`${booking.itemname} Is Deleted Succesfully`);
      });
  };

  return (
    <div>
      <h2 className="text-3xl font-semibold">Added Products {addedproducts.length}</h2>
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
            {addedproducts.map((booking, index) => (
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
                  <button onClick={() => handleDelete(booking)} className="btn btn-outline btn-error btn-xs">
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

export default MyAddedProducts;

import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Contexts/AuthProvider";

const CategoryModal = ({ category, setcategory }) => {
  const { user } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const itemname = form.itemname.value;
    const price = form.price.value;
    const number = form.phone.value;
    const location = form.location.value;
    console.log(name, email, itemname, price, number, location);

    const booking = {
      name,
      email,
      itemname,
      price,
      phone: number,
      location,
      condition: category.rating.badge,
      purchase: category.use,
      puchaseDate: category.published_date,
    };
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Booking Confirmed");
          form.reset();
        } else {
          toast.error(data.message);
        }
      });
  };
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">
            ✕
          </label>
          <h3 className="text-lg font-bold">{category?.name}</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">User Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder=" Name"
                className="input input-bordered w-full"
                defaultValue={user?.displayName}
                disabled
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered w-full"
                defaultValue={user?.email}
                disabled
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Item Name</span>
              </label>
              <input
                type="text"
                name="itemname"
                placeholder="Item Name"
                className="input input-bordered w-full"
                defaultValue={category?.name}
                disabled
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Item Price</span>
              </label>
              <input
                type="text"
                name="price"
                placeholder="Item Price"
                className="input input-bordered w-full"
                defaultValue={category?.resaleprice}
                disabled
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input name="phone" type="text" placeholder="Phone Number" className="input input-bordered w-full" />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Meeting Location</span>
              </label>
              <input
                name="location"
                type="text"
                placeholder="Meeting Location"
                className="input input-bordered w-full"
              />
            </div>
            <button className="btn btn-outline btn-sm mt-3">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CategoryModal;

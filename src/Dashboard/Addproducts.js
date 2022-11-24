import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AuthContext } from "../Contexts/AuthProvider";

const Addproducts = () => {
  const { user } = useContext(AuthContext);
  const current = new Date();
  const time = `${current.getDate()}-${
    current.getMonth() + 1
  }-${current.getFullYear()} ${current.getHours()}:${current.getMinutes()}:${current.getSeconds()}`;

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const handleProducts = (data) => {
    console.log(data);
    const productsdata = {
      name: data.name,
      email: data.email,
      puchaseDate: time,
      itemname: data.item,
      price: data.price,
      condition: data.condition,
      purchase: data.purchase,
      location: data.location,
      phone: data.phone,
    };

    fetch("http://localhost:5000/addedproducts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(productsdata),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Products Added");
        } else {
          toast.error(data.message);
        }
      });
  };
  return (
    <div className="w-1/3">
      <h2 className="text-3xl font-semibold">Add Products</h2>
      <form onSubmit={handleSubmit(handleProducts)}>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Name</span>
          </label>

          <input
            type="text"
            className="input input-bordered w-full"
            {...register("name")}
            placeholder="You Name"
            defaultValue={user?.displayName}
          />
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Item Name</span>
          </label>

          <input
            type="text"
            className="input input-bordered w-full"
            {...register("item", { required: "Item Name is required" })}
            placeholder="Item Name"
          />
          {errors.item && <p className="text-red-600 text-xs mt-1">{errors.item?.message}</p>}
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Email</span>
          </label>

          <input
            type="email"
            className="input input-bordered w-full"
            {...register("email")}
            placeholder="Email"
            defaultValue={user?.email}
          />
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Price</span>
          </label>

          <input
            type="text"
            className="input input-bordered w-full"
            {...register("price", { required: "Price is required" })}
            placeholder="Price"
          />
          {errors.price && <p className="text-red-600 text-xs mt-1">{errors.price?.message}</p>}
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Phone</span>
          </label>

          <input
            type="number"
            className="input input-bordered w-full"
            {...register("phone", { required: "Phone Number is required" })}
            placeholder="Phone"
          />
          {errors.phone && <p className="text-red-600 text-xs mt-1">{errors.phone?.message}</p>}
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Location</span>
          </label>

          <input
            type="text"
            className="input input-bordered w-full"
            {...register("location", { required: "Location is required" })}
            placeholder="Location"
          />
          {errors.location && <p className="text-red-600 text-xs mt-1">{errors.location?.message}</p>}
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Purchase Year</span>
          </label>

          <input
            type="text"
            className="input input-bordered w-full"
            {...register("purchase", { required: "Purchase year is required" })}
            placeholder="Purchase"
          />
          {errors.purchase && <p className="text-red-600 text-xs mt-1">{errors.purchase?.message}</p>}
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Condition</span>
          </label>

          <input
            type="text"
            className="input input-bordered w-full"
            {...register("condition", { required: "Condition is required" })}
            placeholder="Condition"
          />
          {errors.condition && <p className="text-red-600 text-xs mt-1">{errors.condition?.message}</p>}
        </div>

        <input className="btn btn-accent w-full text-white mt-4" value="Add Products" type="submit" />
      </form>
    </div>
  );
};

export default Addproducts;

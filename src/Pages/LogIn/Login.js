import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Contexts/AuthProvider";

const Login = () => {
  const { login } = useContext(AuthContext);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const HandleLogin = (data) => {
    console.log(data.email);
    login(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => console.error(err));
  };
  return (
    <div>
      <div className="h-[700px] flex justify-center items-center">
        <div className="w-96 p-5 drop-shadow-xl bg-white rounded-xl">
          <h2 className="text-xl text-center">Login</h2>
          <form onSubmit={handleSubmit(HandleLogin)}>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Email</span>
              </label>

              <input
                type="email"
                className="input input-bordered w-full"
                {...register("email", { required: "Email Address is required" })}
                placeholder="Email"
              />
              {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email?.message}</p>}
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                className="input input-bordered w-full"
                {...register("password", { required: "Password is required" })}
                placeholder="Password"
              />
              {errors.password && <p className="text-red-600 text-xs mt-1">{errors.password?.message}</p>}
              <label className="label">
                <span className="label-text text-xs link">Forget Password?</span>
              </label>
            </div>
            <input className="btn btn-primary w-full text-white" value="submit" type="submit" />
          </form>

          <div>
            <p className="text-center text-sm my-5 font-semibold">Or Sign in With</p>
            <div className="flex justify-center">
              <Link>
                <div className="p-2 bg-slate-100 rounded-full mx-1">
                  <FaFacebookF className="text-blue-900"></FaFacebookF>
                </div>
              </Link>
              <Link>
                <div className="p-2 bg-slate-100 rounded-full mx-1">
                  <FaLinkedinIn className="text-blue-700"></FaLinkedinIn>
                </div>
              </Link>
              <Link>
                <div className="p-2 bg-slate-100 rounded-full mx-1">
                  <FcGoogle></FcGoogle>
                </div>
              </Link>
            </div>
            <p className="text-sm text-center my-3 pt-3">
              New to Doctors Portal?{" "}
              <Link to="/signup" className="text-orange-600 link">
                Create new Account
              </Link>{" "}
            </p>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Login;

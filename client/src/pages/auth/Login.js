import React from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
//css
import "../../styles/AuthStyles.css";
import api from "../../utility/api";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/auth";

const Login = () => {
  const [auth, setAuth] = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();

  // const access_token = localStorage.getItem("access_token");
  // const user = localStorage.getItem("user-details");
  // if (access_token && user) {
  //   return <Navigate to="/" />;
  // }

  const onSubmit = async (data) => {
    const url = `/api/v1/auth/login`;
    api
      .post(url, data)
      .then((res) => {
        const data = res.data;
        if (data.success) {
          setTimeout(() => {
            toast.success(data.message);
          }, 1000);
          localStorage.setItem("access_token", JSON.stringify(data.token));
          localStorage.setItem("user-details", JSON.stringify(data.user));
          setAuth({
            ...auth,
            token: data.token,
            user: data.user,
          });
          navigate(location.state || "/");
        } else {
          toast.error(data.message);
        }
      })
      .catch((err) => {
        console.error(err);
        toast.error("something wents wrong!");
      });
  };

  return (
    <>
      <div className=" login-container">
        <Toaster />
        <div className="background">
          <div className="shape" />
          <div className="shape" />
        </div>
        <div className="text-center pt-5">
          <h3 className="text-white">Login Here</h3>
        </div>
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
          <label className="login-label" htmlFor="username">
            Email<sup className="text-danger">*</sup>
            <small className="float-end text-danger">
              {errors?.email && "Email is required"}
            </small>
          </label>
          <input
            className="login-input"
            type="email"
            placeholder="Email"
            {...register("email", { required: true })}
            id="username"
          />
          <label className="login-label" htmlFor="password">
            Password<sup className="text-danger">*</sup>
            <small className="float-end text-danger">
              {errors?.password && "Password is required"}
            </small>
          </label>
          <input
            className="login-input"
            type="password"
            {...register("password", { required: true })}
            placeholder="Password"
            id="password"
          />
          <Link to='/forgot-password' className="float-end mt-2">
            Forgot password
          </Link>
          <button className="btn btn-success py-1 fs-6 w-100 mt-4" type="submit">
            Log In
          </button>
          <div className="mt-5 d-flex justify-content-center align-items-center">
            <small>Don't have any account - </small>{" "}
            <Link to="/register" className="ms-2 fw-bolder">
              Register{" "}
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;

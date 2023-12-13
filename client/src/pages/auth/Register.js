import React from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
//css
import "../../styles/AuthStyles.css";
import api from "../../utility/api";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";

const Register = () => {
  const [auth, setAuth] = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const url = `/api/v1/auth/register`;
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
          if (data.user.role == 1) {
            navigate("/admin");
          } else {
            navigate("/");
          }
        } else {
          toast.error(data.message);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const access_token = localStorage.getItem("access_token");
  const user = localStorage.getItem("user-details");
  if (access_token && user) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <div className="container-fluid login-container">
        <Toaster />
        <div className="background">
          <div className="shape_reg" />
          <div className="shape_reg" />
        </div>
        <div className="text-center pt-5 row">
          <h3 className="text-white">Register Here</h3>
        </div>
        <form
          className="login-form w-75 h-75"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="row">
            <div className="col-6">
              <label className="login-label" htmlFor="username">
                Name<sup className="text-danger">*</sup>
                <small className="float-end text-danger">
                  {errors?.name && "Name required"}
                </small>
              </label>
              <input
                className="login-input"
                type="text"
                placeholder="Name"
                {...register("name", { required: true })}
                id="username"
              />
            </div>
            <div className="col-6">
              <label className="login-label" htmlFor="username">
                Email<sup className="text-danger">*</sup>
                <small className="float-end text-danger">
                  {errors?.email && "Email required"}
                </small>
              </label>
              <input
                className="login-input"
                type="email"
                placeholder="Email"
                {...register("email", { required: true })}
                id="username"
              />
            </div>
            <div className="col-6">
              <label className="login-label" htmlFor="password">
                Password<sup className="text-danger">*</sup>
                <small className="float-end text-danger">
                  {errors?.password && "Password required"}
                </small>
              </label>
              <input
                className="login-input"
                type="password"
                {...register("password", { required: true })}
                placeholder="Password"
                id="password"
              />
            </div>
            <div className="col-6">
              <label className="login-label" htmlFor="password">
                Phone Number<sup className="text-danger">*</sup>
                <small className="float-end text-danger">
                  {errors?.phone && "Phone Number is required"}
                </small>
              </label>
              <input
                className="login-input"
                type="tel"
                {...register("phone", { required: true })}
                placeholder="Phone Number"
                id="phone"
              />
            </div>
            <div className="col-6">
              <label className="login-label" htmlFor="answer">
                What is you favorite sport?<sup className="text-danger">*</sup>
                <small className="float-end text-danger">
                  {errors?.answer && "Answer is required"}
                </small>
              </label>
              <input
                className="login-input"
                type="text"
                {...register("answer", { required: true })}
                placeholder="Enter sport name"
                id="phone"
              />
            </div>
            <div className="col-6">
              <label className="login-label" htmlFor="password">
                Address<sup className="text-danger">*</sup>
                <small className="float-end text-danger">
                  {errors?.address && "Address is required"}
                </small>
              </label>
              <textarea
                className="login-input"
                {...register("address", { required: true })}
                placeholder="Address"
                id="address"
                rows="2"
              />
            </div>
          </div>

          <button className="btn btn-success w-100 mt-4" type="submit">
            Submit
          </button>
          <div className="mt-4 d-flex justify-content-center align-items-center">
            <small>If already registered - </small>{" "}
            <Link to="/login" className="ms-2 fw-bolder">
              Login{" "}
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;

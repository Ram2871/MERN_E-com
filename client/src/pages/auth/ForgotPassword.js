import React from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
//css
import "../../styles/AuthStyles.css";
import api from "../../utility/api";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const url = `/api/v1/auth/forgot-password`;
    api
      .post(url, data)
      .then((res) => {
        const data = res.data;
        if (data.success) {
          setTimeout(() => {
            toast.success(data.message);
          }, 1000);
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
          <h3 className="text-white">Change Password</h3>
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
          <label className="login-label" htmlFor="username">
            What is you favorite sport?<sup className="text-danger">*</sup>
            <small className="float-end text-danger">
              {errors?.answer && "Answer is required"}
            </small>
          </label>
          <input
            className="login-input"
            type="tel"
            {...register("answer", { required: true })}
            placeholder="Enter sport name"
            id="phone"
          />
          <label className="login-label" htmlFor="password">
            New Password<sup className="text-danger">*</sup>
            <small className="float-end text-danger">
              {errors?.newPassword && "New Password is required"}
            </small>
          </label>
          <input
            className="login-input"
            type="password"
            {...register("newPassword", { required: true })}
            placeholder="Enter New Password"
            id="newPassword"
          />
          <button
            className="btn py-1 btn-success fs-6 w-100 mt-4"
            type="submit"
          >
            Submit
          </button>
          <div className="my-3 d-flex justify-content-center align-items-center">
            <Link to="/Login" className="fab bg-info btn">
              <small>Back to login </small>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default ForgotPassword;

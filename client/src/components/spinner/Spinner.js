import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { BarLoader } from "react-spinners";

const Spinner = ({ path = "/login" }) => {
  const [count, setCount] = useState(3);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevValue) => --prevValue);
    }, 1000);
    if (count === 0)
      navigate(`${path}`, {
        state: location.pathname,
      });
    return () => clearInterval(interval);
  }, [count, navigate, location]);
  return (
    <>
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <h1 className="Text-center">{count}</h1>

        <BarLoader color="#36d7b7" size={150} />
      </div>
    </>
  );
};

export default Spinner;

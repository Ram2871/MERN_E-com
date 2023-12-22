import React, { useEffect, useState } from "react";
import api from "../utility/api";

const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const getCategories = async () => {
    try {
      const { data } = await api.get("/api/v1/category/get-categories");
      setCategories(data?.categories);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);
  return categories;
};

export default useCategories;

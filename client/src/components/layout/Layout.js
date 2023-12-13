import React from "react";
import Header from "./Header";
import Footer from "./Footer";
// import { Navigate } from "react-router-dom";
import { Helmet } from "react-helmet";
// import { useAuth } from "../../../context/auth";

const Layout = ({ children, title, description, keywords, author }) => {
  // const [auth, setAuth] = useAuth();
  // const access_token = localStorage.getItem("access_token");
  // const user = localStorage.getItem("user-details");
  // if (!access_token && !user) {
  //   return <Navigate to="/login" />;
  // }

  return (
    <>
      <Helmet>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <div className="container-fluid">
        <main style={{ minHeight: "80vh", marginTop: "3.8rem" }}>
          {children}
        </main>
      </div>
      <Footer />
    </>
  );
};
Layout.defaultProps = {
  title: "Ecommerce app - shop now",
  description: "mern stack project",
  keywords: "mern,react,node,mongodb",
  author: "Ram",
};
export default Layout;

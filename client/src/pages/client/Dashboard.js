import React from "react";
import { CircleLoader } from "react-spinners";
import Layout from "../../components/layout/Layout";

const Dashboard = () => {
  return (
    <Layout>
      <h1>dashboard</h1>
      <CircleLoader
        color="#00eb49"
        speedMultiplier={1}
      />
    </Layout>
  );
};

export default Dashboard;

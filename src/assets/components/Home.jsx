import React from "react";
import Navbar from "./global/Navbar/Navbar";
import Layout from "./Layout/Layout";
import Card from "./Card/Card";

const Home = () => {
  return (
    <>
        <Layout>
      <div className="flex flex-wrap justify-center space-x-5 mt-4" >
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
      </div>
        </Layout>
    </>
  );
};

export default Home;

import React, { useEffect, useState } from "react";
import Navbar from "./global/Navbar/Navbar";
import Layout from "./Layout/Layout";
import Card from "./Card/Card";
import axios from "axios";
import { baseUrl } from "../../config";

const Home = () => {
  const [blogs, setBlogs] = useState([])
  const fetchBlogs = async () => {
    const response = await axios.get(`${baseUrl}/blog`)
    if (response.status===200){
      setBlogs(response.data.data)
    }
    console.log(response)
  };
  useEffect(() => {
    fetchBlogs()
  }, [])
  return (
    <>
      <Layout>
        <div className="flex flex-wrap justify-center space-x-5 mt-4">
          {
            blogs.length>0 && blogs.map((blog)=>{
              console.log(blog)
              return(
                <Card blog={blog}/>
              )
            })
          }
         
        </div>
      </Layout>
    </>
  );
};

export default Home;

import React from "react";
import Layout from "../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About Us"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img src="/images/about.jpeg" alt="contactus" style={{ width: "100%" }}/>
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">SharedWheelz is an Indian e-commerce website. The company focuses on various product categories such as consumer electronics, fashion, home essentials, groceries, and lifestyle products.</p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
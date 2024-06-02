import React from "react";
import Layout from "../components/Layout/Layout";

const Contact = () => {
  return (
    <Layout title={"Contact Us"}>
      <div className="row contactus">
        <div className="col-md-6 ">
          <img src="/images/contactus.jpeg" alt="contactus" style={{ width: "100%" }}/>
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">The SharedWheelz Help Centre page lists out various types of issues that you may have encountered so that there can be quick resolution and you can go back to shopping online. For example, you can get more information regarding order tracking, delivery date changes, help with returns (and refunds), and much more.</p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
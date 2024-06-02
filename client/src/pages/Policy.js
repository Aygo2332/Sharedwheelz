import React from "react";
import Layout from "../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img src="/images/contactus.jpeg" alt="contactus" style={{ width: "100%" }}/>
        </div>
        <div className="col-md-4"><p>We value the trust you place in us and recognize the importance of secure transactions and information privacy. This Privacy Policy describes how SharedWheelz and its affiliates collect, use, share or otherwise process your personal data through SharedWheelz website.</p></div>
      </div>
    </Layout>
  );
};

export default Policy;
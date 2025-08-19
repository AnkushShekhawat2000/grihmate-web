import React from "react";
import "./style.css";
import Banner from "../Rent/components/banner/index";
import Layout from "../../component/common/Layout/layout";
import RentProperties from "./components/RentProperties";

const RentPage = () => {
  return (
    <div className="rent-page">
        <Banner />
        <RentProperties/>
    </div>
  );
};

export default RentPage;
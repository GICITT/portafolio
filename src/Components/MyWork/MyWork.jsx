import React from "react";
import "./MyWork.css";
import logo from "../../assets/logo-sn.png";
import mywork_dat from "../../assets/myWork_data";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function MyWork() {
  return (
    <div id="myWork" className="mywork">
      <div className="mywork-title">
        <h1>My latest works</h1>
      </div>
      <div className="mywork-container">
        {mywork_dat.map((work, index) => {
          return <img key={index} src={work.w_img} alt="" />;
        })}
      </div>
    </div>
  );
}

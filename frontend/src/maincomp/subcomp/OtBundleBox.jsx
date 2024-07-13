import React from "react";
import "./OtBundleBox.css";
import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function OtBundleBox({ imglink, btntext }) {
  return (
    <div className="otbundlebox">
      <div className="otbundlebox_img">
        <img src={imglink} alt="" />
      </div>
      <div className="otbundlebox_txt">
        <Button className="otbundlebox_txt_btn">{btntext}</Button>
        <span>
          <ArrowForwardIcon />
        </span>
      </div>
    </div>
  );
}

export default OtBundleBox;

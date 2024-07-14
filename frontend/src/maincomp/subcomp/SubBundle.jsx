import React from "react";
import "./SubBundle.css";
import { Button } from "@mui/material";

function SubBundle() {
  return (
    <div className="subbundle">
      <div className="sub_title">
        <div className="tempbtl">
          <div className="build_your_bdl">
            <div className="build_your_bdl_1">
              <p>powered by Loop-flows </p>
            </div>
            <div className="build_your_bdl_2">
              <h2>We Gamify Subscriptions for you! </h2>
            </div>
            <div className="build_your_bdl_3">
              <p>
                Subscribe to unlock exclusive perks with subsequent orders. Use{" "}
                <span>Loop-flows</span>
                to delight and surprise customers, boosting LTV and reducing
                churn through personalized subscription experiences
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="sub_demo">
        <div className="sub_demo2">
          <div className="sub_demo_left">
            <img
              src="https://demo.loopwork.co/cdn/shop/files/Guidedmeditation_4.png?v=1707472422&width=713"
              alt=""
            />
          </div>
          <div className="sub_demo_right">
            <div>
              <h2>Synergy Blend Protein - Automate rewards 🎁</h2>
            </div>
            <div>Rs. 3,400.00 </div>
            <div>
              <div>Size</div>
              <div>
                <select name="" id="">
                  <option value="1.1lbs">1.1lbs</option>
                  <option value="2.2lbs">2.2lbs</option>
                  <option value="4.4lbs">4.4lbs</option>
                </select>
              </div>
            </div>
            <div>
              <div>Quantity </div>
              <div className="temp">
                <Button>-</Button>
                <div>1 </div>
                <Button>+</Button>
              </div>
            </div>
            <div className="temp2">
              <Button>Add To Cart</Button>
              <Button>Buy With G Pay</Button>
              <Button>More Payment Options</Button>
            </div>
            <div>
              <Button>View full details</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubBundle;

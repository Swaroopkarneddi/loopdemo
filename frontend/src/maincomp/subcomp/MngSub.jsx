import React from "react";
import "./MngSub.css";
import { Button } from "@mui/material";

function MngSub() {
  return (
    <div className="mngsub">
      <div className="mngsub_left">
        <div className="mngsub_left_top">
          <h1>Manage subscriptions like magic ✨</h1>
        </div>
        <div className="mngsub_left_mid">
          <p>
            Effortlessly handle your subscriptions.
            <span>Easily swap, reschedule, or pause with just one click</span>.
            Unlock exclusive rewards on your subscriber portal. <br />
            <span>No-password login</span>
          </p>
        </div>
        <div className="mngsub_left_bottom">
          <Button className="mngsub_left_bottom_button">
            Explore Customer Portal
          </Button>
        </div>
      </div>
      <div className="mngsub_right">
        <img
          src="https://demo.loopwork.co/cdn/shop/files/Group_12.png?v=1707338209&width=750"
          alt=""
        />
      </div>
    </div>
  );
}

export default MngSub;

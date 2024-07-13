import React from "react";
import { Button } from "@mui/material";

import "./BookDemo.css";

function BookDemo() {
  return (
    <div className="bookdemo">
      <div className="bookdemo_text">
        Rated ⭐️⭐️⭐️⭐️⭐️ on Shopify App Store
      </div>
      <div className="bookdemo_bigtext">
        <h1>This store is powered by Loop subscriptions! </h1>
      </div>
      <div className="bookdemo_text">
        Turn your customers into subscribers and drive recurring revenue for
        your DTC brand.
      </div>
      <div className="bookdemo_text">
        <Button className="bookdemo_text_btn">Book a Demo</Button>
      </div>
    </div>
  );
}

export default BookDemo;

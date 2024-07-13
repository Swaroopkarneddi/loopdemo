import React from "react";
import "./Home.css";
import MngSub from "./subcomp/MngSub";
import OtBundels from "./subcomp/OtBundels";
function Home() {
  return (
    <div className="home">
      <OtBundels />
      <MngSub />
    </div>
  );
}

export default Home;

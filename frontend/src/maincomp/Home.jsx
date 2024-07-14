import React from "react";
import "./Home.css";
import MngSub from "./subcomp/MngSub";
import OtBundels from "./subcomp/OtBundels";
import SubBundle from "./subcomp/SubBundle";
function Home() {
  return (
    <div className="home">
      <SubBundle />
      <OtBundels />
      <MngSub />
    </div>
  );
}

export default Home;

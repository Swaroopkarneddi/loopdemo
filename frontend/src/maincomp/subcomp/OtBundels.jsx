import React from "react";
import "./OtBundels.css";
import OtBundleBox from "./OtBundleBox";
function OtBundels() {
  return (
    <div className="otbundels">
      <div className="otbundels_header">Other Bundles</div>
      <div className="otbundels_main">
        <OtBundleBox
          btntext="Beverage Box"
          imglink="https://demo.loopwork.co/cdn/shop/files/1_bc601fd1-9d11-4b79-b7a5-517faf5417ad.png?v=1707336067&width=400"
        />
        <OtBundleBox
          btntext="Wine Crate"
          imglink="https://demo.loopwork.co/cdn/shop/files/7_b0934793-d61e-4b32-8740-343f6ed65d05.png?v=1707336082&width=400"
        />
        <OtBundleBox
          btntext="Coffee Box"
          imglink="https://demo.loopwork.co/cdn/shop/files/4_f4ada11a-91ae-4028-8009-18d4dfe6326f.png?v=1707336081&width=400"
        />
        <OtBundleBox
          btntext="Other Brands"
          imglink="https://demo.loopwork.co/cdn/shop/files/Group_224_1_png_7470ea31-4e56-4c55-802f-6ed19f560e76.webp?v=1707336248&width=400"
        />
      </div>
    </div>
  );
}

export default OtBundels;

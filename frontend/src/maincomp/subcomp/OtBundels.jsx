import React from "react";
import "./OtBundels.css";
import OtBundleBox from "./OtBundleBox";
import { Button } from "@mui/material";
function OtBundels() {
  return (
    <>
      <div className="ot_background">
        <div className="tempbtl">
          <div className="build_your_bdl">
            <div className="build_your_bdl_1">
              <p>powered by Loop Bundle Builder </p>
            </div>
            <div className="build_your_bdl_2">
              <h2>Build your own Bundle</h2>
            </div>
            <div className="build_your_bdl_3">
              <p>
                Build personalised bundle and subscribe. Loop presents a fully
                <span>customizable Bundle Builder</span> that can be easily
                managed through the customer portal. Harness this amazing
                functionality to elevate your AOV.
              </p>
            </div>
          </div>
        </div>
        <div className="mealbox">
          <div className="mealbox_left">
            <img
              src="https://demo.loopwork.co/cdn/shop/files/Guided_meditation_3.png?v=1707336001&width=750"
              alt=""
            />
          </div>
          <div className="mealbox_right">
            <div className="mealbox_right_header">
              <h3>Meal Box</h3>
            </div>

            <div className="mealbox_right_mid">
              <p>
                Fresh meals, built your way.{" "}
                <span>
                  More you buy, more you save. Manage bundle from customer
                  portal.
                </span>
                Delivered on your schedule.
              </p>
            </div>

            <div className="mealbox_right_mid">
              <p>
                The <span>weekly rotating meal</span> plan will keep you
                engaged. Bundled <span>categories</span> provide a convenient
                option for quick selection.
              </p>
            </div>

            <div className="mealbox_right_bottom">
              <Button className="mealbox_right_bottom_btn">
                Build Your Meal Box 🍜
              </Button>
            </div>
          </div>
        </div>
        <div className="otbundels">
          <div className="otbundels_header">Other Bundles</div>
          <div className="otbundels_main">
            <OtBundleBox
              className="otbundels_main_comp"
              btntext="Beverage Box"
              imglink="https://demo.loopwork.co/cdn/shop/files/1_bc601fd1-9d11-4b79-b7a5-517faf5417ad.png?v=1707336067&width=400"
            />
            <OtBundleBox
              className="otbundels_main_comp"
              btntext="Wine Crate"
              imglink="https://demo.loopwork.co/cdn/shop/files/7_b0934793-d61e-4b32-8740-343f6ed65d05.png?v=1707336082&width=400"
            />
            <OtBundleBox
              className="otbundels_main_comp"
              btntext="Coffee Box"
              imglink="https://demo.loopwork.co/cdn/shop/files/4_f4ada11a-91ae-4028-8009-18d4dfe6326f.png?v=1707336081&width=400"
            />
            <OtBundleBox
              className="otbundels_main_comp"
              btntext="Other Brands"
              imglink="https://demo.loopwork.co/cdn/shop/files/Group_224_1_png_7470ea31-4e56-4c55-802f-6ed19f560e76.webp?v=1707336248&width=400"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default OtBundels;

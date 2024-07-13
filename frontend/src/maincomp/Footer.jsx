import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer_top">
          <div className="footer_top_sub">
            <div className="footer_top_div">
              <h3>Resources</h3>
              <ul>
                <li className="footer_top_div_li">Widgets Gallery [New] </li>
                <li className="footer_top_div_li">Subscription Gamification</li>
                <li className="footer_top_div_li">
                  Unbundling of Box Subscription
                </li>
              </ul>
            </div>
            <div className="footer_top_div">
              <h3>Migration</h3>
              <ul>
                <li className="footer_top_div_li">Recharge </li>
                <li className="footer_top_div_li">Bold </li>
                <li className="footer_top_div_li">Migration reviews </li>
              </ul>
            </div>
            <div className="footer_top_div">
              <h3>Compare Apps</h3>
              <ul>
                <li className="footer_top_div_li">Recharge vs Bold vs Loop </li>
                <li className="footer_top_div_li">Recharge vs Skio vs Loop </li>
                <li className="footer_top_div_li">
                  Ordergroove vs Recharge vs Loop
                </li>
              </ul>
            </div>
            <div className="footer_top_div">
              <h3>Integrations</h3>
              <ul>
                <li className="footer_top_div_li">
                  Prediko for Inventory Management
                </li>
                <li className="footer_top_div_li">Upsell Widget Designer </li>
                <li className="footer_top_div_li">
                  Littledata for BFCM analytics
                </li>
                <li className="footer_top_div_li">All Integrations </li>
              </ul>
            </div>
            <div className="footer_top_div">
              <h3>Help</h3>
              <ul>
                <li className="footer_top_div_li">Loop Help Centre </li>
                <li className="footer_top_div_li">
                  How to setup subscription on Shopify
                </li>
              </ul>
            </div>
            <div className="footer_top_div">
              <h3>Legal</h3>
              <ul>
                <li className="footer_top_div_li">
                  Automatic Renewal Law (ARL)
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer_bottom">
          <div className="footer_bottom_top">
            <div>1</div>
            <div>2</div>
          </div>
          <div className="footer_bottom_bottom">
            <div>1</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

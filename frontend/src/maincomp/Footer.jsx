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
            <div className="footer_bottom_top1">
              <div className="footer_bottom_top11">
                <div className="footer_bottom_top1s">Country/Region</div>
                {/* <div className="footer_bottom_top1s"> */}
                <form action="" className="footer_bottom_top1s">
                  <select name="currency" id="currency">
                    <option value="INR-India">INR| INDIA</option>
                    <option value="USD-United_states">
                      USD| UNITED STATES
                    </option>
                  </select>
                </form>
                {/* </div> */}
              </div>
              <div className="footer_bottom_top12">
                <div className="footer_bottom_top1s">Language</div>
                <form action="" className="footer_bottom_top1s">
                  <select name="Language" id="Language">
                    <option value="ENGLISH">ENGLISH</option>
                    <option value="SPANISH">SPANISH</option>
                  </select>
                </form>
              </div>
            </div>
            <div className="footer_bottom_top2">
              <div>
                <div>
                  <img
                    src="https://play-lh.googleusercontent.com/c8oisII4zLnZjpba-fpVOmdRUbmZHpPRVzBW-dee049P74S4zpX8cUD2-0p_AHrKog"
                    alt="AMEX"
                  />
                </div>
                <div>
                  <img
                    src="https://www.currensea.com/hs-fs/hubfs/Apple_Pay_logo_blk_020519-ai.png?width=525&height=525&name=Apple_Pay_logo_blk_020519-ai.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://cdn.icon-icons.com/icons2/1178/PNG/512/diners-club_82069.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://1000logos.net/wp-content/uploads/2021/05/Discover-logo-768x432.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://www.uctoday.com/wp-content/uploads/2021/12/What-is-Meta.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://w7.pngwing.com/pngs/893/567/png-transparent-logo-pay-google-gpay-logos-brands-in-colors-icon.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://www.investopedia.com/thmb/F8CKM3YkF1fmnRCU2g4knuK0eDY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/MClogo-c823e495c5cf455c89ddfb0e17fc7978.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://logowik.com/content/uploads/images/shop-app6999.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://mentors-org-logo.s3.us-west-2.amazonaws.com/5e2b5250a75a1130cef10169.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="footer_bottom_bottom">
            <div>&copy; 2024, Loop Demo Store Powered by Shopify</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

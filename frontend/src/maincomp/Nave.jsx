import React from "react";
import "./Nave.css";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
function Nave() {
  return (
    <>
      <div className="headder sticky-top">
        <div className="headder1">
          <nav className="navbar navbar-expand-lg bg-light headder_own">
            <div className="container-fluid ">
              <a className="navbar-brand" href="#">
                <img
                  className="headder_icon_img"
                  src="https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_fd6487259a88ad7bcdad1a0e193fb22b/loop-subscriptions.png"
                  alt=""
                />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarTogglerDemo02"
                aria-controls="navbarTogglerDemo02"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarTogglerDemo02"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Shop Subscription
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li>
                        <a class="dropdown-item" href="#">
                          Auto-ship subscriptions
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Trial Subscription
                        </a>
                      </li>

                      <li>
                        <a class="dropdown-item" href="#">
                          Add-On-Subscription
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Membership Subscription
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Only Subscription
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          All Subscription
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Bundles
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li>
                        <a class="dropdown-item" href="#">
                          Meal Bundle (BYOB) Bundle Examples
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Wine Box
                        </a>
                      </li>
                      <li>{/* <hr class="dropdown-divider" /> */}</li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Coffee Box
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Bundle Examples
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link " aria-current="page" href="#">
                      Manage Subscriptions
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Recharge Alternative
                    </a>
                  </li>
                </ul>
                <form className="d-flex " role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-success" type="submit">
                    <SearchIcon />
                  </button>
                </form>
                <div>
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0  ">
                    <li className="nav-item">
                      <a className="nav-link " aria-current="page" href="">
                        <PersonOutlineIcon />
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="">
                        <ShoppingBagIcon />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Nave;

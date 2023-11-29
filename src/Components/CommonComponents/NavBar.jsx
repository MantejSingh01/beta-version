import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faUser,
  faBagShopping,
  faHeart,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation, useParams } from "react-router-dom";
import DropDown from "../FeatureComponents/dropDown";

const NavBar = () => {
  const [isHoverBoys, setIsHoverBoys] = useState(false);
  const [isHoverGirls, setIsHoverGirls] = useState(false);
  const {pathname} = useLocation();
  const [isActive, setIsAactive] = useState('')
  
  useEffect(()=>{

        setIsAactive(pathname)
  })

  return (
    <div className="navbar">
      <div className="upperNav">
        <div className="navlogo">
          <img
            className="navlogoDiv"
            src="https://www.thesouledstore.com/static/img/newlogo.8dcc6cc.png"
            alt="logo"
          ></img>
          <div className="eye" id="left-eye"></div>
          <div className="eye" id="right-eye"></div>
        </div>
        <div className="navSection2">
          <div className="innerSection2">
            <Link to={"/women"} className={`womenSection link-custom-style ${isActive =="/women"?'active':""}`}>
              Women
            </Link>
            <Link to={"/men"} className={`menSection link-custom-style ${isActive =="/men"?'active':''}`}>
              Men
            </Link>

            <Link to={"/kids"} className={`kidsSection link-custom-style ${isActive =="/kids"?'active':""}`}>
              Kids
            </Link>
          </div>
        </div>
        <div className="navSection3">
          <div className="innerSection2">
            <Link to={"/contact"} className="navContact link-custom-style">
              Contact us
            </Link>
            <Link
              to={"/trackOrder"}
              className="navTrackOrder link-custom-style"
            >
              Track Order
            </Link>
            <Link to={"/downloadApp"} className="navDownload link-custom-style">
              Download App
            </Link>
          </div>
        </div>
      </div>
      <div className="lowerNav">
        <div className="lowerNavInner">
          <div
            className="boysContainer"
            onMouseEnter={() => {
              setIsHoverBoys(true);
            }}
            onMouseLeave={() => {
              setIsHoverBoys(false);
            }}
          >
            <div className="boysWear">
              Boys{" "}
              <FontAwesomeIcon className="custom_icon" icon={faCaretDown} />
            </div>
            {isHoverBoys && <DropDown isHover={isHoverBoys} />}
          </div>
          <div
            className="girlsContainer"
            onMouseEnter={() => {
              setIsHoverGirls(true);
            }}
            onMouseLeave={() => {
              setIsHoverGirls(false);
            }}
          >
            <div className="girlsWear">
              Girls{" "}
              <FontAwesomeIcon className="custom_icon" icon={faCaretDown} />
            </div>
            {isHoverGirls && <DropDown isHover={isHoverGirls} />}
          </div>
          <div className="winterWear">Winter</div>
          <div className="themeShop">Shop by themes</div>
        </div>
        <div className="navIcons">
          <div className="navIconsInner">
            <FontAwesomeIcon
              className="custom_icon"
              icon={faSearch}
              color="grey"
            />
            <FontAwesomeIcon
              className="custom_icon"
              icon={faUser}
              color="grey"
            />
            <FontAwesomeIcon
              className="custom_icon"
              icon={faHeart}
              color="grey"
            />
            <FontAwesomeIcon
              className="custom_icon"
              icon={faBagShopping}
              color="grey"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

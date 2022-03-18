import React, { useState, useRef } from "react";
import FeatherIcon from "feather-icons-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import {
  SearchDropdown,
  MaximizeScreen,
  AppsDropdown,
  LanguageDropdown,
  NotificationDropdown,
  ProfileDropdown,
} from "./TopBarItems";
// images
import profilePic from "../../assets/images/SV/logo-sm.png";
import avatar4 from "../../assets/images/users/avatar-4.jpg";
import SVlogoLight from "../../assets/images/SV/logo-light.png";
import logoSm from "../../assets/images/SV/logo-sm.png";

// get the notifications
const Notifications = [
  {
    id: 1,
    text: "Cristina Pride",
    subText: "Hi, How are you? What about our next meeting",
    avatar: profilePic,
  },
  {
    id: 2,
    text: "Caleb Flakelar commented on Admin",
    subText: "1 min ago",
    icon: "uil uil-comment-message",
    bgColor: "primary",
  },
  {
    id: 3,
    text: "Karen Robinson",
    subText: "Wow ! this admin looks good and awesome design",
    avatar: avatar4,
  },
  {
    id: 4,
    text: "New user registered.",
    subText: "5 hours ago",
    icon: "uil uil-user-plus",
    bgColor: "warning",
  },
  {
    id: 5,
    text: "Caleb Flakelar commented on Admin",
    subText: "1 min ago",
    icon: "uil uil-comment-message",
    bgColor: "info",
  },
  {
    id: 6,
    text: "Carlos Crouch liked Admin",
    subText: "13 days ago",
    icon: "uil uil-heart",
    bgColor: "secondary",
  },
];
const ProfileMenus = [
  {
    label: "My Account",
    icon: "user",
    redirectTo: "#",
  },
  {
    label: "Lock Screen",
    icon: "lock",
    redirectTo: "#",
  },
  {
    label: "Logout",
    icon: "log-out",
    redirectTo: "/",
  },
];

const TopBar = ({ onToggleMenu, onToggleMobMenu }) => {
  const { user } = useSelector((state) => state.auth);
  const logolg = useRef(null);
  const logosm = useRef(null);
  const logobox = useRef(null);
  const [activeLeftSide, setActiveLeftSide] = useState(true);
  const onToggleMenuTop = () => {
    setActiveLeftSide(!activeLeftSide);
    if (activeLeftSide) {
      logolg.current.classList.add("hide");
      logosm.current.classList.add("show");
      logobox.current.style.width = "70px";
    } else {
      logolg.current.classList.remove("hide");
      logosm.current.classList.remove("show");
      logobox.current.style.width = "250px";
    }
  };

  return (
    <div className="topbar" style={{ zIndex: "100" }}>
      <div>
        <div className="topbar__custom d-flex justify-content-between align-items-center">
          <ul className="topbar__custom-left list-unstyled d-flex mb-0 align-items-center">
            <li>
              <div
                ref={logobox}
                className="logo-box d-flex align-items-center justify-content-center"
              >
                <Link to="#" className="logo logo-light">
                  <span ref={logolg} className="logo-lg">
                    <img src={SVlogoLight} alt="" height="50" />
                  </span>

                  <span ref={logosm} className="logo-sm">
                    <img src={logoSm} alt="" height="40" />
                  </span>
                </Link>
              </div>
            </li>
            <li className="px-1">
              <button
                onClick={() => {
                  onToggleMenu();
                  onToggleMenuTop();
                }}
                className="d-none d-lg-block border-0 bg-white"
              >
                <FeatherIcon icon="menu" />
              </button>
            </li>
            <li className="px-1">
              <button
                onClick={onToggleMobMenu}
                className="d-bolck d-lg-none border-0 bg-white"
              >
                <FeatherIcon icon="menu" />
              </button>
            </li>
            <li className="d-none d-sm-inline-block">menu</li>
          </ul>
          <ul className="topbar__custom-right list-unstyled float-end mb-0">
            <li className="dropdown d-inline-block">
              <SearchDropdown />
            </li>
            <li className="dropdown d-none d-lg-inline-block">
              <MaximizeScreen />
            </li>
            <li className="dropdown d-none d-lg-inline-block topbar-dropdown">
              <AppsDropdown />
            </li>
            <li className="dropdown d-none d-lg-inline-block topbar-dropdown">
              <LanguageDropdown />
            </li>
            {/* <li className="dropdown notification-list topbar-dropdown d-inline-block">
                            <NotificationDropdown notifications={Notifications} />
                        </li> */}
            <li className="dropdown notification-list topbar-dropdown d-inline-block">
              <ProfileDropdown
                profilePic={profilePic}
                menuItems={ProfileMenus}
                username={user.name}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopBar;

import React from "react";
import Logo from "../Logo";
import appartBanner from "../../assets/images/appart.png";
import mountainBanner from "../../assets/images/mountain.png";
import beachBanner from "../../assets/images/beach.png";
import { NavLink, useParams, useLocation } from "react-router-dom";
import style from "./style.module.scss";

export default function Index() {
  const imagesBanner = {
    "/": beachBanner,
    "/about": mountainBanner,
    "/location": appartBanner,
  };
  const [bannerImage, setBannerImage] = React.useState(imagesBanner["/"]);
  const location = useLocation().pathname;
  React.useEffect(() => {
    setBannerImage(() => 
    location.startsWith("/location") ? imagesBanner["/location"] : imagesBanner[location]);
  }, [location]);

  console.log(location);
  return (
    <div className={style.container}>
      <div className={style.headerBar}>
        <div className={style.logo__wrapper}>
          <Logo />
        </div>
        <nav className={style.navBar}>
          <li className={style.nav__links}>
            <ul>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? style.active : null)}
              >
                Acceuil
              </NavLink>
            </ul>
            <ul>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? style.active : null)}
              >
                About
              </NavLink>
            </ul>
          </li>
        </nav>
      </div>
      <div className={style.banner}>
        <img className={style.banner__img} src={bannerImage} alt="tqt" />
      </div>
    </div>
  );
}

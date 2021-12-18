import React from "react";
import { useLocation } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet, useNavigate } from "react-router-dom";
import { NAV_ELEMENT } from "../Constant";

const useStyles = makeStyles((theme) => ({
  mainBody: {},
}));

 const  Layout=(props)=>{
  const classes = useStyles();
  const { pathname } = useLocation();
  let navigate = useNavigate();

  const [currentMenu, setMenu] = React.useState(null);
  const [anchorElId, setAnchorElId] = React.useState(null);

  React.useEffect(() => {
    getCurrentMenu(pathname);
    return () => {};
  }, [pathname]);
  const getCurrentMenu = (pathname) => {
    switch (pathname) {
      case "/":
        setMenu("HOME");
        break;
      case "/about":
        setMenu("ABOUT_US");
        break;
      case "/meet-our-team":
        setMenu("TEAM");
        break;
      default:
        setMenu("HOME");
        break;
    }
  };

  const menuClickHandler = (event) => {
    const id = event.currentTarget.id;
    setAnchorElId(event.currentTarget.id);
    navigate(`${NAV_ELEMENT[id]}`);
  };

  return (
    <React.Fragment>
      <CssBaseline />
        <Header
          anchorElId={anchorElId}
          currentMenu={currentMenu}
          handleClick={menuClickHandler}
          setAnchorElId={setAnchorElId}
        />
        <div className={classes.mainBody}>
          <Outlet />
        </div>
        <Footer currentMenu={currentMenu} />
    </React.Fragment>
  );
}

export default Layout;
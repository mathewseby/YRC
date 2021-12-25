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

export default function Layout(props) {
  const classes = useStyles();
  const { pathname } = useLocation();
  let navigate = useNavigate();
  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <div className={classes.mainBody}>
        <Outlet />
      </div>
      <Footer/>
    </React.Fragment>
  );
}

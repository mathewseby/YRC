import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  mainBody: {
    height: "calc(100vh - 65px)"
  },
}));

export default function Layout(props) {
  const classes = useStyles();
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

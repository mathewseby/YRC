/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Container from "@material-ui/core/Container";
import { Divider, Grid } from "@material-ui/core";
import { ReactComponent as HeaderLogo } from "../assets/images/yrc-sample-logo.jpg";
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import Drawer from "@material-ui/core/Drawer";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import { useNavigate } from "react-router-dom";
import {
  MENU,
  MENU_ID,
  NAV_ELEMENT,
} from "../Constant";

const useStyles = makeStyles((theme) => ({
  headerLogoWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  headerLogo: {
    width: 64,
    height: 64,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      width: 56,
      height: 56,
    },
    [theme.breakpoints.down("xs")]: {
      width: 48,
      height: 48,
    },
  },
  headerMenuItem: {
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(2),
      display: "flex",
      flexDirection: "column",
    },
    "& a": {
      color: "#fff",
      marginRight: theme.spacing(4),
      fontSize: 16,
      transition: "fontWeight .9s ease-in-out",
      position: "relative",
      cursor: "pointer",
      textDecoration: "none",
      fontWeight: 700,
      padding: "3px",
      [theme.breakpoints.down("sm")]: {
        marginRight: theme.spacing(0),
        background:
          "-webkit-linear-gradient(320deg, #E4E09E,#F7F0C0, #C3B46C 100%)",
        "-webkit-background-clip": "text",
        "-webkit-text-fill-color": "transparent",
        padding: theme.spacing(2, 2),
      },
      "&:hover": {
        // fontWeight: '700',
        background:
          "-webkit-linear-gradient(320deg, #E4E09E,#F7F0C0, #C3B46C 100%)",
        "-webkit-background-clip": "text",
        "-webkit-text-fill-color": "transparent",
        "& $headerMenuIndicator": {
          display: "unset",
        },
      },
    },
  },
  headerMenuItemStyle: {
    color: "#fff",
    marginRight: theme.spacing(4),
    fontSize: 16,
    transition: "fontWeight .9s ease-in-out",
    position: "relative",
    cursor: "pointer",
    textDecoration: "none",
    [theme.breakpoints.down("sm")]: {
      marginRight: theme.spacing(0),
      background:
        "-webkit-linear-gradient(320deg, #E4E09E,#F7F0C0, #C3B46C 100%)",
      "-webkit-background-clip": "text",
      "-webkit-text-fill-color": "transparent",
      // fontWeight: 700,
      padding: theme.spacing(2, 2),
    },
  },
  selectedHeaderMenuItem: {
    "& a": {
      color: "#fff",
      marginRight: theme.spacing(4),
      fontSize: 16,
      transition: "fontWeight .9s ease-in-out",
      position: "relative",
      cursor: "pointer",
      textDecoration: "none",
      background:
        "-webkit-linear-gradient(320deg, #E4E09E,#F7F0C0, #C3B46C 100%)",
      "-webkit-background-clip": "text",
      "-webkit-text-fill-color": "transparent",
      // "& $headerMenuIndicator": {
      //   display: "unset",
      // },
      [theme.breakpoints.down("sm")]: {
        marginRight: theme.spacing(0),
        background:
          "-webkit-linear-gradient(320deg, #E4E09E,#F7F0C0, #C3B46C 100%)",
        "-webkit-background-clip": "text",
        "-webkit-text-fill-color": "transparent",
        // fontWeight: 700,
        padding: theme.spacing(2, 2),
      },
    },
  },
  menuActive: {
    background:
      "-webkit-linear-gradient(320deg, #E4E09E,#F7F0C0, #C3B46C 100%)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
    marginRight: "15px",
    fontWeight: "700",
    fontSize: "16px",
    cursor: "pointer",
    padding: "3px",
  },
  inactiveMenu: {
    color: "white",
    cursor: "pointer",
    marginRight: "15px",
    fontSize: "16px",
    fontWeight: "700",
    padding: "3px",
    "&:hover": {
      background:
        "-webkit-linear-gradient(320deg, #E4E09E,#F7F0C0, #C3B46C 100%)",
      "-webkit-background-clip": "text",
      "-webkit-text-fill-color": "transparent",
    },
  },

  menuIcon: {
    color: "#fff",
    marginRight: "-12px",
  },
  drawerMenu: {
    width: 200,
    height: "100%",
    background:
      "-webkit-linear-gradient(320deg, #444444,#2F2F2F, #1D1D1D 100%)",
    "& svg": {
      color: "#fff",
    },
  },
  drawerPaper: {
    border: 0,
  },
  menuPop: {
    "& .MuiPopover-paper": {
      borderRadius: 16,
      background:
        "linear-gradient(180deg, #444444 0%, #2F2F2F 49.48%, #1D1D1D 100%)",
      boxShadow: "0px 0px 60px rgba(0, 0, 0, 0.08)",
    },
    pointerEvents: "none",
  },
  paper: {
    pointerEvents: "auto",
  },
  menuItemWrapper: {
    background:
      "linear-gradient(180deg, #444444 0%, #2F2F2F 49.48%, #1D1D1D 100%)",
    boxShadow: "0px 0px 60px rgba(0, 0, 0, 0.08)",
    borderRadius: 16,
    display: "flex",
    flexDirection: "column",
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 32,
    paddingRight: 32,
    "& $popMenuItem:last-child": {
      borderBottom: 0,
    },
  },
  popMenuItem: {
    letterSpacing: "0.06em",
    color: "#FFFFFF",
    paddingTop: 16,
    paddingBottom: 16,
    borderBottom: "1px solid #545454",
    cursor: "pointer",
    "&:hover": {
      // fontWeight: '700',
      background:
        "-webkit-linear-gradient(320deg, #E4E09E,#F7F0C0, #C3B46C 100%)",
      "-webkit-background-clip": "text",
      "-webkit-text-fill-color": "transparent",
    },
  },
  popMenuItemActive: {
    background:
      "-webkit-linear-gradient(320deg, #E4E09E,#F7F0C0, #C3B46C 100%)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
  },
  drawerMenuListWrapper: {
    "& .MuiListItemText-primary": {
      color: "#fff",
    },
    "& svg": {
      color: "#fff",
    },
  },
  addPadding: {
    padding: "20px 10px 20px 10px",
  },
}));

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function Header(props) {
  const classes = useStyles();
  const [openDrawer, setOpen] = React.useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {
      window.scrollTo(0, 0);
    };
  }, []);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleSideNavDrawerClick = (event) => {
    const id = event.currentTarget.id;
    const [routeId, navigationId] = id.split("-");
    setAnchorElId(routeId);
    navigate(`${NAV_ELEMENT[navigationId || routeId]}`);
  };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  const {
    setAnchorElId,
    currentMenu,
    anchorElId,
    handleClick,
  } = props;
  const open =
    (anchorElId && Boolean(anchorEl)) || false;
  const id = open ? "mouse-over-popover" : undefined;


  const hoverInEvent = (event) => {
    const id = event.currentTarget.id;
    id && setAnchorElId(id);
    setAnchorEl(event.currentTarget);
  };

  const hoverOutEvent = (event) => {
    setAnchorElId(null);
    setAnchorEl(null);
  };
  return (
    <>
      <ElevationScroll {...props}>
        <AppBar>
          <Toolbar>
            <Container disableGutters>
              <Grid
                container
                justifyContent="space-between"
                alignItems="center"
              >
                <Grid item className={classes.headerLogoWrapper}>
                  <a href="/">
                    <HeaderLogo className={classes.headerLogo} />
                  </a>
                </Grid>

                <Hidden smDown>
                  <Grid item className={classes.headerMenuItem}>
                    {MENU.map((el, i) => (
                      <div
                        className={
                          currentMenu === MENU_ID[el]
                            ? classes.menuActive
                            : classes.inactiveMenu
                        }
                        onMouseEnter={hoverInEvent}
                        onClick={handleClick}
                        key={`${el}-${i}`}
                        id={MENU_ID[el]}
                        onMouseLeave={hoverOutEvent}
                      >
                        {el}
                      </div>
                    ))}
                  </Grid>
                </Hidden>
                <Hidden mdUp>
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    className={classes.menuIcon}
                  >
                    <MenuIcon />
                  </IconButton>
                </Hidden>
              </Grid>
            </Container>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Drawer
        variant="persistent"
        anchor="right"
        open={openDrawer}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerMenu}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronRightIcon />
          </IconButton>
          <Divider />
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            className={classes.drawerMenuListWrapper}
          >
            <ListItem id="HOME" button onClick={handleSideNavDrawerClick}>
              <ListItemText primary="HOME" />
            </ListItem>
            <ListItem id="ABOUT_US" button onClick={handleSideNavDrawerClick}>
              <ListItemText primary="ABOUT US" />
            </ListItem>
            <ListItem id="TEAM" button onClick={handleSideNavDrawerClick}>
              <ListItemText primary="TEAM" />
            </ListItem>
          </List>
        </div>
      </Drawer>
      <Toolbar />
    </>
  );
}

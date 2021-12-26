import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { MENU } from "../Constant";
import { Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: "rgb(8 8 8)",
    height: "35px",
    display: "flex",
  },
  link: {
    color: "black",
    fontWeight: 700,
    fontSize: "16px",
  },
  individualLink: {
    textDecoration: "none",
    color: "White",
    fontWeight: 700,
    fontSize: "16px",
  },
  gridItem: {
    width: "10%",
    justifyContent: "center",
    display: "flex",
  },
  socialLink: {
    height: "32px",
    width: "200px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  iconStyle: {
    color: "white",
    fontSize: "1.6rem",
    margin: "2px 10px",
  },
  hashtag: {
    fontSize: "15px",
    fontWeight: 800,
    color: "white",
    display: "flex",
    justifyContent: "flex-end",
    width: "180px",
  }
}));

function Header() {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {" "}
        {/* Endpoint to route to Home component */}
        {MENU.length > 0 &&
          MENU?.map((link, key) => (
            <Grid item className={classes.gridItem}>
              <Link key={key} to="/" className={classes.individualLink}>
                {link}
              </Link>
            </Grid>
          ))}
          <Typography className={classes.hashtag}> #YamahaRxClub </Typography>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          className={classes.socialLink}
        >
          <Grid item>
            <FacebookIcon classes={{ root: classes.iconStyle }} />
          </Grid>
          <Grid item>
            <InstagramIcon classes={{ root: classes.iconStyle }} />
          </Grid>
          <Grid item>
            <YouTubeIcon classes={{ root: classes.iconStyle }} />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Header;

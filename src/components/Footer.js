import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import CopyrightIcon from '@material-ui/icons/Copyright';
import { Grid, Typography } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    footerContainer: {
      backgroundColor: "black",
      height: "30px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    disclaimer: {
        color: "white",
        fontWeight: 800,
        fontSize: "10px",
    },
    iconStyle: {
        color: "white",
        fontSize: ".8rem",
        margin: "2px 2px",
      },
  }));
  
function Footer() {
  const classes = useStyles();
    return (
        <Grid className={classes.footerContainer}>
            <Typography className={classes.disclaimer}> Copyright <CopyrightIcon className={classes.iconStyle}/> 2012, YRC </Typography> 
            
        </Grid>
    )
}

export default Footer

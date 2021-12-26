import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Bg from "../../assets/images/first.jpeg"; 


const useStyles = makeStyles((theme) => ({
  root: {
      position: "relative",
      backgroundColor: "#0f0d12",
      backgroundImage: `url(${Bg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "100%",
    },
  }));

const Home = () => {
  const classes = useStyles();
    return (
        <div className={classes.root}>
            Test
        </div>
    )
}

export default Home

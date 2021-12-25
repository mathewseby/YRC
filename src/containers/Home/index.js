import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Bg from "../../assets/images/first.jpeg"; 


const useStyles = makeStyles((theme) => ({
    bg: {
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
    }
  }));

const Home = () => {
  const classes = useStyles();
    return (
        <div>
            <img src={Bg} alt="yrc logo" className={classes.bg}/>
        </div>
    )
}

export default Home

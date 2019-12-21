import React, { Component } from 'react'
import styles from './Main.styles.js'
import { withStyles } from "@material-ui/core/styles";

class Main extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div>
                <div className={classes.first}></div>
                <div className={classes.second}></div>
                <div className={classes.third}></div>
                <div className={classes.fourth}></div>
            </div>
        )
    }
}

export default withStyles(styles)(Main);

import first from "../../assets/images/first.jpeg"
import second from "../../assets/images/second.jpg" 
import third from "../../assets/images/third.jpeg"
import fourth from "../../assets/images/fourth.jpeg"


const styles = theme => ({
 first:{
     background:`url(${first})`,
     overflow:"hidden",
    //  padding:"50px",
     height: "100vh", /* You must set a specified height */
     backgroundPosition: "center", /* Center the image */
     backgroundRepeat: "no-repeat", /* Do not repeat the image */
     backgroundSize: "cover"
 },

 second:{
    background:`url(${second})`,
    overflow:"hidden",
    // padding:"50px",
    height: "100vh", /* You must set a specified height */
    backgroundPosition: "center", /* Center the image */
    backgroundRepeat: "no-repeat", /* Do not repeat the image */
    backgroundSize: "cover"
},

third:{
    background:`url(${third})`,
    overflow:"hidden",
    // padding:"50px",
    height: "100vh", /* You must set a specified height */
    backgroundPosition: "center", /* Center the image */
    backgroundRepeat: "no-repeat", /* Do not repeat the image */
    backgroundSize: "cover"
},

fourth:{
    background:`url(${fourth})`,
    overflow:"hidden",
    // padding:"50px",
    height: "100vh", /* You must set a specified height */
    backgroundPosition: "center", /* Center the image */
    backgroundRepeat: "no-repeat", /* Do not repeat the image */
    backgroundSize: "cover"
},
})

export default styles;
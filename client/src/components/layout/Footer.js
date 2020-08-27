import React from "react";
import Paper from "@material-ui/core/Paper";
import { Typography, Grid } from "@material-ui/core";
import { useStyles } from "../styles/footerStyle";

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={5}>
        <Grid container direction="row" justify="center" alignItems="flex-end">
          <Typography className={classes.typography}>
            Copyright &copy; {new Date().getFullYear()} Connectify
          </Typography>
        </Grid>
      </Paper>
    </div>
  );
}

// import React from "react";
// import { Paper } from "@material-ui/core";

// function Footer() {
//   return (
//     <Paper>
//       <footer className="bg-dark text-white mt-5 p-4 text-center">
//         Copyright &copy; {new Date().getFullYear()} Devconnector
//       </footer>
//     </Paper>
//   );
// }

// export default Footer;

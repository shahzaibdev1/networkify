import React, { Component } from "react";
import Axios from "axios";
import Typography from "@material-ui/core/Typography";
import { Grid, TextField, withStyles, Button } from "@material-ui/core";
import { loginStyles } from "../styles/loginStyles";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchNodes: "",
      email: "",
      password: "",
      errors: {},
    };
  }

  handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password,
    };

    Axios.post("/api/users/login", user).catch((err) =>
      this.setState({ errors: err.response.data })
    );
  };

  render() {
    const { classes } = this.props;
    const { errors } = this.state;

    return (
      <div>
        <div className="login">
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <div>
              <Typography
                variant="h1"
                className={[
                  classes.textLight,
                  classes.textShadow,
                  classes.textCenter,
                ]}
              >
                Login
              </Typography>
              <Typography
                variant="h5"
                className={[classes.textLight, classes.textCenter]}
              >
                Login with Connectify account
              </Typography>
              <form noValidate autoComplete="off">
                <Grid
                  container
                  direction="column"
                  justify="space-evenly"
                  alignItems="stretch"
                >
                  <TextField
                    label="email"
                    variant="outlined"
                    name="email"
                    className={classes.inputField}
                    error={errors.email ? true : false}
                    InputLabelProps={{ className: classes.inputLabel }}
                    InputProps={{ className: classes.input }}
                    onChange={this.handleChange}
                    value={this.state.email}
                  />

                  {errors.email ? (
                    <Typography className={classes.textDanger}>
                      {errors.email}
                    </Typography>
                  ) : (
                    ""
                  )}

                  <TextField
                    type="password"
                    error={errors.password ? true : false}
                    label="Password"
                    className={classes.inputField}
                    variant="outlined"
                    InputLabelProps={{ className: classes.inputLabel }}
                    InputProps={{ className: classes.input }}
                    name="password"
                    onChange={this.handleChange}
                    value={this.state.password}
                  />

                  {errors.password ? (
                    <Typography
                      className={`invalid-feedback ${classes.textDanger}`}
                    >
                      {errors.password}
                    </Typography>
                  ) : (
                    ""
                  )}

                  <Button
                    className={[classes.inputField, classes.inputBtn]}
                    variant="contained"
                    onClick={this.handleSubmit}
                  >
                    Submit
                  </Button>
                </Grid>
              </form>
            </div>
          </Grid>
        </div>
      </div>
    );
  }
}

export default withStyles(loginStyles)(Login);

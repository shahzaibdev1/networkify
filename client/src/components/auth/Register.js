import React, { Component } from "react";
import Axios from "axios";
import Typography from "@material-ui/core/Typography";
import { Grid, TextField, withStyles, Button } from "@material-ui/core";
import { registerStyles } from "../styles/registerStyle";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchNodes: "",
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
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

  // Handle on Register form submit
  handleSubmit = (e) => {
    e.preventDefault();

    let newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
    };

    // this.props.registerUser(newUser);

    Axios.post("/api/users/register", newUser).catch((err) =>
      this.setState({ errors: err.response.data })
    );
  };

  render() {
    const { classes } = this.props;
    const { errors } = this.state;

    // let { user } = this.props.auth;

    return (
      <div className={classes.root}>
        <div className="register">
          <Grid container direction="row" justify="center" alignItems="center">
            <div className="col-md-8 m-auto">
              <Typography
                variant="h1"
                className={classes.textShadow}
                style={{ color: "white" }}
              >
                Register
              </Typography>
              <Typography variant="h5" style={{ color: "white" }}>
                Create your Connectify account
              </Typography>
              <form noValidate autoComplete="off">
                <Grid
                  container
                  direction="column"
                  justify="space-evenly"
                  alignItems="stretch"
                >
                  <TextField
                    label="Name"
                    className={classes.inputField}
                    InputProps={{ className: classes.input }}
                    InputLabelProps={{ className: classes.inputLabel }}
                    error={errors.name ? true : false}
                    variant="outlined"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                  />

                  {errors.name ? (
                    <Typography variant="body2" className={classes.inputLabel}>
                      {errors.name}
                    </Typography>
                  ) : (
                    ""
                  )}

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
                    <Typography variant="body2" className={classes.inputLabel}>
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
                    <Typography variant="body2" className={classes.inputLabel}>
                      {errors.password}
                    </Typography>
                  ) : (
                    ""
                  )}

                  <TextField
                    type="password"
                    error={errors.confirmPassword ? true : false}
                    className={classes.inputField}
                    variant="outlined"
                    label="Confirm Password"
                    InputLabelProps={{ className: classes.inputLabel }}
                    InputProps={{ className: classes.input }}
                    name="confirmPassword"
                    onChange={this.handleChange}
                    value={this.state.confirmPassword}
                  />

                  {errors.confirmPassword ? (
                    <Typography variant="body2" className={classes.inputLabel}>
                      {errors.confirmPassword}
                    </Typography>
                  ) : (
                    ""
                  )}

                  <Button
                    className={classes.inputField}
                    onClick={this.handleSubmit}
                    color="secondary"
                    variant="contained"
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

export default withStyles(registerStyles)(Register);

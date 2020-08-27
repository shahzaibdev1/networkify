import grey from "@material-ui/core/colors/grey";

export const registerStyles = (theme) => ({
  root: {
    flexGrow: 10,
    heighth: "100%",
    backgroundColor: grey[900],
    paddingBottom: theme.spacing(3),
  },

  inputField: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  input: {
    backgroundColor: grey[800],
  },
  inputLabel: {
    color: grey[100],
  },

  textShadow: {
    textShadow: "0 0 8px" + " " + grey[400],
  },
});

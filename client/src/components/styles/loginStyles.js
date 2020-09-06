import grey from "@material-ui/core/colors/grey";
import { pink } from "@material-ui/core/colors";

export const loginStyles = (theme) => ({
  root: {
    flexGrow: 10,
    height: "100%",
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

  textLight: {
    color: grey[100],
  },

  textDanger: {
    color: pink[400],
  },

  textShadow: {
    textShadow: "0 0 10px" + " " + grey[600],
  },

  textCenter: {
    textAlign: "center",
  },

  inputBtn: {
    backgroundColor: pink[400],
  },
});

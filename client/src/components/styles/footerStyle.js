import { grey, pink } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      width: "100%",
      height: theme.spacing(8),
      backgroundColor: grey[800],
    },
  },
  typography: {
    color: grey[100],
    marginTop: theme.spacing(3),
  },
}));

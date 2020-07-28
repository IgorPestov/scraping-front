import React, { useState } from "react";
import { InputBase, Container } from "@material-ui/core";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import APIHelper from "./APIhelper";
const useStyles = makeStyles((theme) => ({
  search: {
    root: {
      flexGrow: 1,
    },
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "40ch",
      "&:focus": {
        width: "40ch",
      },
    },
  },
}));
const App = () => {
  const [text, setText] = useState("");
  const classes = useStyles();
  const send = (postData) => {
   const newData = APIHelper.send(postData);
   console.log(newData)
  };
  const sendHendler = (e) => {
    if (e.key === "Enter") { 
      if (text.length > 1) {
        send(text);
        setText("");
      }
    }
  };
  const textForSend = (e) => {
    setText(e.target.value);
  };

  const Render = () => {
    return (
      <div>

      </div>
    )
  }
  return (
    <Container className={classes.root}>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          value={text}
          inputProps={{ "aria-label": "search" }}
          onChange={textForSend}
          onKeyPress={sendHendler}
        />
      </div>
      <Render/>
    </Container>
  );
};

export default App;

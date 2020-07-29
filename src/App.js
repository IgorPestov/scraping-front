import React, { useState } from "react";
import {
  InputBase,
  Container,
  Paper,
  Grid,
  Typography,
  Link,
  GridList,
  GridListTile,
  ButtonBase,
} from "@material-ui/core";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import APIHelper from "./APIhelper";
const useStyles = makeStyles((theme) => ({
  search: {
    root: {
      flexGrow: 1,
    },
    GridItem: {
      textAlign: "center",
    },
    image: {
    
    },
    itemImg: {
      margin: 'auto',
      textAlign: 'center',
      maxWidth: '50%',
      maxHeight: '70%',
    },
    ListItem: {
      // position: "absolute"
      // hight: "auto",
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
  const [items, setItems] = useState([]);
  const classes = useStyles();
  const send = async (postData) => {
    const items = await APIHelper.send(postData);
    console.log(items);
    setItems(items);
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
      <Grid container item xs={12} spacing={2} direction="row">
        {items.map((item, id) => {
          return (
            <Grid key={id} item xs={3} className={classes.GridItem}>
              <Paper className={classes.ListItem}>
                <ButtonBase href={item.url} className={classes.image} style={{width:"100%"}} >
                  <div
                    style={{backgroundImage: `url(${item.img})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'center', width: 250,
                    height: 300 , margin: "auto"}}
                  >
                  </div>
                </ButtonBase>
                <Typography noWrap>
                  <Link href={item.url}>{item.title}</Link>
                </Typography>
                <Typography>{item.price}</Typography>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default App;

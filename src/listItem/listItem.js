import React, { useEffect } from "react";
import {
  Container,
  Grid,
  Paper,
  ButtonBase,
  Typography,
  Link,
  CircularProgress,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import actions from "../store/actions";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: "center",
  },

  GridItem: {
    textAlign: "center",
    Height: "200",
    maxHeight: "200",
  },
  image: {},
  itemImg: {
    margin: "auto",
    textAlign: "center",
    maxWidth: "50%",
    maxHeight: "70%",
  },
  ListItem: {},
  Notification: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "20%",
    textAlign: "center",
  },
  TextEmptyItems: {
    textAlign: "center",
  },
}));
const ListItem = (props) => {
  const {items, load} = useSelector((state) => state);
  const classes = useStyles();
  const Notification = () => {
    return (
      <div className={classes.Notification}>
        {load === false ? (
          <div>What watch do you want to find?</div>
        ) : (
          <CircularProgress />
        )}
      </div>
    );
  };
  return (
    <Container className={classes.root}>
      <Grid container item xs={12} spacing={2} direction="row">
        {items === undefined ? (
          <Notification className={classes.Notification} />
        ) : (
          items.map((item, id) => {
            return (
              <Grid key={id} item xs={3} className={classes.GridItem}>
                <Paper className={classes.ListItem}>
                  <ButtonBase
                    href={item.url}
                    className={classes.image}
                    style={{ width: "100%" }}
                  >
                    <div
                      style={{
                        backgroundImage: `url(${item.image})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        width: 150,
                        height: 200,
                        margin: "auto",
                      }}
                    ></div>
                  </ButtonBase>
                  <Typography noWrap>
                    <Link href={item.url}>{item.product}</Link>
                  </Typography>
                  <Typography>{item.price}</Typography>
                </Paper>
              </Grid>
            );
          })
        )}
      </Grid>
    </Container>
  );
};

export default ListItem;

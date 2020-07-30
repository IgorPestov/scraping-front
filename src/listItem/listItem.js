import React from "react";
import {
  Container,
  Grid,
  Paper,
  ButtonBase,
  Typography,
  Link,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: "center",
  },

  GridItem: {
    textAlign: "center",
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
      textAlign : "center",
  },
}));
const ListItem = (props) => {
  const items = useSelector((state) => state);
  const classes = useStyles();
  const Notification = () => {
    return (
      <Typography className={classes.Notification}>
        What watch do you want to find?
      </Typography>
    );
  };
  return (
    <Container className={classes.root}>
      <Grid container item xs={12} spacing={2} direction="row">
        {items === undefined ? (
          <Notification />
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
                        backgroundImage: `url(${item.img})`,
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
                    <Link href={item.url}>{item.title}</Link>
                  </Typography>
                  <Typography>{item.price + item.priceCent}</Typography>
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

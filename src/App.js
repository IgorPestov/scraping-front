import React from "react";
import ListItem from "./listItem/listItem";
import Header from "./header/header";
import { Provider } from "react-redux";
import store from "./store/store";
const App = (props) => {
  return (
    <React.Fragment>
      <Provider store={store}>
        <Header />
        <ListItem />
      </Provider>
    </React.Fragment>
  );
};

export default App;

let items = []
const reducer = (state = items, { type, payload }) => {
  switch (type) {
    case "POST_DATA":
      return   items = payload ;
  }
};
export default reducer;

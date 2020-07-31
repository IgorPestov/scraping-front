let initialState = {
  items : [], 
  load : Boolean,
};
const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "POST_DATA":
      return { ...state, items: payload };
  }
  switch (type) {
    case "POST_LOAD":
      return { load : payload};
  }
};

export default reducer ;

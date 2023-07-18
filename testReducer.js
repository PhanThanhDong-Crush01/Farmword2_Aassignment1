const initialState = {
  count: 0,
};

const action = {
  type: "e",
  payload: 10,
};

const counterReducer = (state, action) => {
  switch (action.type) {
    case "tang":
      return {
        count: state.count + 1,
      };
    case "giam":
      return {
        count: state.count - 1,
      };
    case "nhay":
      return {
        count: state.count + action.payload,
      };
    default:
      return state;
  }
};
const next = counterReducer(initialState, action);
console.log("🚀 ~ file: testReducer.js:29 ~ next:", next);

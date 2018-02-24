import createStore from "redux-zero";

const initialState = {
  count: 1,
  nome: "ross"
};

const store = createStore(initialState);

export default store;

import produce from "immer";

import contadorTypes from "./types";

const INITIAL_STATE = {
  contador: 0
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case contadorTypes.ADD:
      return produce(state, draft => {
        draft.contador += 1;
      });

    default:
      return state;
  }
}

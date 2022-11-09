import * as actionType from "../actions/actionTypes";

const initialState = {
  bookings: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actionType.GOT_BOOKINGS: {
      return {
        ...state,
        bookings: action.payload,
      };
    }
    default: {
      return { ...state };
    }
  }
}

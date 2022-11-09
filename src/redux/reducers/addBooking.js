import * as actionType from "../actions/actionTypes";

const initialState = {
    bookings: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case actionType.ADDED_BOOKINGS: {
            debugger;
            return {
                ...state,
                bookings: action.payload
            };
        }
        default: {
            return { ...state };
        }
    }
}

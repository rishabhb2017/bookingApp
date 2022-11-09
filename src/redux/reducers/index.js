import { combineReducers } from "redux";

import addBookings from "./addBooking";
import getBookings from "./gotBookings";

export default combineReducers({
    addBookings,
    getBookings
});

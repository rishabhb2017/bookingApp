import { all, put, call, takeEvery } from "redux-saga/effects";
import * as actionType from "../actions/actionTypes";
import roomBookingPostApi from "../../server/api";

export default function* addBookingsSaga() {
    yield takeEvery(actionType.ADD_BOOKINGS, addBookings);
}

function* addBookings(action) {
    debugger;
    console.log(action);
    try {
        const postResponse = yield call(roomBookingPostApi.add, action.payload);
        debugger;
        yield put({ type: actionType.ADDED_BOOKINGS, payload: postResponse });
    } catch (err) {
        console.log(err);
    }
}
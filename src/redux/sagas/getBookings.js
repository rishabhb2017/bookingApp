import { all, put, call, takeEvery } from "redux-saga/effects";
import * as actionType from "../actions/actionTypes";
import BookingsGetApi from "../../server/api";

export default function* getBookingsSaga() {
    yield takeEvery(actionType.GET_BOOKINGS, fetchBookings);
}

function* fetchBookings() {
    debugger;
    try {
        const getResponse = yield call(BookingsGetApi.getAll);
        yield put({ type: actionType.GOT_BOOKINGS, payload: getResponse });
    } catch (err) {
        console.log(err);
    }
}
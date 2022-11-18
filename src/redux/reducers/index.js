import { combineReducers } from "@reduxjs/toolkit";
import movieReducer from './movieReducer'
import detailReducer from "./detailReducer";
import trailerReducer from "./trailerReducer";
import searchReducer from "./searchReducer";
import authReducer from "./authReducer";

export default combineReducers({
    movie: movieReducer,
    detail: detailReducer,
    trailer: trailerReducer,
    search: searchReducer,
    auth: authReducer,
});

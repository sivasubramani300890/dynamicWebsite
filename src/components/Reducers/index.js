import { combineReducers } from "redux";

import contactReducer from "./contactReducer";

const rootReducers = combineReducers({
    posts : contactReducer
});

export default rootReducers;
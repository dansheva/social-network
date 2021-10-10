import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";

const rootReducer = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer
});

const store = createStore(rootReducer);

export type AppStateType = ReturnType<typeof rootReducer>

export default store
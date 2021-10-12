import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {usersReducer} from "./users-reducer";

const rootReducer = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer,
    users: usersReducer
});

const store = createStore(rootReducer);

export type AppStateType = ReturnType<typeof rootReducer>

export default store
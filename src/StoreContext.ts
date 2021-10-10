import React from "react";
import {EmptyObject, Store} from "redux";
import {profileType} from "./redux/profile-reducer";
import {dialogsType} from "./redux/dialogs-reducer";

const StoreContext = React.createContext( {} as Store<EmptyObject & {profile: profileType, dialogs: dialogsType}>);

export default StoreContext
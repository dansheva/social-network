import {ThunkDispatch} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {setAuthUserAndAvatarThunkCreator} from "./auth-reducer";

type AppInitialStateType = {
    initialized: boolean
}

const initialState: AppInitialStateType = {
    initialized: false,
}

export const appReducer = (state = initialState, action: AppActionsTypes): AppInitialStateType => {
    switch (action.type) {
        case "SET-INITIALIZED":
            return {...state, initialized: true}
        default:
            return state
    }
}

type AppActionsTypes = SetInitializedActionType

type SetInitializedActionType = ReturnType<typeof setInitializedAC>
const setInitializedAC = () => ({
        type: 'SET-INITIALIZED',
    } as const
)

export const initializeAppTC = () => (dispatch: ThunkDispatch<AppStateType, void, AppActionsTypes>) => {
    dispatch(setAuthUserAndAvatarThunkCreator())
        .then(() => {
            dispatch(setInitializedAC())
        })
}

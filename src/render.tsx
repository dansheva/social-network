import {addPost, stateType, updateNewPostText} from "./redux/state";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";

export const rerenderEntireTree = (state: stateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App addPost={addPost} state={state} updateNewPostText={updateNewPostText}/>
        </React.StrictMode>,
        document.getElementById('root'));
}
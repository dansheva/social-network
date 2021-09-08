import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import state, {addPost, stateType, subscribe, updateNewPostText} from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";

const rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App addPost={addPost} state={state} updateNewPostText={updateNewPostText}/>
        </React.StrictMode>,
        document.getElementById('root'));
}
rerenderEntireTree();
subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

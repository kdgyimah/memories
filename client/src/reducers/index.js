//  Combine all state changes
import { combineReducers } from "redux";
import posts from './posts';
// import comments from './comments';

export default combineReducers({
    posts:{
        author: "Kof",
        day: 'Thursday',
    },
});
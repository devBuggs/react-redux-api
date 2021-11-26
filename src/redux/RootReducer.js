import { combineReducers } from 'redux';
import appReducer from './reducers/appSlice';

const reducer = combineReducers({
    app: appReducer,
})

export default reducer
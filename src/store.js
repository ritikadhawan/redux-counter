import {createStore} from 'redux';
// inporting index file of reducers 
import rootReducer from './reducers';
const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
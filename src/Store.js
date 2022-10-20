import { createStore } from 'redux';
import rootReducer from './components/service/reducers/main';

const store = createStore (
    rootReducer
);

export default store;
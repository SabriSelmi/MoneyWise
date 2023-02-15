import { legacy_createStore } from 'redux';
import rootReducer from '.';


// Créer le store
const store = legacy_createStore(rootReducer);

export default store;

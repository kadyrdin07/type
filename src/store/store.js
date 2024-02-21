import { createStore } from 'redux';
import reduser from './Reduser.js';

const store = createStore(reduser);  
export default store
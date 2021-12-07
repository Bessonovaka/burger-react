import { combineReducers } from 'redux';
import { ingredients } from './ingredients';
import { ingredient } from './ingredient';
import { order } from './order';
import { auth } from './auth';

const rootReducer = combineReducers({
    ingredients,
    ingredient,
    order,
    auth
});

export default rootReducer;
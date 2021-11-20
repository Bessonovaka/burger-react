import { combineReducers } from 'redux';
import { ingredients } from './ingredients';
import { ingredient } from './ingredient';
import { order } from './order';

const rootReducer = combineReducers({
    ingredients,
    ingredient,
    order
});

export default rootReducer;
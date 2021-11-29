const initialState = {
    ingredients: [],
    actualIngredients: [],
}

export function ingredients(state = initialState, action) {
    switch (action.type) {
        case 'INGREDIENTS_FETCH_DATA_SUCCESS':
            return {
                ...state,
                ingredients:  action.ingredients 
            };
        case 'UPDATE_TYPE': {
            const newData = action.isBun ? [...state.actualIngredients, ...state.ingredients.filter(item => item._id === action.id && item.type !== 'bun')] 
            : 
            [...state.actualIngredients, ...state.ingredients.filter(item => item._id === action.id)];
            return {
                ...state,
                actualIngredients: [ ...newData ],
                ingredients: [...state.ingredients].map(item => {
                    if (item._id === action.id && item.type !== 'bun') {
                        item.__v = action.count
                    } else if (item._id === action.id && item.type === 'bun' && !action.isBun) {
                        item.__v = 2*action.count
                    };
                    return item;
                })
            };}
        case 'DELETE_INGREDIENT':
            return {
                ...state, 
                actualIngredients: [...state.actualIngredients].filter(item => item._id !== action.id),
                ingredients: [...state.ingredients].map(item => {
                    if (item._id === action.id ) {
                        item.__v -= 1;
                    }
                    return item;
                })
            };
        default:
            return state
    }
}
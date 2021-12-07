const initialState = {
    ingredients: [],
    actualIngredients: [],
}

export function ingredients(state = initialState, action) {
    switch (action.type) {
        case 'INGREDIENTS_FETCH_DATA_SUCCESS':
            return {
                ...state,
                ingredients: action.ingredients 
            };
        case 'UPDATE_TYPE': {
            const newData = (action.isBun) && (action.itemType === "bun") ? [ ...state.actualIngredients.filter(item => item.type !== 'bun'), {...state.ingredients.filter(item => item._id === action.id)[0], customID: action.customID}]
            : 
            [...state.actualIngredients, {...state.ingredients.filter(item => item._id === action.id)[0], customID: action.customID}];
            
            return {
                ...state,
                actualIngredients: [ ...newData ],
                ingredients: [...state.ingredients].map(item => {
                    if (item._id === action.id && item.type !== 'bun') {
                        item.__v = action.count + 1
                    } else if (item._id === action.id && item.type === 'bun' && !action.isBun) {
                        item.__v = 2
                    } else if (item._id === action.id && item.type === 'bun' && action.isBun) {
                        state.ingredients.filter(item => item._id !== action.id && item.type === 'bun')[0].__v = 0;
                        item.__v = 2;
                    };
                    return item;
                })
            };}
        case 'DELETE_INGREDIENT':{
            return {
                ...state, 
                actualIngredients: [...state.actualIngredients.filter(item => item.customID !== action.customID)],
                ingredients: [...state.ingredients].map(item => {
                    if (item._id === action.id ) {
                        item.__v -= 1;
                    }
                    return item;
                })
            };
        }
        case 'DROP_INGREDIENTS': {
            return {
                ...state, 
                actualIngredients: [...state.actualIngredients.filter(item => item.customID !== action.customID)],
            }
        }
        default:
            return state
    }
}
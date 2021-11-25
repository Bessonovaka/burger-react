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
            }
        case 'UPDATE_TYPE': 
            return {
                ...state,
                actualIngredients: [...state.actualIngredients, ...state.ingredients.filter(item => item._id === action.id)],
            }
        default:
            return state
    }
}
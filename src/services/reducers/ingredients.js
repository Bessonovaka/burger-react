export function ingredients(state = [], action) {
    switch (action.type) {
        case 'INGREDIENTS_FETCH_DATA_SUCCESS':
            return action.ingredients
        default:
            return state
    }
}
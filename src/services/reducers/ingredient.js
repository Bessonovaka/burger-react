export function ingredient(state = {}, action) {
    switch (action.type) {
        case 'SET_SELECTED_INGREDIENT':
            return action.ingredient
        default:
            return state
    }
}
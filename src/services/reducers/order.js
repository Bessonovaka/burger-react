export function order(state = {}, action) {
    switch (action.type) {
        case 'POST_ORDER_SUCCESS':
            return action.orderNumber
        default:
            return state
    }
}
import { CREATE_ORDER } from "./checkoutActions"

const initialState = {
    orderId: null,
    status: ""
}

const checkoutReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_ORDER:
            return{
                orderId: action.payload.id,
                status: action.payload.status
            };

        default:
            return {...state}
    }
}

export default checkoutReducer;
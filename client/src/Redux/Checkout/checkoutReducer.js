import { GET_PAYMENT_DETAIL } from "./checkoutActions"

const initialState = {
    orderId: null,
    status: ""
}

const checkoutReducer = (state = initialState, action) => {
  
    switch (action.type) {
        case GET_PAYMENT_DETAIL:
            return{
                orderId: action.payload.id,
                status: action.payload.status
            };

        default:
            return {...state}
    }
}

export default checkoutReducer;
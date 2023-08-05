import { POST_BILL } from "./checkoutActions"

const initialState = {
    bill: {}
}

const checkoutReducer = (state = initialState, action) => {
  
    switch (action.type) {
        case POST_BILL:
            return{
                bill: action.payload
            };

        default:
            return {...state}
    }
}

export default checkoutReducer;
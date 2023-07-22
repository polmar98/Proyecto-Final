export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_ONE_FROM_CART = 'REMOVE_ONE_FROM_CART';
export const REMOVE_ALL_FROM_CART = 'REMOVE_ALL_FROM_CART';
export const CLEAN_CART = 'CLEAN_CART';


export const add_to_cart = (item) => {
    return {
        type: ADD_TO_CART,
        payload: item
    }

}

export const remove_one_from_cart = (id) => {
    return {
        type: REMOVE_ONE_FROM_CART,
        payload: id
    }
}

export const clean_cart = () => {
    return {
        type: CLEAN_CART,
}
}
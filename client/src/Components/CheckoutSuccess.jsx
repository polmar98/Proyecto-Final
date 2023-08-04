import React, { useEffect } from "react";
import {useDispatch} from "react-redux";
import { useSelector } from "react-redux";
import { get_pay_info } from "../Redux/Checkout/checkoutActions";

const CheckoutSuccess = () => {
    const dispatch= useDispatch();
    const status = useSelector(state => state.checkout.status)

    console.log('en success', status)


    useEffect(() => {
        dispatch(get_pay_info());

    })
    return(
        <div>
            {status ? <h1>Compra exitosa</h1> : <h1>Compra rechazada</h1>}
        </div>

    )
}

export default CheckoutSuccess;
import React, {useEffect, useContext, useState} from "react"
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom";
import { authContext } from "../../Context/authContext";
import { get_all_bills } from "../../Redux/Checkout/checkoutActions";

const Packages = () => {
    const { currentUser } = useContext(authContext);
    const dispatch = useDispatch();
    const allBills = useSelector(state => state.checkout.allBills)
    

    console.log(currentUser)
    const userBills = allBills?.filter(bill => bill.uidUser === currentUser.uid)
     console.log('boletas', userBills)

    //  const items = (userBills && userBills.map(el => el.ItemsBills))
    // console.log('items', items)




    useEffect(() => {
        if(currentUser){
            dispatch(get_all_bills())     
        }
    }, [currentUser])

    return(
        <div className=" fontPoppins">
            <div className="text-gray-800 font-bold text-2xl text-left uppercase mb-8">
                <h1>Mis viajes</h1>
            </div>
            <div className="flex flex-col items-center space-y-4 w-full">
        {userBills &&
          userBills.map((order, index) => (
            <Link to={"/"}>
            <div key={index} className="bg-verdeFooter block bg-opacity-80 rounded-xl shadow-xl p-4">
              
              {order.ItemsBills.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-200">
                  {item.title}
                    </li>
              ))}
              
              <h4 className="text-gray-400">USD {order.fullValue}</h4>
              <h4 className="text-gray-400">Comprado el {order.createdAt.split("T")[0].toString()}</h4>
            </div>
            </Link>
          ))}
            </div>
      </div>
      
      
    //   <div className="space-y-4 w-6/ items-center">
    //         {userBills &&
    //     userBills.map((order, index) => (
    //       <div key={index} className="bg-verdeFooter w-2/3 rounded-xl shadow-xl p-4">
    //         {/* Render individual items for each order */}
    //         {order.ItemsBills.map((item, itemIndex) => (
    //           <div key={itemIndex}
    //           className="">
    //             <p>{item.title}</p>
    //             {/* Add other properties of 'item' here */}
    //           </div>
    //         ))}
    //         <h4 className="text-gray-600">USD {order.fullValue}</h4>
    //         <h4 className="text-gray-600 ">Comprado el {order.createdAt.split("T")[0].toString()}</h4>
    //       </div>
    //     ))}



       
            
    //         </div>
    )
}

export default Packages

{/* {items && items.map((el) => 
<div>{el.title}</div>)}

{userBills && userBills.map((order, index) =>
        <div key={index}>
            {order.ItemsBills.map((item, index) => <span key={index}>{item.title}</span>)}
            <span>USD {order.fullValue}</span>
            <span>Comprado el {order.createdAt.split('T')[0].toString()}</span>
        </div>
    
)} */}
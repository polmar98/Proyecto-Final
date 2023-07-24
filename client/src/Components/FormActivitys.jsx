import React, { useEffect, useState} from "react";
import { useDispatch,useSelector} from "react-redux";
import {AiOutlineCheckSquare} from 'react-icons/ai'
import { AiOutlineMinusSquare} from 'react-icons/ai'

export default function FormNewHoltel({onHideForm}){

    const [newActivity, setNewActivity] = useState({
        name:"",
        image:"",
        price:0,
        included:false,
        duration:""
      }); 

}

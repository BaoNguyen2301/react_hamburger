import { ADD_REMOVE_BREADMID } from "../Type/BaiTapBurgerType";

export const addRemoveBreadMid = (propsBurger, amount)=>{
    return{
        type: ADD_REMOVE_BREADMID,
        propsBurger,
        amount
    }
}
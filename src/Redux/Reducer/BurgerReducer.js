import { ADD_REMOVE_BREADMID } from "../Type/BaiTapBurgerType";

const burgerState = {
    burger: { salad: 1, cheese: 1, beef: 1 },
    menu: {
        salad: 10000,
        cheese: 20000,
        beef: 85000
    },
    total: 115000
}

const BurgerReducer = (state = burgerState, action) => {
    switch (action.type) {
        case ADD_REMOVE_BREADMID: {
            if(action.amount === -1 && state.burger[action.propsBurger] < 1){
                return {...state}
            }
            let burgerUpdate = {...state.burger};
            burgerUpdate[action.propsBurger] += action.amount;
            state.burger = burgerUpdate;
            state.total += action.amount * state.menu[action.propsBurger];
            return { ...state }
        }
        default:
            return { ...state }
    }
}

export default BurgerReducer;
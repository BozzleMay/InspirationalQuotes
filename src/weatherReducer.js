import { ActionTypes } from "./contstants/action-types"

const defaultState = {
    weather: {
        temperature: 76,
        icon: 'blue',
        conditions: 'red',
    },
    loading: false,
    error: null,
    }

const weatherReducer = (state = defaultState, action) => {
    switch(action.type) {
        case ActionTypes.FETCH_PRODUCTS_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            }
        case ActionTypes.FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                weather: {
                    temperature: action.payload.data.main.temp,
                    conditions: action.payload.data.weather[0].main,
                    icon: action.payload.data.weather[0].icon,
                }
            }
        case ActionTypes.FETCH_PRODUCTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                weather: []
            }
        default:
            return state
    }

}
export default weatherReducer
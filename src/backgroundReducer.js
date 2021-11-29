import { ActionTypes } from "./contstants/action-types"

const defaultState = {
    backgrounds: [],
    loading: false,
    error: null,
    }

const backgroundReducer = (state = defaultState, action) => {
    switch(action.type) {
        case ActionTypes.FETCH_BACKGROUND_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            }
        case ActionTypes.FETCH_BACKGROUND_SUCCESS:
            return {
                ...state,
                loading: false,
                backgrounds: [action.payload.data]
            }
        case ActionTypes.FETCH_BACKGROUND_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                backgrounds: []
            }
        default:
            return state
    }

}
export default backgroundReducer
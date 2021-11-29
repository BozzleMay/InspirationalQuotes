import { ActionTypes } from "./contstants/action-types"

const defaultState = {
    quotes: {
        quote: 'Loading...',
        author: ''
        
    },
    loading: false,
    error: null,
    }

const quotesReducer = (state = defaultState, action) => {
    switch(action.type) {
        case ActionTypes.FETCH_QUOTES_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            }
        case ActionTypes.FETCH_QUOTES_SUCCESS:
            return {
                ...state,
                loading: false,
                quotes: {
                    quote: action.payload.data.contents.quotes[0].quote,
                    author: action.payload.data.contents.quotes[0].author
                    
                }
            }
        case ActionTypes.FETCH_QUOTES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                quotes: []
            }
        default:
            return state
    }

}
export default quotesReducer
import {ActionTypes} from '../contstants/action-types'

export const fetchProductsBegin = () => {
  return  {
        type: ActionTypes.FETCH_PRODUCTS_BEGIN
    }
}
export const fetchProductsSuccess = (data) => {
    return  {
          type: ActionTypes.FETCH_PRODUCTS_SUCCESS,
          payload: data
      }
  }
  export const fetchProductsFailure = (error) => {
    return  {
          type: ActionTypes.FETCH_PRODUCTS_FAILURE,
          payload: error
      }
  }
  export const fetchQuotesBegin = () => {
    return  {
          type: ActionTypes.FETCH_QUOTES_BEGIN
      }
  }
  export const fetchQuotesSuccess = (data) => {
      return  {
            type: ActionTypes.FETCH_QUOTES_SUCCESS,
            payload: data
        }
    }
    export const fetchQuotesFailure = (error) => {
      return  {
            type: ActionTypes.FETCH_QUOTES_FAILURE,
            payload: error
        }
    }
    export const fetchBackgroundBegin = () => {
        return  {
              type: ActionTypes.FETCH_BACKGROUND_BEGIN
          }
      }
      export const fetchBackgroundSuccess = (data) => {
          return  {
                type: ActionTypes.FETCH_BACKGROUND_SUCCESS,
                payload: data
            }
        }
        export const fetchBackgroundFailure = (error) => {
          return  {
                type: ActionTypes.FETCH_BACKGROUND_FAILURE,
                payload: error
            }
        }
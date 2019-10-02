import { GET_POSTS_START, GET_POSTS_SUCCESS, GET_POSTS_FAILURE } from "../actions/index.js";

const initialState = {
    posts: [],
    isFetching: false,
    error: ""
}
const reducer = (state=initialState, action) => {
    switch(action.type) {
        case GET_POSTS_START:
            return {
                ...state,
                isFetching: true,
                error: ""
            }
        case GET_POSTS_SUCCESS: 
            return {
                ...state,
                posts: action.payload,
                isFetching: false
            }
        case GET_POSTS_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        default: 
            return state        
    }

}

export default reducer;
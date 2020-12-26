import {SET_PRELOADING} from '../actions/preloadingAction';

const setPreloadingReducer = (state = {preloading : true}, {type, payload}) => {
    switch(type) {
        case SET_PRELOADING :
            return payload;
        default :
            return state;
    }
}
export default setPreloadingReducer
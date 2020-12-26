import {BG_CHANGE} from '../actions/changeBgAction'
import defaultbg from '../../../public/images/background.png'

const changeBgReducer = (state = {background : defaultbg}, {type, payload}) => {
    switch(type) {
        case BG_CHANGE :
            return payload;
        default :
            return state;
    }
}
export default changeBgReducer
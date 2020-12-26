export const SET_PRELOADING = 'set:preloading'

export const setPreloading = () => {
    return {
        type: SET_PRELOADING,
        payload : { preloading : false }
    }
}       
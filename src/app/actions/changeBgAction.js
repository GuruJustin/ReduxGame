export const BG_CHANGE = "Background:Change"

export const changeBackground = (bg) => {
    return {
        type: BG_CHANGE,
        payload : { background : bg }
    }
}
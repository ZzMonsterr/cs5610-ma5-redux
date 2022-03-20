

const colorObject = {"1": true, "2": true, "3": true, "4": true}
const colorReducer = (state = colorObject, action) => {
    switch(action.type) {
        case "change":
            const id = action.payload.toString();
            state[id] = !state[id]
            return state
        default:
            return state
    }
}

export default colorReducer
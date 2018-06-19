export default function statusConnectionReducer (state = null, action) {
    switch(action.type) {
        case "CONNECTED":
        case "CONNECTING":
        case "DISCONNECTED":
            {
            console.log('action.payload');
            return action.payload;
            }
        default:
            return state;
    }
}
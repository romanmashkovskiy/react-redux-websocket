import *

export function connectedSuccess() {
    return {
        type: "CONNECTED",
        payload: true
    }
}

//
// export function disconnected() {
//
// }
//
// export function messageReceived() {
//
// }
//
// export function connecting() {
//
// }
export const connectServer = (url) => {
    console.log('action');
    return {
        type: "CONNECT",
        payload: url
    }
};
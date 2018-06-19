import * as actions from './action-types'

// for reducer
export function connectionStart() {
    return {
        type: actions.CONNECTING,
        payload: "connecting"
    }
}

export function connectionSuccess() {
    return {
        type: actions.CONNECTED,
        payload: "connected"
    }
}

export function connectionStop() {
    return {
        type: actions.DISCONNECTED,
        payload: "disconnected"
    }
}

export const addToSentMessage = (message) => {
    return {
        type: actions.ADD_TO_SENT_MESSAGE,
        payload: message
    }
};

export const addToReceivedMessage = (message) => {
    return {
        type: actions.ADD_TO_RECEIVED_MESSAGE,
        payload: message
    }
};

export const currentLocation = (url) => {
    return {
        type: actions.ADD_CURRENT_LOCATION,
        payload: url
    }
};



//for middleware
export const connectServer = (url) => {
    return {
        type: actions.CONNECT_SERVER,
        payload: url
    }
};

export const disconnectServer = () => {
    return {
        type: actions.DISCONNECT_SERVER
    }
};

export const sendMessage = (message) => {
    return {
        type: actions.SEND_MESSAGE,
        payload: message
    }
};
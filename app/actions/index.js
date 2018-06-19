


// for reducer
export function connectionStart() {
    console.log('CONNECTING_action');
    return {
        type: "CONNECTING",
        payload: 22
    }
}

export function connectionSuccess() {
    console.log('CONNECTED_action');
    return {
        type: "CONNECTED",
        payload: 11
    }
}

export function connectionStop() {
    console.log('DISCONNECTING_action');
    return {
        type: "DISCONNECTED",
        payload: 33
    }
}

//for middleware
export const connectServer = (url) => {
    console.log('CONNECT_SERVER_action');
    return {
        type: "CONNECT_SERVER",
        payload: url
    }
};

export const disconnectServer = (url) => {
    console.log('DISCONNECT_SERVER_action');
    return {
        type: "DISCONNECT_SERVER",
        payload: url
    }
};
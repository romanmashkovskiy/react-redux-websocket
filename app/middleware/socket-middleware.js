import { connectionSuccess, connectionStart, connectionStop, addToSentMessage, addToReceivedMessage, currentLocation } from '../actions/index'
import * as actions from '../actions/action-types'

const socketMiddleware = (function(){
    let socket = null;

    const onOpen = (ws,store) => evt => {
        store.dispatch(connectionSuccess());
    };

    const onClose = (ws,store) => evt => {
        store.dispatch(connectionStop());
    };

    const onMessage = (ws,store) => evt => {
        let msg = JSON.parse(evt.data);
        store.dispatch(addToReceivedMessage(msg));
     };

    return store => next => action => {
        switch(action.type) {
            case actions.CONNECT_SERVER:
                if(socket != null) {
                    socket.close();
                }
                store.dispatch(currentLocation(action.payload));
                store.dispatch(connectionStart());
                socket = new WebSocket(action.payload);
                socket.onmessage = onMessage(socket,store);
                socket.onclose = onClose(socket,store);
                socket.onopen = onOpen(socket,store);
                // socket.onerror = function(error) {
                //     alert("Ошибка " + error.message);
                // };

                break;

            case actions.DISCONNECT_SERVER:
                if(socket != null) {
                    socket.close();
                }
                socket = null;
                store.dispatch(connectionStop());
                break;

            case actions.SEND_MESSAGE:
                socket.send(JSON.stringify(action.payload));
                store.dispatch(addToSentMessage(action.payload));
                break;
            default:
                return next(action);
        }
    }

})();

export default socketMiddleware
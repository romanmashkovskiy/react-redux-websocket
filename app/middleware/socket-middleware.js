import {connectionSuccess, connectionStart, connectionStop, disconnectServer} from '../actions/index'

const socketMiddleware = (function(){
    var socket = null;

    const onOpen = (ws,store) => evt => {
        console.log('onopen__middleware');
        store.dispatch(connectionSuccess());
    };

    // const onError = (ws,store) => evt => {
    //     console.log('error');
    //     //Send a handshake, or authenticate with remote end
    //
    //     //Tell the store we're connected
    // }

    const onClose = (ws,store) => evt => {
        console.log('onclose__middleware');
        store.dispatch(connectionStop());
    };
    //
    // const onMessage = (ws,store) => evt => {
    //     //Parse the JSON message received on the websocket
    //     var msg = JSON.parse(evt.data);
    //     switch(msg.type) {
    //         case "CHAT_MESSAGE":
    //             //Dispatch an action that adds the received message to our state
    //             store.dispatch(actions.messageReceived(msg));
    //             break;
    //         default:
    //             console.log("Received unknown message type: '" + msg.type + "'");
    //             break;
    //     }
    // }

    return store => next => action => {
        switch(action.type) {

            //The user wants us to connect
            case 'CONNECT_SERVER':
                console.log('CONNECT_SERVER_middleware');
                if(socket != null) {
                    socket.close();
                }
                store.dispatch(connectionStart());
                socket = new WebSocket(action.payload);
                // socket.onmessage = onMessage(socket,store);
                socket.onclose = onClose(socket,store);
                socket.onopen = onOpen(socket,store);
                // socket.onerror = function(error) {
                //     alert("Ошибка " + error.message);
                // };

                break;

            case 'DISCONNECT_SERVER':
                if(socket != null) {
                    socket.close();
                }
                socket = null;
                store.dispatch(connectionStop());
                break;

            //Send the 'SEND_MESSAGE' action down the websocket to the server
            // case 'SEND_CHAT_MESSAGE':
            //     socket.send(JSON.stringify(action));
            //     break;
            //
            // //This action is irrelevant to us, pass it on to the next middleware
            // default:
            //     return next(action);
        }
    }

})();

export default socketMiddleware
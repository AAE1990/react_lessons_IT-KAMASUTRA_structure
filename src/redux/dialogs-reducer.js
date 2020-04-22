const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        { id: 1, name: 'Anton' },
        { id: 2, name: 'Dima' },
        { id: 3, name: 'Alex' },
        { id: 4, name: 'Lexa' },
        { id: 5, name: 'Sveta' },
        { id: 6, name: 'Lera' }
    ],
    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How is your' },
        { id: 3, message: 'Yo' },
        { id: 4, message: 'thanks' },
        { id: 5, message: 'What?' }
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, { id: 6, message: body }]
            };
        default:
            return state;
    }
}


export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody })

export default dialogsReducer;
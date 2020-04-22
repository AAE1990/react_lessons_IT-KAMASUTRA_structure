import React from 'react';
import s from './Dialogs.module.css';
import NameAndId from './Name&Id/NameAndId';
import Message from './Message/Message';
import { Field, reduxForm } from 'redux-form';
import { Redirect } from 'react-router-dom';
import AddMessageForm from './AddMessageForm/AddMessageForm';

const Dialogs = (props) => {

    let state = props.dialogsPage;

    // let imageElement = state.images.map( img => <ImageAvatar />);
    let dialogsElements = state.dialogs.map(d => <NameAndId name={d.name} key={d.id} id={d.id} />);
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} />);
    let newMessageBody = state.newMessageBody;

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }

    //if (!props.isAuth) return <Redirect to={"/login"} />

    return (
        <div className={s.dialog + ' ' + s.active}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                <div>{messagesElements}</div>
            </div>
            <AddMessageForm onSubmit={addNewMessage} />
        </div>
    )
}

export default Dialogs; 
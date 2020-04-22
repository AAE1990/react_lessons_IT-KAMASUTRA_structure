import React, { Component } from 'react';
import s from './MyPosts.module.css';
import Posts from './Post/Posts';
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator } from "../../../utils/validators/validators"
import { Textarea } from '../../common/FormsControls/FormsControls';
import { render } from 'react-dom';

const maxLength10 = maxLengthCreator(10);

let AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea} name="newPostText"
          placeholder={"Post message"} validate={[required, maxLength10]} />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
}

let AddNewPostFormRedux = reduxForm({ form: "ProfileAddNewPostForm" })(AddNewPostForm)

const MyPosts = React.memo(props => {
    let postElements = 
      [...props.posts].reverse().map(p => <Posts key={p.id} message={p.message} likesCount={p.likesCount} />);

    //let newPostElement = React.createRef();

    let onAddPost = (values) => {
      props.addPost(values.newPostText);
    }

    return (
      <div className={s.postsBlock}>
        <h3>My posts</h3>
        <AddNewPostFormRedux onSubmit={onAddPost} />
        <div className={s.post}>
          {postElements}
        </div>
      </div>
    )
});

export default MyPosts;
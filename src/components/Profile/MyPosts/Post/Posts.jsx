import React from 'react';
import s from './Posts.module.css';

const Posts = (props) => {

  return (
    <div className={s.item}>
      <img src='https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/be/bedd1c43a23171579086474638f5a9d2249a765a_medium.jpg' />
      {props.message}
      <div>
        <span>like</span> {props.likesCount}
      </div>
    </div>
  )
}

export default Posts;
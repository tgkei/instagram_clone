import React from 'react'
import './Post.css';
import Avatar from '@material-ui/core/Avatar';

function Post() {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__Avatar"
          alt="hi"
          src="/static/images/avatar/1.jps"
        />
        <h3>Username</h3>
      </div>
      {/*header -> avatar & user_name */}
      <img className="post__img" src="https://images.unsplash.com/photo-1497515114629-f71d768fd07c?ixlib=rb-1.2.1&w=1000&q=80" alt="coffee" />
      <h4 className="post__text"> <strong>Username</strong> caption</h4>
    </div>
  )
}

export default Post

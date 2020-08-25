import React, {useState, useEffect} from 'react'
import './Post.css';
import Avatar from '@material-ui/core/Avatar';
import {db} from './firebase.js';
import firebase from 'firebase';

function Post({user, postId, username, caption, imageUrl}) {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  useEffect(() => {
    let unsubscribe;

    if (postId) {
      unsubscribe = db
        .collection("posts")
        .doc(postId)
        .collection("comments")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          setComments(snapshot.docs.map((doc) => doc.data()));
        });
    }
  }, [postId])


  const postComment = (e) => {
    e.preventDefault();

    db.collection("posts").doc(postId).collection("comments").add({
      text: comment,
      username: user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    setComment('');
  }

  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__Avatar"
          alt="hi"
          src="/static/images/avatar/1.jps"
        />
        <h3>{username}</h3>
      </div>
      <img className="post__img" src={imageUrl} alt="coffee" />
      <h4 className="post__text"> <strong>{username}</strong> {caption}</h4>
      {
        <div className="post__comments">
          {
            comments.map(comment => (
              <p>
                <strong>{comment.username}</strong> {comment.text}
              </p>
            ))
          }
        </div>
      }
      {user && <form className="post__commentBox">
        <input
          className="post__comment"
          type="text"
          placeholder="Add a comment..."
          value={comment}
          onChange={e => setComment(e.target.value)}
        ></input>
        <button
          className="post__button"
          disabled={!comment}
          type="submit"
          onClick={postComment}
        >Post</button>
      </form>}
    </div>
  )
}

export default Post

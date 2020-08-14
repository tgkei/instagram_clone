import React, {useState} from 'react';
import './App.css';
import Post from './Post.js';

function App() {
  const [posts, setPosts] = useState([
    {
      username: "tg",
      caption: "Check1",
      imageUrl: "https://images.unsplash.com/photo-1497515114629-f71d768fd07c?ixlib=rb-1.2.1&w=1000&q=80"
    },
    {
      username: "kim",
      caption: "check2",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/3D_medical_animation_corona_virus.jpg/800px-3D_medical_animation_corona_virus.jpg"
    },
    {
      username: "test",
      caption: "Pig",
      imageUrl: "https://images-na.ssl-images-amazon.com/images/I/61WdixjupoL._AC_SX679_.jpg"
    },
    {
      username: "who am i",
      caption: "I'm kim",
      imageUrl: "https://www.ie.edu/exponential-learning/blog/wp-content/uploads/2018/01/MachineLearninginMarketing-1621x1000.jpg"
    }
  ]);
  return (
    <div className="app">
      <div className="app__header">
        <img className="app__headerImage" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="insta logo" />
      </div>

      {
        posts.map(post => (
          <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
        )
        )
      }
    </div>
  );
}

export default App;

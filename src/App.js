import React, {useState} from 'react';

import CreatePost from './post/CreatePost';
import PostList from './post/PostList';
import UserBar from './user/UserBar';

import './App.css';

const defaultPosts = [
  { title: 'React Hooks', content: 'The greatest thing since sliced bread!', author: 'Eduardo Borges'},
  { title: 'Using React Fragments', content: 'Keeping the DOM tree clean!', author: 'Eduardo Borges'}
];

function App() {
  const [posts, setPosts] = useState(defaultPosts);
  const [user, setUser] = useState('');
  
  //return <Login />
  //return <Logout user="Eduardo Borges" />
  //return <Register />

  //return <Post title="React hooks" content="The greatest thing since sliced bread!" author="Eduardo Borges" />
  //return <CreatePost />
  
  if(user){
    return (    
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="float-right">
            <UserBar user={user} setUser={setUser} />
            </div>
          </div>       
        </div>              

        <div className="row justify-content-center">
          <div className="col-md-8">
            <CreatePost user={user} setPosts={setPosts} posts={posts} />
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-8">
            <PostList posts={posts} />
          </div>  
        </div>
      </div>
    )
  }else{
    return(
      <UserBar user={user} setUser={setUser} />
    )   
  }    
}

export default App;

import React, {useState} from 'react';

export default function CreatePost({user, setPosts, posts}){
    const [title, setTitle] = useState('');
    const [comment, setComment] = useState('');
   
    function handleTitle(evt){
        setTitle(evt.target.value);
    }

    function handleComment(evt){
        setComment(evt.target.value);
    }

    function addPost(){  
        const newPost = {title, content:comment, author:user};
        setPosts([newPost, ...posts]); 
    }


    return (
        <form onSubmit={e => {e.preventDefault(); addPost()}} >
            <div>Author: <b>{user}</b></div>
            <div className="form-group">
                <label htmlFor="create-title">Title:</label>
                <input type="text" className="form-control" onChange={handleTitle} value={title} name="create-title" id="create-title"/>
            </div>

            <div className="form-group">
                <label htmlFor="create-text-area">Comment:</label>
                <textarea className="form-control" onChange={handleComment} value={comment} />
            </div>
            
            <input type="submit" value="Create" className="btn btn-primary"  />
        </form>
    )
}
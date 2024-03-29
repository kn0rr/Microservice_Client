import React, {useState, useEffect} from 'react';
import axios from 'axios';

import CommentCreate from './CommentCreate';

const PostList = () => {

    const [posts,setPosts] =useState({});

    const fetchPosts= async () =>{
        const res= await axios.get('http://localhost:4000/posts');

        setPosts(res.data);
    };

    useEffect(()=>{
        fetchPosts();
    }, [])

    const renderedPosts = Object.values(posts).map( post =>{
        return <div className="card" 
        style={{width: '20%', marginBottom: '20px'}}
        key={post.id}
        >
          <div className="card-body"  >
              <h3>{post.title}</h3>
              <CommentCreate postId={post.id}/>
          </div>
        </div>
    }); //Object.values deliveres an array of the values of posts

    return <div className="d-flex flex-row flex-warp justify-content-between">
        {renderedPosts}
    </div>
}

export default PostList;
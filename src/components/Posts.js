import React from 'react';
import PostItem from './PostItem';
import { useDispatch,useSelector } from 'react-redux';
import { getPosts } from '../features/post/postSlice';

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state)=>state.post.posts)
  if (!posts){
    return 'нет постов'
  }
  return (
    <div>
      <button onClick={()=>dispatch(getPosts())} type="submit" className="bg-lime-300  hover:bg-lime-400 transition-all p-2 text-sm">
        Get posts
      </button>
      {posts.map((post)=>{
        return (
            <PostItem key={posts.title} post={post}/>
        )
      })}
      <PostItem />
    </div>
  );
};

export default Posts;

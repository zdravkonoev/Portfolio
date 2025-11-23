import React, { useEffect } from 'react'
import { useState } from 'react';
import Post from './Post.jsx';
import Header from '../header/Header.jsx'
import { useLocation } from 'react-router-dom';

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const BASE_URL = 'http://localhost:3030/jsonstore/blog-portfolio/';

  useEffect(() => {
    document.title = "Blog - Colleague's Portfolio";

    (async () => {
      try {
        const response = await fetch(BASE_URL);
        const data = await response.json();
        //setPosts(Object.values(data.posts));

        setPosts(Object.entries(data.posts).map(([key, value]) => ({
            postRefId: key,
            ...value
          }))
        );
        console.log(data.posts);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      }
    })();

    ////Non async version
    // fetch('http://localhost:3030/jsonstore/blog-portfolio/')
    //   .then(response => response.json())
    //   .then(data => {
    //     // Handle the fetched data
    //     setPosts(Object.values(data.posts));
    //     console.log(Object.values(data.posts));
    //   })
    //   .catch(error => {
    //     console.error('Error fetching blog posts:', error);
    //   }); 


  }, []);

  // To remove Header if I'm not in Blog Page
  const { pathname } = useLocation();

  return (
    <>
      {pathname === "/blog" && <Header />}
      <div className="bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">Blog</h2>
            <p className="mt-2 text-lg/8 text-gray-300">Here are the post form my colleagues about my work wiht them.</p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-700 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {
              posts.length > 0 ?
              //Object.values(posts).map(post => (
              (Object.entries(posts).map(([key, post]) => (
                  <Post 
                    key={key}
                    {...post}
                    postRefId={post.postRefId}
                    // _id={post.id} 
                    // title={post.title} 
                    // date={post.date}
                    // datetime={post.datetime} 
                    // category= {post.category}
                    // description={post.description} 
                    // author={post.author} 
                    // href={post.href} 
                  />
              )
            ))
            :<p className="text-gray-400">No posts available.</p>
            }
          </div>
        </div>
      </div>
    </>
  )
}
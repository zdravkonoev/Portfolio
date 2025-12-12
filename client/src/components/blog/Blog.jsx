import Post from './Post.jsx';
import Header from '../header/Header.jsx'
import { Link } from 'react-router-dom';  
import useRequest from '../../hooks/useRequest.js';
import { useContext } from "react";
import UserContext from "../../contexts/UserContext.jsx";

export default function Blog() {
  
  const {user} = useContext(UserContext);

  const { data: posts } = useRequest('/data/posts?sortBy=_createdOn%20desc', []);

  console.log(posts);
  //console.log(updatedPosts);


  //const BASE_URL = 'http://localhost:3030/jsonstore/blog-portfolio/';

  //useEffect(() => {
  //  
  //  (async () => {
  //    try {
  //      const response = await fetch(BASE_URL);
  //      const data = await response.json();
  //      //setPosts(Object.values(data.posts));
//
  //      setPosts(Object.entries(data.posts).map(([key, value]) => ({
  //          postRefId: key,
  //          ...value
  //        }))
  //      );
  //      console.log(data.posts);
  //    } catch (error) {
  //      console.error('Error fetching blog posts:', error);
  //    }
  //  })();
//
  //  ////Non async version
  //  // fetch('http://localhost:3030/jsonstore/blog-portfolio/')
  //  //   .then(response => response.json())
  //  //   .then(data => {
  //  //     // Handle the fetched data
  //  //     setPosts(Object.values(data.posts));
  //  //     console.log(Object.values(data.posts));
  //  //   })
  //  //   .catch(error => {
  //  //     console.error('Error fetching blog posts:', error);
  //  //   }); 
//
//
  //}, []);

  // To remove Header if I'm not in Blog Page
  // const { pathname } = useLocation();

  return (
    <>
      {/* {pathname === "/blog" && <Header />} */}
      <div className="bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div  className="relative mt-8 flex items-center gap-x-4">
            <div className="mx-auto lg:mx-0 flex-1">
              <h2 className="text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">Blog</h2>
              <p className="mt-2 text-lg/8 text-gray-300">Here are the post form my colleagues about my work wiht them.</p>
            </div>
            <div>{!user ? null :
                <Link to="/blog/post-create" className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                  Create Post
                </Link>
}
            </div>
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
import Hero from '../hero/Hero.jsx'
import Experience from '../experience/Experience.jsx'
import Statistics from '../statistics/Statistics.jsx'
import Technologies from '../technologies/Technologies.jsx'
import Post from '../blog/Post.jsx';
import useRequest from '../../hooks/useRequest.js';

export default function Home() {



  const {data: latestPosts} = useRequest('/data/posts?sortBy=_createdOn%20desc&pageSize=3',[]);
  console.log(latestPosts)
  
  //const BASE_URL = 'http://localhost:3030/jsonstore/blog-portfolio/';

  //const [latestPosts, setLatestPosts] = useState([]);
  

  //useEffect(() => {
//
  //  fetch(BASE_URL)
  //    .then(response => response.json())
  //    .then(data => {
  //      // Handle the fetched data
  //      const latestPosts =  Object.entries(data.posts).map(([key, value]) => ({
  //          postRefId: key,
  //          ...value
  //        }))
  //      .sort((a, b) => new Date(b.date) - new Date(a.date))
  //      .slice(0, 3);
//
  //      console.log(latestPosts);
  //      setLatestPosts(latestPosts);
  //    }).catch(error => {
  //      console.error('Error fetching blog posts:', error);
  //    });
//
  //    // !!!useEffect DO NOT SUPPORT ASYNC FUCTIONS!!!!
  //    //(async () => {
  //    //  try {
  //    //    const response = await fetch(BASE_URL);
  //    //    const data = await response.json();
  //    //    setLatestPosts(Object.values(data.latestPosts));
  //    //    
  //    //    //Console log for checking fetched posts
  //    //    console.log(Object.values(data.latestPosts));
  //    //
  //    //  } catch (error) {
  //    //    console.error('Error fetching blog posts:', error);
  //    //  }
  //    //})();
//
  //}, []);

  return (
    <>
      <Hero />
      <Experience />
      <Statistics />
      <Technologies />
      {/* <Blog /> */}
      <div className="bg-gray-900 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">Blog</h2>
              <p className="mt-2 text-lg/8 text-gray-300">Here are the latest post form my colleagues about my work wiht them.</p>
            </div>
            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-700 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {latestPosts.length > 0 ?
                (Object.entries(latestPosts).map(([key, post])  => (
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
                  )))
                  :
                  <p className="text-gray-400">No posts available.</p>
              }
            </div>
          </div>
        </div>
    </>
  )
}
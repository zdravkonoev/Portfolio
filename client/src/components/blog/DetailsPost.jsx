import { useEffect } from 'react';
import { useParams } from 'react-router'
import { useState } from 'react';

export default function DetailsPost() {
    const {postId} = useParams();
    const [post, setPost] = useState({});

    console.log(postId);

    useEffect(() => {
        fetch(`http://localhost:3030/jsonstore/blog-portfolio/posts/${postId}`)
            .then(response => response.json())
            .then(result => {
                console.log(result);
                setPost(result)
            })
            .catch(error => console.error('Error fetching post details:', error));
    }, [postId]);

    if (!post) return <p>Loading...</p>;

    console.log(post);

return (
    <div className="bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">Post Details</h2>
                <p className="mt-2 text-lg/8 text-gray-300">Here are the post form my colleagues about my work wiht them.</p>
            </div>
            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-700 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                    <div className="flex items-center gap-x-4 text-xs">
                        <time dateTime={post.datetime} className="text-gray-400">
                        {post.date}
                        </time>
                        <a
                        href={post.category.href}
                        className="relative z-10 rounded-full bg-gray-800/60 px-3 py-1.5 font-medium text-gray-300 hover:bg-gray-800"
                        >
                        {post.category.title}
                        </a>
                    </div>
                    <div className="group relative grow">
                        <h3 className="mt-3 text-lg/6 font-semibold text-white group-hover:text-gray-300">
                        <a href={post.href}>
                            <span className="absolute inset-0" />
                            {post.title}
                        </a>
                        </h3>
                        <p className="mt-5 line-clamp-3 text-sm/6 text-gray-400">{post.description}</p>
                    </div>
                    <div className="relative mt-8 flex items-center gap-x-4 justify-self-end">
                        <img alt="" src={post.author.imageUrl} className="size-10 rounded-full bg-gray-800" />
                        <div className="text-sm/6">
                        <p className="font-semibold text-white">
                            <a href={post.author.href}>
                            <span className="absolute inset-0" />
                            {post.author.name}
                            </a>
                        </p>
                        <p className="text-gray-400">{post.author.role}</p>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </div>
    )
}
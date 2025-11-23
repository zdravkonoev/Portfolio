import { useEffect } from 'react';
import { useParams } from 'react-router'    
export default function DetailsPost() {
    const {postId} = useParams();

    console.log(postId);

    useEffect(() => {
        fetch(`http://localhost:3030/jsonstore/blog-portfolio/posts/${postId}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        }); 
    }, [postId]);

return (
    <>
    {/* <article key={id} className="flex max-w-xl flex-col items-start justify-between">
        <div className="flex items-center gap-x-4 text-xs">
            <time dateTime={datetime} className="text-gray-400">
            {date}
            </time>
            <a
            href={category.href}
            className="relative z-10 rounded-full bg-gray-800/60 px-3 py-1.5 font-medium text-gray-300 hover:bg-gray-800"
            >
            {category.title}
            </a>
        </div>
        <div className="group relative grow">
            <h3 className="mt-3 text-lg/6 font-semibold text-white group-hover:text-gray-300">
            <a href={href}>
                <span className="absolute inset-0" />
                {title}
            </a>
            </h3>
            <p className="mt-5 line-clamp-3 text-sm/6 text-gray-400">{description}</p>
        </div>
        <div className="relative mt-8 flex items-center gap-x-4 justify-self-end">
            <img alt="" src={author.imageUrl} className="size-10 rounded-full bg-gray-800" />
            <div className="text-sm/6">
            <p className="font-semibold text-white">
                <a href={author.href}>
                <span className="absolute inset-0" />
                {author.name}
                </a>
            </p>
            <p className="text-gray-400">{author.role}</p>
            </div>
        </div>
    </article> */}
    </>
    )
}
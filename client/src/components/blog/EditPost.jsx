import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom"; 

const initalValues = {
    id: '',
    date: '',
    datetime: '',
    title:'',
    description: '',
    companyDepartment: '',
    authorName: '',
    authorRole:'',
    authorImage:''
}

export default function EditPost() {
    const navigate = useNavigate();
    const {postRefId} = useParams(); //Get postId from URL params    
    const [values, setValues] = useState(initalValues);
    console.log(postRefId);

    //Handle input changes of a controlled form
    const changePostHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    }

    useEffect(() => {

        fetch(`http://localhost:3030/jsonstore/blog-portfolio/posts/${postRefId}`)
        .then(response => response.json())
        .then(result => {
            //Always return a new object not overwrite initalValues !!!
            const updatedValues = { 
            id: result.id,
            date: result.date,
            datetime: result.datetime,
            title: result.title,
            description: result.description,
            companyDepartment: result.category.title,
            authorName: result.author.name,
            authorRole: result.author.role,
            authorImage: result.author.imageUrl
            };
            console.log(updatedValues);
            setValues(updatedValues);
            
        })
        .catch(error => console.error('Error fetching post details:', error));//Fetch post data and fill the form
    }, [postRefId]);


    
    const submitEditedPostHandler = async (e) => {
        e.preventDefault(); //Otherwise reload page

        const updatePost = {
            id: values.id,
            title: values.title,
            href: '#',
            description: values.description,
            date: values.date,
            datetime: values.datetime,
            category: {
                title: values.companyDepartment,
                href: '#'
            },
            author: {
                name: values.authorName,
                role: values.authorRole,
                href: '#',
                imageUrl: values.authorImage
            }
        }
        console.log("UPDATED POST:", updatePost);
        console.log("STRINGIFIED:", JSON.stringify(updatePost));

        try {
            await fetch(`http://localhost:3030/jsonstore/blog-portfolio/posts/${postRefId}`, {
                method: 'PUT', // Use PUT to update existing resource
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatePost)
            });
            console.log(values);
            navigate(`/blog/${postRefId}/post-details`);

        } catch (error) {
            console.error('Error editing post:', error);
        }

        
    }

    return (
        <>
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm mt-10">
                {/* <img
                    alt="Your Company"
                    src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                    className="mx-auto h-10 w-auto"
                /> */}
                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                    Edit Post
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={submitEditedPostHandler}>
                    <div>
                        <div>
                            <label htmlFor="title" className="block text-sm/6 font-medium text-gray-900">
                                Post Title
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                            id="title"
                            name="title"
                            type="text"
                            onChange={changePostHandler}
                            value={values.title}
                            required
                            autoComplete="title"
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="description" className="block text-sm/6 font-medium text-gray-900">
                            Post Content
                            </label>
                        </div>
                        <div className="mt-2">
                            <textarea
                            id="description"
                            name="description"
                            type="text"
                            onChange={changePostHandler}
                            value={values.description}
                            required
                            autoComplete="description"
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="companyDepartment" className="block text-sm/6 font-medium text-gray-900">
                            Company Department
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                            id="companyDepartment"
                            name="companyDepartment"
                            type="text"
                            onChange={changePostHandler}
                            value={values.companyDepartment}
                            required
                            autoComplete="company-department"
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="authorName" className="block text-sm/6 font-medium text-gray-900">
                            Author Name
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                            id="authorName"
                            name="authorName"
                            type="text"
                            onChange={changePostHandler}
                            value={values.authorName}
                            required
                            autoComplete="author-name"
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="authorRole" className="block text-sm/6 font-medium text-gray-900">
                            Author Role
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                            id="authorRole"
                            name="authorRole"
                            type="text"
                            onChange={changePostHandler}
                            value={values.authorRole}
                            required
                            autoComplete="author-role"
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="authorImage" className="block text-sm/6 font-medium text-gray-900">
                            Author Image URL
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                            id="authorImage"
                            name="authorImage"
                            type="text"
                            onChange={changePostHandler}
                            value={values.authorImage}
                            required
                            autoComplete="author-image"
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                        </div>
                    </div>
                    
                    <div className="mt-5">
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Edit Post
                        </button>
                    </div>
                </form>
            </div>
        </div>
        </>

    )
}
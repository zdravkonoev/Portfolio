import { Link, Navigate, useNavigate } from "react-router-dom"; 
import useForm from "../../hooks/useForm.js";
import useRequest from "../../hooks/useRequest.js";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext.jsx";

export default function CreatePost() {

    const navigate = useNavigate();

    const {request} = useRequest();

    const {user} = useContext(UserContext);
    
    const createPostHandler = async (values) => {
        
        const formData = values;

        //const data = Object.fromEntries(formData);

        formData.title = values.title
        formData.href = '#';
        formData.description = values.description;

        // Fix: use new Date
        formData.date = new Date(Date.now()).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric"
        });

        const datetime = new Date();
        const year = datetime.getFullYear();
        const month = String(datetime.getMonth() + 1).padStart(2, "0");
        const day = String(datetime.getDate()).padStart(2, "0");

        formData.datetime = `${year}-${month}-${day}`;

        formData.category = {
            title: values.companyDepartment,
            href: '#'
        }

        formData.author = {
            name: values.authorName,
            role: values.authorRole,
            href: '#',
            imageUrl: values.authorImage
        };
        console.log(formData);

        //This time POST data to Collection not jsonstore
        try {

            const result = await request('/data/posts', 'POST', formData, {accessToken: user.accessToken});
            console.log("New post created with key:", result);
            navigate('/blog');

        } catch (error) {
            console.error('Error creating post:', error);
            return;
        }

        //try {
        //    const response = await fetch('http://localhost:3030/jsonstore/blog-portfolio/posts', {
        //        method: 'POST',
        //        headers: {  
        //            'Content-Type': 'application/json'
        //        },
        //        body: JSON.stringify(formData)
        //    });
//
        //    const result = await response.json();
        //    console.log("New post created with key:", result);
        //    navigate('/blog');
        //} catch (error) {
        //    console.error('Error creating post:', error);
        //}   
         
    }

    const {register, formAction} = useForm(createPostHandler, {
        title: '',
        description: '',
        companyDepartment: '',
        authorName: '',
        authorRole: '',
        authorImage: ''
    })

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
                    Create Post
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action={formAction}>
                <div>
                    <div>
                        <label htmlFor="title" className="block text-sm/6 font-medium text-gray-900">
                            Post Title
                        </label>
                    </div>
                    <div className="mt-2">
                        <input
                        id="title"
                        {...register('title')}
                        type="text"
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
                        {...register('description')}
                        type="text"
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
                      {...register('companyDepartment')}
                      type="text"
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
                      {...register('authorName')}
                      type="text"
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
                      {...register('authorRole')}
                      type="text"
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
                      {...register('authorImage')}
                      type="text"
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
                    Create Post
                </button>
                </div>
            </form>
            </div>
        </div>
    </>
  );
}
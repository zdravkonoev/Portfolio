import { Link, Navigate, useNavigate } from "react-router-dom"; 
import useForm from "../../hooks/useForm.js";
import useRequest from "../../hooks/useRequest.js";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext.jsx";
import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { ChevronUpDownIcon } from '@heroicons/react/16/solid'
import { CheckIcon } from '@heroicons/react/20/solid'
import { useState } from "react";



export default function CreatePost() {
    const categories = [
        "Marketing",
        "Sales",
        "Development",
        "Technology",
        "Lifestyle",
        "Travel",
        "Food",
        "Business",
    ];

    const roles = [
        "Co-Founder",
        "Front-end Developer",
        "Designer",
        "Back-end Developer",
        "Director of Product",
        "Project Manager",
        "CEO",
        "CFO",
    ];

    const people = [
        {
            id: 1,
            name: 'Wade Cooper',
            avatar:
            'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            id: 2,
            name: 'Arlene Mccoy',
            avatar:
            'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            id: 3,
            name: 'Devon Webb',
            avatar:
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
        },
        {
            id: 4,
            name: 'Tom Cook',
            avatar:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            id: 5,
            name: 'Tanya Fox',
            avatar:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            id: 6,
            name: 'Hellen Schmidt',
            avatar:
            'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            id: 7,
            name: 'Caroline Schultz',
            avatar:
            'https://images.unsplash.com/photo-1568409938619-12e139227838?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            id: 8,
            name: 'Mason Heaney',
            avatar:
            'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            id: 9,
            name: 'Claudie Smitham',
            avatar:
            'https://images.unsplash.com/photo-1584486520270-19eca1efcce5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            id: 10,
            name: 'Emil Schaefer',
            avatar:
            'https://images.unsplash.com/photo-1561505457-3bcad021f8ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    ]

    const [selected, setSelected] = useState(people[3])

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
                      {/* <input
                      id="companyDepartment"
                      {...register('companyDepartment')}
                      type="text"
                      required
                      autoComplete="company-department"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      /> */}
                      <select
                            id="authorRole"
                            {...register('companyDepartment')}
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            >
                            <option value="">-- Select --</option>
                            {categories.map((cat) => (
                            <option key={cat} value={cat}>
                                {cat}
                            </option>
                            ))}
                    </select>
                  </div>
                </div>

                {/*<div>
                  <div className="flex items-center justify-between">
                      <label htmlFor="authorImage" className="block text-sm/6 font-medium text-gray-900">
                      Author
                      </label>
                  </div>
                  <div className="mt-2">
                         <Listbox value={selected} onChange={setSelected}>
                            <div className="relative mt-2">
                                <ListboxButton className="grid w-full cursor-default grid-cols-1 rounded-md bg-white py-1.5 pr-2 pl-3 text-left text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-indigo-600 sm:text-sm/6">
                                <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
                                    <img alt="" src={selected.avatar} className="size-5 shrink-0 rounded-full bg-gray-100" />
                                    <span className="block truncate">{selected.name}</span>
                                </span>
                                <ChevronUpDownIcon
                                    aria-hidden="true"
                                    className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                                />
                                </ListboxButton>

                                <ListboxOptions
                                transition
                                className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg outline-1 outline-black/5 data-leave:transition data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0 sm:text-sm"
                                >
                                {people.map((person) => (
                                    <ListboxOption
                                    key={person.id}
                                    value={person}
                                    className="group relative cursor-default py-2 pr-9 pl-3 text-gray-900 select-none data-focus:bg-indigo-600 data-focus:text-white data-focus:outline-hidden"
                                    >
                                    <div className="flex items-center">
                                        <img alt="" src={person.avatar} className="size-5 shrink-0 rounded-full" />
                                        <span className="ml-3 block truncate font-normal group-data-selected:font-semibold">{person.name}</span>
                                    </div>

                                    <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-not-data-selected:hidden group-data-focus:text-white">
                                        <CheckIcon aria-hidden="true" className="size-5" />
                                    </span>
                                    </ListboxOption>
                                ))}
                                </ListboxOptions>
                            </div>
                        </Listbox> 
                  </div>
                </div>*/}

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
                      {/* <input
                      id="authorRole"
                      {...register('authorRole')}
                      type="text"
                      required
                      autoComplete="author-role"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      /> */}
                      <select
                            id="authorRole"
                            {...register('authorRole')}
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            >
                            <option value="">-- Select --</option>
                            {roles.map((role) => (
                            <option key={role} value={role}>
                                {role}
                            </option>
                            ))}
                    </select>
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
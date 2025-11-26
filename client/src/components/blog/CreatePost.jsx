import { Link } from "react-router-dom"; 
export default function CreatePost() {

  const createPostHandler = (e) => {
    e.preventDefault(); 
    const formData = new FormData(e.target);

    const data = Object.fromEntries(formData);

    data.date = Date.now();
    data.datetime = Date.now();
    console.log(data);

  }

  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
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
            <form lassName="space-y-6" onSubmit={createPostHandler}>
                <div>
                <label htmlFor="title" className="block text-sm/6 font-medium text-gray-900">
                    Post Title
                </label>
                <div className="mt-2">
                    <input
                    id="title"
                    name="title"
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
                    name="description"
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
                      name="companyDepartment"
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
                      name="authorName"
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
                      name="authorRole"
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
                      name="authorImage"
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
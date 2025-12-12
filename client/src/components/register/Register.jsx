import { Link } from "react-router"
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import { useState } from "react";


export default function Register() {
    //BEGIN Validation functions
    const [errors, setErrors] = useState({});

    function validate(values) {

        let errors = {};

        //Validate email field
        if (values.username && values.username.length < 6) {
            errors['username'] = "Username must be at least 6 characters long";
        }
        
        if (!values.username) {
            errors['username'] = "Username is required";
        }

        if (values.email && values.email.length < 6) {
            errors['email'] = "Email must be at least 6 characters long";
        }
        
        if (!values.email) {
            errors['email'] = "Email is required";
        }

        if (values.password && values.password.length < 5) {
            errors['password'] = "Password must be at least 5 characters long";
        }

        if (!values.password) {
            errors['password'] = "Password is required";
        }

        if (values['confirm-password'] && values['confirm-password'].length < 5) {
            errors['confirm-password'] = "Confirm Password must be at least 5 characters long";
        }


        if (!values['confirm-password']) {
            errors['confirm-password'] = "Confirm Password is required";
        }

        if (values.password && values['confirm-password'] && values.password !== values['confirm-password']) {
            errors['confirm-password'] = "Passwords do not match!";
        }

        return errors;

    }

    const inputClass = (field) => `${errors[field] ? 'outline-red-500 focus:outline-red-600' : ''} block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6`;

    const errorText = (field) => errors[field] && (
        <p className="mt-2 text-sm text-red-600">{errors[field]}</p>
    );
    //END Validation functions

    const navigate = useNavigate();
    const { registerHandler } = useContext(UserContext);

    const  registerSubmitHandler = async(values) => {
            
        console.log("Register attempt:", values);
        const errors = validate(values);
        setErrors(errors);
        
        console.log("Validation errors:", errors);
        if (Object.keys(errors).length > 0) {
            //alert(Object.values(errors).join('\n'));
            return;
        }

        if (values.picture === '') {
            values.picture = "https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32";
        }

        const {
            username, 
            email, 
            password, 
            picture,
        } = values;

        
        //const confirmPassword = values['confirm-password'];
        console.log({username, email, password, picture});

        //TODO: Validation
        //if (!email || !password || !confirmPassword) {
        //    alert("All fields are required");
        //    return;
        //}
        
        //if (password !== confirmPassword) { 
        //    alert("Passwords do not match");
        //    return;
        //}

        
        try {
            //TODO: Register User

            await registerHandler(username, email, password, picture);

            //TODO: Redirect to login page
            navigate('/');

        } catch (error) {
            console.error("Registration error:", error);
            alert(error.message);
        }   

        console.log("User registered:", {email});

            
    }

    //When you give parameters they MUST BE used with the same names inside the hook - Exxample: 'values' must be 'values' inside the hook!!!
    const { formAction, register } = useForm(registerSubmitHandler, {
        username: '',
        email: '',
        password: '',
        'confirm-password': '',
        picture: '',
    });

    


    return (
        <>
        {/*
            This example requires updating your template:

            ```
            <html class="h-full bg-white">
            <body class="h-full">
            ```
        */}
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    alt="Your Company"
                    src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                    className="mx-auto h-10 w-auto"
                />
                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                    Register your account
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form action={formAction} className="space-y-6">
                <div>
                    <label htmlFor="username" className="block text-sm/6 font-medium text-gray-900">
                        Username
                    </label>
                    <div className="mt-2">
                        <input
                        id="username"
                        type="username"
                        required
                        autoComplete="username"
                        {...register('username')}
                        className={inputClass('username')}
                        />
                        {errorText('username')}
                    </div>
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                        Email address
                    </label>
                    <div className="mt-2">
                        <input
                        id="email"
                        type="email"
                        required
                        autoComplete="email"
                        {...register('email')}
                        className={inputClass('email')}
                        />
                        {errorText('email')}
                    </div>
                </div>

                <div>
                    <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                        Password
                        </label>
                    </div>
                    <div className="mt-2">
                        <input
                        id="password"
                        type="password"
                        required
                        autoComplete="current-password"
                        {...register('password')}
                        className={inputClass('password')}
                        />
                        {errorText('password')}
                    </div>
                </div>

                <div>
                    <div className="flex items-center justify-between">
                        <label htmlFor="confirmPassword" className="block text-sm/6 font-medium text-gray-900">
                        Confirm Password
                        </label>
                    </div>
                    <div className="mt-2">
                        <input
                        id="confirm-password"
                        type="password"
                        required
                        autoComplete="current-password"
                        {...register('confirm-password')}
                        className={inputClass('confirm-password')}
                        />
                        {errorText('confirm-password')}
                    </div>
                </div>

                <div>
                    <div className="flex items-center justify-between">
                        <label htmlFor="picture" className="block text-sm/6 font-medium text-gray-900">
                            Picture URL
                        </label>
                    </div>
                    <div className="mt-2">
                        <input
                        id="picture"
                        type="picture"
                        autoComplete="picture"
                        {...register('picture')}
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                    </div>
                </div>
                
                <div className="mt-5">
                <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Register
                </button>
                </div>
            </form>

            <p className="mt-10 text-center text-sm/6 text-gray-500">
                Have an account?{' '}
                <Link to="/login" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Login here.
                </Link>
            </p>
            </div>
        </div>
        </>
    )
}
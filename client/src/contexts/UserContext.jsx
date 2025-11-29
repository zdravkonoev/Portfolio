import { createContext } from 'react';
import { useState } from 'react';
import useRequest from '../hooks/useRequest.js';

const UserContext = createContext({
    isAuthenticated: false,
    user: {
        email: '',
        password: '',
        _createdOn: 0,
        _id: '',
        accessoToken: ''
    },
    registerHandler() {},
    loginHandler() {},
    logoutHandler() {},
});

export function UserProvider(props) {

    //const [registeredUsers, setRegisteredUsers] = useState([]);
    const [user, setUser] = useState(null);
    const { request } = useRequest();

    const registerHandler = async(email, password) => {
        
        const newUser = {email, password};

        //Api Call to register user
        const result = await request('/users/register', 'POST', newUser);


        console.log("Registered user:", result);
        //setRegisteredUsers(state => [...state, newUser]);

        // Auto-login after registration  
        setUser(result);

    };

    const loginHandler = async(email, password) => {
        const result = await request('/users/login', 'POST', {email, password});
        
        console.log("Logged in user:", result);
        
        if (!result.isAuthenticated) {
        throw new Error("Invalid user credentials");
        }
        
        setUser(result);
    };

    const logoutHandler = () => {
        return request('/users/logout', 'GET')
        .finally(() => {
        setUser(null);
        });
    };

    const userContextValues = {
        user,
        isAuthenticated: !!user?.accessToken,
        registerHandler,
        loginHandler,
        logoutHandler
    };

    return (
        <UserContext.Provider value={userContextValues} >
            {props.children}
        </UserContext.Provider>
    )

}

export default UserContext;
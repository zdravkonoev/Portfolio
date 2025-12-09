import { createContext } from 'react';
import useRequest from '../hooks/useRequest.js';
import useLocalStorage from '../hooks/useLocalStorage.js';

const UserContext = createContext({
    isAuthenticated: false,
    user: {
        username: '',
        email: '',
        password: '',
        picture: '',
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
    const [user, setUser] = useLocalStorage(null, 'authenticated');
    const { request } = useRequest();

    const registerHandler = async(username, email, password, picture) => {
        
        const newUser = {username, email, password, picture};

        console.log("New user:", newUser);
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
        
        //if (!result.isAuthenticated) {
        //throw new Error("Invalid user credentials");
        //}
        
        setUser(result);
    };

    const logoutHandler = () => {
        const token = user?.accessToken;
        if (!token) {
            setUser(null);
            return Promise.resolve();
        }

        return request('/users/logout', 'GET', null, { accessToken: token })
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
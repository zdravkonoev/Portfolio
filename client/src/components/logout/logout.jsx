import { Navigate, useNavigate } from "react-router";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import { useEffect } from "react";

export default function Logout() {
    
    const { logoutHandler } = useContext(UserContext);
    const navigate = useNavigate();

    //ALAWYS use useEffect when performing LogOut because React prohibits state updates during render of another component.
    //You must call logoutHandler inside an effect or event handler, not directly in the render body.
    useEffect(() => {

        logoutHandler()
        .then(() => {
            navigate('/');
        })
        .catch((error) => {
            console.error("Logout error:", error);
            alert("Logout failed.");
            navigate('/');
        });
    }, []);
    
        return null;
}

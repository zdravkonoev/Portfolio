import { Navigate, useNavigate } from "react-router";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";

export default function Logout() {
    
    const { logoutHandler } = useContext(UserContext);
    const navigate = useNavigate();

        logoutHandler()
        .then(() => {
            navigate('/');
        })
        .catch((error) => {
            console.error("Logout error:", error);
            alert("Logout failed.");
            navigate('/');
        });
    
        return null;
}

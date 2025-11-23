import { NavLink } from "react-router";

export default function Logout({
    onLogout,
}) {
        onLogout(); 
    
        return  <NavLink to="/home" />;
}

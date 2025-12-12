import { Routes, Route } from 'react-router'
import NotFound404 from './components/not-found-404/NotFound404.jsx'
import Home from './components/home/Home.jsx'
import Register from './components/register/Register.jsx'
import Login from './components/login/Login.jsx'
import Logout from './components/logout/Logout.jsx'
import Blog from './components/blog/Blog.jsx'
import DetailsPost from './components/blog/DetailsPost.jsx';
import Header from './components/header/Header.jsx'
import AdminHeaders from './components/header/AdminHeader.jsx'
import CreatePost from './components/blog/CreatePost.jsx';
import EditPost from './components/blog/EditPost.jsx';
import { useContext } from 'react';
import UserContext from './contexts/UserContext.jsx';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';


export default function App() {

  const {user} = useContext(UserContext);

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      {/* Remove administrative header */}
      {user && <AdminHeaders />}
      <Header />
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="*" element={<NotFound404 />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:postRefId/post-details" element={<DetailsPost />} />
        <Route path="/blog/:postRefId/post-edit" element={<EditPost />} />
        <Route path="/blog/post-create" element={<CreatePost />} />
      </Routes>
    </>
  )
}

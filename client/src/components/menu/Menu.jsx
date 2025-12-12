import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import React from 'react';

const navigation = [
  { id: 1, name: 'About Me', href: '/' },
  { id: 2, name: 'Experience', href: '/#experience' },
  { id: 3, name: 'Projects', href: '/#projects' },
  { id: 4, name: 'Statistics', href: '/#statistics' },
  { id: 5, name: 'Blog', href: '/blog' },
  
]
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Menu({
    display = "",
}) {
    // Navigation component - no reload on links and #anchors
    const location = useLocation();
    const navigate = useNavigate();

    // Handles scrolling logic
    const handleScroll = (id) => {
        if (location.pathname === "/") {
        // Already on Home → just scroll
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
        } else {
        // On another page → navigate home without full reload
        navigate("/#" + id);
        }
    };

    return (
        <>
            {navigation.map((item) => (
                item.name === "Blog" || item.name === "About Me" ?
                <Link key={item.id} to={item.href} 
                    className={classNames(
                    display !== "" ? 'block' : '',
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-white/5 hover:text-white',
                    'rounded-md px-3 py-2 text-sm font-medium cursor-pointer',
                    )}
                    >
                        {item.name}
                </Link>
                :
                <span
                    onClick={() => handleScroll(item.name.toLowerCase().replace(" ", "-"))}
                    className={classNames(
                    display !== "" ? 'block' : '',
                    item.current ? 'bg-gray-900 text-white ' : 'text-gray-300 hover:bg-white/5 hover:text-white',
                    'rounded-md px-3 py-2 text-sm font-medium cursor-pointer',
                    )}
                    >
                        {item.name}
                </span>
            ))}
        </>
    )
}
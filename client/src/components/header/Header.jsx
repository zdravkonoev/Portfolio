import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useContext } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import UserContext from "../../contexts/UserContext.jsx";


const navigation = [
  { name: 'About Me', href: '/' },
  { name: 'Experience', href: '/#experience' },
  { name: 'My Work', href: '/#latest-projects' },
  { name: 'Statistics', href: '/#statistics' },
  { name: 'Blog', href: '/blog' },
  
]

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const {user} = useContext(UserContext);

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
    <header className="absolute inset-x-0 z-50 mx-auto px-2 sm:px-6 lg:px-8 bg-gray-900">{/* top-0  */}
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Personal Portfolio</span>
              <img
                alt=""
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                className="h-8 w-auto"
              />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              item.name === "Blog" || item.name === "About Me" ?
              <Link key={item.name} to={item.href} className="text-sm/6 font-semibold text-white">
                {item.name}
              </Link>
              :
              <span
                onClick={() => handleScroll(item.name.toLowerCase().replace(" ", "-"))}
                className="cursor-pointer text-sm font-semibold text-white"
              >
                {item.name}
              </span>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            {!user ? (
              <>
                <Link to="/register" className="text-sm/6 font-semibold text-white mr-3">
                  Register
                </Link>

                <Link to="/login" className="text-sm/6 font-semibold text-white">
                  Log in <span aria-hidden="true">&rarr;</span>
                </Link>
              </>
            ) : (
              <Link to="/logout" className="text-sm/6 font-semibold text-white">
                Log out <span aria-hidden="true">&rarr;</span>
              </Link>
            )}
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-200"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-white/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-white/5"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
  )
}
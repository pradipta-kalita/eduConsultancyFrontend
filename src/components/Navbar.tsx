import React, { useState } from 'react';
import {Link} from "@tanstack/react-router";

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Courses', href: '/courses' },
    { name: 'Blog', href: '/blogs' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Feedback', href: '/feedback' },
];

const Navbar: React.FC = () => {

    const [loggedIn] = useState(false); // Simulate logged-in state

    return (
        <nav className="bg-white text-gray-600 shadow-md fixed top-0 w-full z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <span className="text-xl font-bold text-gray-700">EduConsultancy</span>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex space-x-4">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                className="hover:text-gray-800"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* SignUp Button or Profile Icon */}
                    <div className="flex items-center space-x-4">
                        {loggedIn ? (
                            // Profile Icon (replace with actual icon or link)
                            <Link href="/profile" className="flex items-center text-gray-700 hover:text-gray-900">
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                                    <path d="M12 15v-3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                </svg>
                            </Link>
                        ) : (
                            // Sign Up Button
                            <Link
                                to="/auth/signup"
                                className="text-white font-bold bg-primary-light hover:bg-primary-dark px-6 py-2 rounded-3xl"
                            >
                                Login
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

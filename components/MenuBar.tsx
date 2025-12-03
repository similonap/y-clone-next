"use client";

import Link from "next/link";
import { Home } from "lucide-react";

const MenuBar = () => {
    return (
        <aside className="flex flex-col w-64 h-screen sticky top-0 border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-black p-4">
            {/* Logo/Brand */}
            <div className="mb-8 px-3">
                <span className="text-2xl font-bold text-gray-900 dark:text-white">Y</span>
            </div>
            
            {/* Navigation Links */}
            <nav className="flex-1">
                <ul className="space-y-1">
                    <li>
                        <Link 
                            href="/" 
                            className="flex items-center gap-4 px-3 py-3 text-xl font-medium text-gray-900 dark:text-white rounded-full hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
                        >
                            <Home className="w-7 h-7" />
                            <span>Home</span>
                        </Link>
                    </li>
                </ul>
            </nav>
            
          
        </aside>
    );
};

export default MenuBar;

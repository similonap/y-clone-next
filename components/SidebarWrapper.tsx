"use client";

import { usePathname } from "next/navigation";
import Sidebar from "./Sidebar";

const SidebarWrapper = () => {
    const pathname = usePathname();
    
    // Don't show sidebar on auth pages
    if (pathname.startsWith("/auth")) {
        return null;
    }
    
    return <Sidebar />;
};

export default SidebarWrapper;

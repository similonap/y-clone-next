import MenuBar from "@/components/MenuBar";
import SideBar from "@/components/SideBar";

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex min-h-screen">
      <MenuBar />
      <main role="main" className="flex-1">
        {children}
      </main>
      <SideBar />
    </div>
  );
};

export default MainLayout;

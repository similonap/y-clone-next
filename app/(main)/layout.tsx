import Sidebar from "@/components/Sidebar";

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main role="main" className="flex-1">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;

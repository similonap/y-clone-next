import Sidebar from "@/components/Sidebar";

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
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

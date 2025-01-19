"use client";
import Sidebar from '@/src/ui/sidebar/sidebar';
import Header from '@/src/ui/header/header';

const Layout = ({ children}) => {
  return (
    <>
      <div className={`grid min-h-screen w-full ${'md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]'}`}>
        <Sidebar />
        <div className="flex flex-col font-custom">
          <Header/>
          <main className="grid items-start text-[#fff] gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 bg-[#000] lg:grid-cols-3 xl:grid-cols-3">
            {children}
          </main>
        </div>
      </div>
    </>
  );
};

export default Layout;

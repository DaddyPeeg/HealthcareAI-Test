import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <main className="flex min-h-screen relative">
      <Outlet />
      <span className="bg-black fixed font-semibold bottom-2 flex items-center justify-center text-white left-2 size-8 rounded-full">
        <p className="block sm:hidden text-sm">xs</p>
        <p className="hidden sm:block md:hidden text-sm">sm</p>
        <p className="hidden md:block lg:hidden text-sm">md</p>
        <p className="hidden lg:block xl:hidden text-sm">lg</p>
        <p className="hidden xl:block 2xl:hidden text-sm">xl</p>
        <p className="hidden 2xl:block text-sm">2xl</p>
      </span>
    </main>
  );
};

export default MainLayout;

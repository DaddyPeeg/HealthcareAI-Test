import Sidebar from "@components/pages/main/Sidebar";
import Content from "@components/pages/main/Content";

const Main = () => {
  return (
    <div className="flex w-full justify-end">
      <div className=" fixed left-[-325px] lg:left-[0px] bg-white h-full w-[325px] lg:flex hidden">
        <Sidebar />
      </div>
      <div className="lg:w-[calc(100%-325px)] w-full">
        <Content />
      </div>
    </div>
  );
};

export default Main;

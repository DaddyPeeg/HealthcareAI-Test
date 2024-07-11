import Sidebar from "@components/pages/main/Sidebar";
import Content from "@components/pages/main/Content";

const Main = () => {
  return (
    <div className="flex w-full justify-end">
      <div className="flex fixed left-0 bg-white h-full md:w-[325px] w-full">
        <Sidebar />
      </div>
      <div className="w-[calc(100%-325px)]">
        <Content />
      </div>
    </div>
  );
};

export default Main;

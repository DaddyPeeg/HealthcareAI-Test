import Sidebar from '@components/Sidebar';
import Content from '@components/Content';

const Main = () => {
  return (
    <div className='flex flex-row w-full'>
      <div className='flex w-[325px]'>
        <Sidebar />
      </div>
      <div className='flex-1'>
        <Content />
      </div>
    </div>
  )
}

export default Main;
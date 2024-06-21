import Sidebar from '@components/layout/Sidebar';
import Content from '@components/layout/Content';

const Main = () => {
  return (
    <div className='main-container'>
      <div className='sidebar-container'>
        <Sidebar />
      </div>
      <div className='content-container'>
        <Content />
      </div>
    </div>
  )
}

export default Main;
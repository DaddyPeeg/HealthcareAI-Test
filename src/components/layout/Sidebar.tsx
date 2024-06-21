import RotateLeft from '@svgs/RotateLeft';
import icon1 from '@img/icon1.jpg';

const Sidebar = () => {
  return (
    <div className='sidebar-content'>
      <div className='sidebar-header'>
        <p className='sidebar-title'>Agency information</p>
      </div>
      <div className='account-container'>
        <div>
          <img src={icon1} className='account-avatar' />
        </div>
        <p className='account-name'>Agent name</p>
        <p className='account-text'>Waterproffing company</p>
        <p className='account-text'>Duffy, Australian Capital</p>
        <p className='account-text'>Territory,2611</p>
        <p className='account-text'>Member Since, Dec 200</p>

      </div>
      <button className='btn btn-primary'>
        <p className='btn-text'>Add OpenAI API key</p>
      </button>
      <button className='btn btn-primary'>
        <p className='btn-text'>Health sherpa excel exports</p>
      </button>
      <div className='flex mt-8'>
        <button className='inline'><RotateLeft /></button>
        <span className='ml-2 font-medium'>History</span>
      </div>
      <div className="divider-x"></div>
      <div className='sidebar-history'>
        <p className='truncate ... py-1'>How should the chatbot summarize How should the chatbot summarize How should the chatbot summarize</p>
      </div>
    </div>
  )
}

export default Sidebar;
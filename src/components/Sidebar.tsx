import RotateLeft from '@svgs/RotateLeft';
import icon1 from '@img/icon1.jpg';
const Sidebar = () => {
  return (
    <div className='flex flex-col w-full px-6'>
      <div className='flex items-center h-[80px]'>
        <p className='text-lg text-[#070A14] font-bold'>Agency information</p>
      </div>
      <div className='flex flex-col w-full h-[200px] mt-4 border border-[#B1B1B1] border-1 rounded-md p-3'>
        <div>
          <img src={icon1} className='w-[60px] h-[60px] object-cover rounded-full' />
        </div>
        <p className='mt-3 font-bold'>Agent name</p>
        <p className='mt-1 font-light text-xs'>Waterproffing company</p>
        <p className='mt-1 font-light text-xs'>Duffy, Australian Capital</p>
        <p className='mt-1 font-light text-xs'>Territory,2611</p>
        <p className='mt-1 font-light text-xs'>Member Since, Dec 200</p>

      </div>
      <button className='flex bg-[#7030A0]/5 hover:bg-[#7030A0]/10 mt-4 py-[12px] px-[16px] w-full items-start rounded-[16px]'>
        <p className='text-md text-[#624FF6] font-medium'>Add OpenAI API key</p>
      </button>
      <button className='flex bg-[#7030A0]/5 hover:bg-[#7030A0]/10 mt-4 py-[12px] px-[16px] w-full items-start rounded-[16px]'>
        <p className='text-md text-[#624FF6] font-medium'>Health sherpa excel exports</p>
      </button>

      <div className='flex border-b border-1 border-b-[#B1B1B1] mt-[40px] pb-2'>
        <button><RotateLeft /></button>
        <span className='ml-2 font-medium'>History</span>
      </div>

      <div className='flex flex-col w-full mt-2'>
        <p className='truncate ... py-1'>How should the chatbot summarize How should the chatbot summarize How should the chatbot summarize</p>
        <p className='truncate ... py-1'>How should the chatbot summarize How should the chatbot summarize How should the chatbot summarize</p>
        <p className='truncate ... py-1'>How should the chatbot summarize How should the chatbot summarize How should the chatbot summarize</p>
        <p className='truncate ... py-1'>How should the chatbot summarize How should the chatbot summarize How should the chatbot summarize</p>
      </div>

    </div>
  )
}

export default Sidebar;
import IconSearch from '@svgs/IconSearch';
import CheckBox from '@components/core/CheckBox';

const CarrierModal = ({open, onClose, onSave, selectedCarriers, options} : {open: boolean, onClose: any, onSave: any, selectedCarriers: string[], options: string[]}) => {
  return (
    <div
      className={`modal-container ${open ? "visible bg-black/20" : "invisible"}`}
    >
      <div className="modal-content md:w-[40%] w-full">
        <div className="flex flex-col gap-[30px]">
          <div className="w-full">
            <p className="font-bold">Add Your Carriers</p>
          </div>
          <div className="divider-x"></div>
          <div className="flex md:flex-row flex-col w-full relative">
            <div className='flex flex-1 md:w-full'>
              <input type='text' placeholder="Search..." className="search-input" />
              <div className='absolute top-5 left-5'>
                <IconSearch />
              </div>
            </div>
            <div className='flex flex-1 items-center md:justify-center justify-start mt-4 md:w-full'>
              <CheckBox 
                label="Select All"
                />
            </div>
          </div>
          <div className="carriers-container">
            {
              options.map((option: string, idx: number) => {
                return (
                  <CheckBox 
                    label={option}
                    key={idx}
                    />
                )
              })
            }
          </div>
          <div className="w-full">
            <div className="flex gap-[24px] justify-end content-center font-bold items-center">
              <div>
                <button className="flex items-center" onClick={onClose}>Cancel</button>
              </div>
              <div>
                <button className="flex btn btn-gray" onClick={onSave}>Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CarrierModal
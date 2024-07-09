const ModalContainer = ({
  title,
  children,
  isOpen,
  onClose,
  onDelete,
  onConfirm,
}: {
  title: string
  children: React.ReactNode
  isOpen: boolean
  onClose: () => void
  onDelete: () => void
  onConfirm: (e: any, data: any) => void
}) => {

  return (
    <div
      className={`modal-container ${isOpen ? "visible bg-black/20" : "invisible"}`}
    >
      <div className="modal-content md:w-[30%] w-full">
        <div className="flex flex-col gap-[30px]">
          <div className="flex w-full flex-row justify-between">
            <p className="font-bold">{title}</p>
            <p className="cursor-pointer" onClick={onClose}>X</p>
          </div>
          <div className="divider-x"></div>
          <div className="flex md:flex-row flex-col w-full relative mt-2">
            {children}
          </div>
          <div className="w-full">
            <div className="flex gap-[24px] justify-end content-center font-bold items-center">
              <div>
                <button className="flex items-center" onClick={onDelete}>Delete</button>
              </div>
              <div>
                <button className="flex btn btn-gray" onClick={(e: any) => onConfirm(e, { formatName: 'formatName' })}>Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalContainer
const CheckButtons = ({options, handleChange} : {options: string[], handleChange: any}) => {
  return (
    <div className="form-check-buttons-container">
      {
        options.map((option: string, idx: number) => {
          return (<div className='check-btn' key={idx}>{option}</div>)
        })
      }
    </div>
  )
}

export default CheckButtons;
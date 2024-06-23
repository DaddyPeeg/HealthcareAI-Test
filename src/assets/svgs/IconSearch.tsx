

export default function IconSearch({
  width = 17,
  height = 17,
  onClick,
}: {
  width?: string | number
  height?: string | number
  onClick?: Function
}) {
  return (
      <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 20 20" onClick={() => (onClick ? onClick() : {})} fill="none">
      <path d="M8.9513 17.1529C13.2989 17.1529 16.8233 13.7301 16.8233 9.50787C16.8233 5.28561 13.2989 1.86279 8.9513 1.86279C4.60374 1.86279 1.07935 5.28561 1.07935 9.50787C1.07935 13.7301 4.60374 17.1529 8.9513 17.1529Z" stroke="#828282" strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}/>
      <path d="M18.9207 19.1915L16.8215 17.1528" stroke="#828282" strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}/>
      </svg>
  )
}

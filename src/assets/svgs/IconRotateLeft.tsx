export default function IconRotateLeft({
  width = 24,
  height = 24,
  onClick,
}: {
  width?: string | number
  height?: string | number
  onClick?: Function
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={() => (onClick ? onClick() : {})}
      >
    <path d="M9.11 5.07999C9.98 4.81999 10.94 4.64999 12 4.64999C16.79 4.64999 20.67 8.52999 20.67 13.32C20.67 18.11 16.79 21.99 12 21.99C7.21 21.99 3.33 18.11 3.33 13.32C3.33 11.54 3.87 9.87999 4.79 8.49999" stroke="#2D3340" strokeWidth={1.5} strokeLinecap={"round"} strokeLinejoin={"round"}/>
    <path d="M7.87 5.32L10.76 2" stroke="#2D3340" strokeWidth={"1.5"} strokeLinecap={"round"} strokeLinejoin={"round"}/>
    <path d="M7.87 5.32001L11.24 7.78001" stroke="#2D3340" strokeWidth={"1.5"} strokeLinecap={"round"} strokeLinejoin={"round"}/>
    </svg>
  )
}

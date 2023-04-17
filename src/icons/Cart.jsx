const CartIcon = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={props.w}
    height={props.h}
    fill='none'
    viewBox='0 0 24 24'
    {...props}
  >
    <path
      stroke='#000'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
      d='M15 11a3 3 0 1 1-6 0m11-4-2-4H6L4 7m16 0H4m16 0v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7'
    />
  </svg>
)
export default CartIcon

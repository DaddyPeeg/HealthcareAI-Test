import { ToastContainer as ToastContainerBase } from 'react-toastify';

const ToastContainer = () => {
  return (
    <ToastContainerBase
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  )
}

export default ToastContainer
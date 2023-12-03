import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastComponent = () => {
  return (
    <ToastContainer
      position="top-center"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      draggable
      pauseOnHover
      theme="light"
    />
  );
};

export default ToastComponent;

import { toast } from "react-toastify";
import ToastComponent from "./ToastComponent";

const NewsLetter = () => {
  return (
    <div className="bg-blue-50 w-full h-80 my-5 rounded">
      <div className="w-full h-full flex flex-col justify-center items-center gap-5">
        <h1 className="text-2xl text-center font-semibold text-gray-600">
          <span className="text-red-600">Subscribe</span> The Newsletter
        </h1>
        <div className="flex justify-center items-center">
          <input
            type="email"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
          <button
            onClick={() => {
              return toast.success(
                "Congrats, You are Subscribed to newsletter"
              );
            }}
            className="btn bg-red-400 text-white"
          >
            Subscribe
          </button>
        </div>
      </div>
      <ToastComponent />
    </div>
  );
};

export default NewsLetter;

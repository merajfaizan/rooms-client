/* eslint-disable no-unused-vars */
import { useForm, Controller } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { GoogleAuthProvider } from "firebase/auth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { toast } from "react-toastify";
import ToastComponent from "../../components/ToastComponent";
import Swal from "sweetalert2";

const Login = () => {
  const { handleSubmit, control } = useForm();
  const { handleLogin, googleSignUp } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const axiosPublic = useAxiosPublic();

  const handleGoogleSignIn = async () => {
    try {
      const result = await googleSignUp(new GoogleAuthProvider());
      const detailedUser = result.user;
      await handleDatabaseUpdate(detailedUser.displayName, detailedUser.email);
      navigate(from, { replace: true });
    } catch (error) {
      handleAuthError(error);
    }
  };

  const handleDatabaseUpdate = async (name, email) => {
    try {
      const response = await axiosPublic.post("/addUser", { name, email });
      handleResponseMessage(response.data.message);
    } catch (error) {
      console.error(error);
      handleAuthError(error);
    }
  };

  const handleResponseMessage = (message) => {
    if (message !== "Email already exists in the database") {
      Swal.fire({
        title: "Success",
        text: message,
        icon: "success",
      });
    }
  };

  const handleAuthError = (error) => {
    const errorMessage = error.message.split(":");
    toast.error(errorMessage[1]);
  };

  const onSubmit = async (data) => {
    try {
      await handleLogin(data.email, data.password);
      navigate(from, { replace: true });
    } catch (error) {
      handleAuthError(error);
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Sign in to access your account and explore amazing travel
            experiences.
          </p>
          <p className="py-4">Welcome back!</p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <input
                    {...field}
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                )}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <Controller
                name="password"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <input
                    {...field}
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                )}
              />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn bg-[#1a1a1a] text-white">
                Login
              </button>
            </div>
            <div className="form-control mt-4">
              <p className="text-sm">
                Don&apos;t have an account?{" "}
                <Link to={"/register"} className="link link-hover">
                  Register here
                </Link>
              </p>
            </div>
            <hr />
            {/* Google Login Button */}
            <div className="form-control mt-4">
              <button
                type="button"
                className="btn"
                onClick={handleGoogleSignIn}
                style={{
                  background:
                    "linear-gradient(to right, #4285F4, #34A853, #FBBC05, #EA4335)",
                  color: "white",
                  border: "none",
                  padding: "10px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  transition: "background 0.3s ease",
                }}
              >
                <FaGoogle className="mr-2" />
                Sign in with Google
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastComponent />
    </div>
  );
};

export default Login;

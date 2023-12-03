/* eslint-disable no-unused-vars */
import { useForm, Controller } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { GoogleAuthProvider } from "firebase/auth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { toast } from "react-toastify";
import ToastComponent from "../../components/ToastComponent";
import Swal from "sweetalert2";

const Register = () => {
  const { handleSubmit, control } = useForm();
  const { handleCreateUser, googleSignUp } = useAuth();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  // google signup
  const googleProvider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    googleSignUp(googleProvider)
      .then((result) => {
        const detailedUser = result.user;

        // add user to database (if user email is not exists in DB)
        axiosPublic
          .post("/addUser", {
            uid: detailedUser.uid,
            name: detailedUser.displayName,
            email: detailedUser.email,
          })
          .then((response) => {
            Swal.fire({
              title: "Good job!",
              text: `${response.data.message}`,
              icon: "success",
            });
          })
          .catch((error) => {
            console.error(error);
          });

        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message.split(":");
        toast.error(errorMessage[1]);
      });
  };

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">
            Discover wonders, explore diverse landscapes, and create
            unforgettable memories with our platform&apos;s travel experiences.
          </p>
          <p className="py-4">Explore the world with our travel platform!</p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <Controller
                name="name"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    placeholder="name"
                    className="input input-bordered"
                    required
                  />
                )}
              />
            </div>
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
                Register
              </button>
            </div>
            <div className="form-control mt-4">
              <p className="text-sm">
                Already have an account?{" "}
                <Link to={"/login"} className="link link-hover">
                  Login here
                </Link>
              </p>
            </div>
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

export default Register;

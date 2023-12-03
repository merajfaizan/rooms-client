import { useForm, Controller } from "react-hook-form";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const Register = () => {
  const { handleSubmit, control } = useForm();

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
    </div>
  );
};

export default Register;

import { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const Registration = () => {
  const { createUser, signInWithGoogle, updateUserProfile } = use(AuthContext);

  const handleRegistration = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    const displayName = e.target.name.value
    const photoURL = e.target.photoURL.value

    createUser(email, password)
      .then((result) => {
        toast.success('Successfully registered!')
        console.log(result)
        updateUserProfile(displayName, photoURL)
      })
      .catch((err) => {
        toast.error(err.message)
        console.log(err);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="bg-base-200 p-10 min-h-screen shadow-2xl">
      <div className="flex-col justify-center items-center">
        <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <div className="h-[80px] w-[80px] bg-blue-500 mx-auto rounded-full"></div>
            <div className="text-center my-5">
              <h1 className="text-2xl font-bold">Sign up to WorkWise</h1>
              <p>Enter your details to create your account</p>
            </div>

            <form onSubmit={handleRegistration}>
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input
                  name="name"
                  type="text"
                  className="input"
                  placeholder="Name"
                  required
                />

                <label className="label">PhotoURL</label>
                <input
                  name="photoURL"
                  type="text"
                  className="input"
                  placeholder="PhotoURL"
                  required
                />

                <label className="label">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input"
                  placeholder="Email"
                  required
                />
                <label className="label">Password</label>
                <input
                  name="password"
                  type="password"
                  className="input"
                  placeholder="Password"
                  required
                />
                <button className="btn btn-neutral mt-4">Registration</button>
              </fieldset>
            </form>

            <div className="text-center">
              <p>OR</p>
              <div className="flex gap-1 justify-center my-5">
                <button onClick={handleGoogleSignIn} className="btn">
                  Sign in with Google
                </button>
                <button className="btn">Sign in with Github</button>
              </div>
              Have an account?{" "}
              <Link className="underline" to="/login">
                Login to your account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;

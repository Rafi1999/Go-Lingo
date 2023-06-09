import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const SignUp = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
  //const {user,createUser} = useContext(AuthContext);
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
   const [error,setError] = useState("")
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const handlePassword = (e) => {
        e.preventDefault;
        const passwordInput = e.target.value;
        setPassword(passwordInput);
        if (passwordInput.length < 6) {
          setPasswordError("Password must be at least 6 characters long");
        } else if (!/[A-Z]/.test(passwordInput)) {
          setPasswordError("Password must contain at least one capital letter");
        } else {
          setPasswordError("");
        }
      };
    const handleSignup = ()=>{}  
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className="mr-14 w-1/2">
      
      <img src={"https://static.vecteezy.com/system/resources/previews/003/689/228/non_2x/online-registration-or-sign-up-login-for-account-on-smartphone-app-user-interface-with-secure-password-mobile-application-for-ui-web-banner-access-cartoon-people-illustration-vector.jpg"} alt="" />
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
      <h1 className="text-4xl font-bold text-center">Sign Up</h1>
        <form onSubmit={handleSignup}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input name='name' type="text" placeholder="name" className="input input-bordered" />
        </div>
        <div className="mb-4">
  <label className="label">
    Photo URL
  </label>
  <input className="input input-bordered w-full" id="photo" type="text" name='photo' placeholder="photo" required></input>
</div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name='email' type="email" placeholder="email" className="input input-bordered" />
        </div>
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input className="input input-bordered" id="password" name='password' required value={password} onChange={handlePassword} type="password" placeholder="****************** "></input>
     {passwordError && <span className='error'>{passwordError}</span>}
          
        </div>
        <div className="form-control mt-6">
          <input className="btn btn-primary" type="submit" value="Sign Up" />
        </div>
        </form>
        <p className='my-4 text-center'>Already have an account? <Link 
        className='text-orange-500 font-semibold' to='/login'>Login</Link></p>
      <SocialLogin></SocialLogin>
      </div>
    </div>
  </div>
</div>
    );
};

export default SignUp;
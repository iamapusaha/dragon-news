
// import PropTypes from 'prop-types';

import { Link } from "react-router-dom";
import NavBar from "../shared/NavBar/NavBar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const LogIn = () => {
    const { signIn } = useContext(AuthContext)
    const handleLogIn = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.error(error);
            })
    }
    return (
        <div>
            <NavBar></NavBar>
            <div className="">
                <h1 className="text-4xl font-semibold text-center">Login your account</h1>
                <div className="divider md:w-3/4 lg:w-1/2 mx-auto"></div>
                <form onSubmit={handleLogIn} className="md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral">Login</button>
                    </div>
                </form>
                <p className="text-center mt-4">Dont’t Have An Account ? <Link className="text-red-400" to='/register'>Register</Link></p>
            </div>
        </div>
    );
};

LogIn.propTypes = {

};

export default LogIn;
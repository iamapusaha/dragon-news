
// import PropTypes from 'prop-types';

import { Link } from "react-router-dom";
import NavBar from "../shared/NavBar/NavBar";

const Register = () => {
    const handleRegister = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const photo = form.get('photo-url')
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, photo, email, password);
    }
    return (
        <div>
            <NavBar></NavBar>
            <div className="">
                <h1 className="text-4xl font-semibold text-center">Login your account</h1>
                <div className="divider md:w-3/4 lg:w-1/2 mx-auto"></div>
                <form onSubmit={handleRegister} className="md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <input type="text" placeholder="photo url" name="photo-url" className="input input-bordered" required />
                    </div>
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

                    </div>
                    <div className="flex gap-1">
                        <input type="checkbox" name="check-box" id="" />
                        <label htmlFor="check-box">Accept <a href="">Term & Conditions</a></label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral">Register</button>
                    </div>
                </form>
                <p className="text-center mt-4">Dont’t Have An Account ? <Link className="text-red-400" to='/login'>Login</Link></p>
            </div>
        </div>
    );
};

Register.propTypes = {

};

export default Register;
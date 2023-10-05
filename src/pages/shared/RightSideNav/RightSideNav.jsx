import { FaGithub, FaGoogle } from 'react-icons/fa';

const RightSideNav = () => {
    return (
        <div>
            <div>
                <h1 className="text-xl font-semibold mb-3">Login with</h1>
                <button className='flex gap-2 rounded-lg items-center border p-2 w-full justify-center mb-2'>
                    <FaGoogle></FaGoogle>
                    Login with Google
                </button>
                <button className='flex gap-2 rounded-lg items-center border p-2 w-full justify-center'>
                    <FaGithub></FaGithub>
                    Login with GitHub
                </button>
            </div>
        </div>
    );
};

export default RightSideNav;
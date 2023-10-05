import { FaFacebook, FaGithub, FaGoogle, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import Qimg1 from '../../../assets/qZone1.png'
import Qimg2 from '../../../assets/qZone2.png'
import Qimg3 from '../../../assets/qZone3.png'

const RightSideNav = () => {
    return (
        <div>
            <div className='mb-8'>
                <h1 className="text-xl font-semibold mb-3">Login with</h1>
                <button className='flex gap-2 rounded items-center border p-2 w-full justify-center mb-2'>
                    <FaGoogle></FaGoogle>
                    Login with Google
                </button>
                <button className='flex gap-2 rounded-lg items-center border p-2 w-full justify-center'>
                    <FaGithub></FaGithub>
                    Login with GitHub
                </button>
            </div>
            <div className='mb-8'>
                <h1 className="text-xl font-semibold mb-3">Find Us On</h1>
                <a href='#' className='flex gap-2 rounded-t items-center border p-4 w-full'>
                    <FaFacebook></FaFacebook>
                    Facebook
                </a>
                <a href='#' className='flex gap-2 items-center border-x p-4 w-full'>
                    <FaXTwitter></FaXTwitter>
                    XTwitter
                </a>
                <a href='#' className='flex gap-2 items-center rounded-b border p-4 w-full'>
                    <FaInstagram></FaInstagram>
                    Instragram
                </a>

            </div>
            <div className='text-xl font-semibold mb-3 bg-[#F3F3F3] p-4'>
                <h1 className='mb-10'>Q-Zone</h1>
                <div className='flex justify-center mb-5'>
                    <img src={Qimg1} alt="" />
                </div>
                <div className='flex justify-center mb-5'>
                    <img src={Qimg2} alt="" />
                </div>
                <div className='flex justify-center mb-5'>
                    <img src={Qimg3} alt="" />
                </div>
            </div>
        </div>
    );
};

export default RightSideNav;
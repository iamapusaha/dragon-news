import logo from '../../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center my-5'>
            <div className='flex justify-center'>
                <img className='mb-5' src={logo} alt="" />
            </div>
            <p className='text-lg font-normal mb-2 text-[#706F6F]'>Journalism Without Fear or Favour</p>
            <p className='text-xl font-medium text-[#706F6F]'>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;
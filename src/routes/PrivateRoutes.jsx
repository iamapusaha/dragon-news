
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
    const { user } = useContext(AuthContext)
    if (user) {
        return { children }
    }
    return <Navigate to='/login'></Navigate>
};

PrivateRoutes.propTypes = {
    children: PropTypes.node
};

export default PrivateRoutes;
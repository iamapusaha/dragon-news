import { createContext, useState } from "react";

import PropTypes from 'prop-types';
export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setuser] = useState([])
    const authInfo = { user }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
};

export default AuthProvider;
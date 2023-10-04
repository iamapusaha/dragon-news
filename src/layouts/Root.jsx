import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div className="container mx-auto font-poppins">
            <h1>this is root page</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;
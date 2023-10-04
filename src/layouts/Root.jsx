import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div>
            <h1>this is root page</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;
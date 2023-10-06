
// import PropTypes from 'prop-types';

import { useParams } from "react-router-dom";
import Header from "../shared/Header/Header";
import NavBar from "../shared/NavBar/NavBar";
import RightSideNav from "../shared/RightSideNav/RightSideNav";

const News = () => {
    const { id } = useParams()

    return (
        <div>
            <Header></Header>
            <NavBar></NavBar>
            <div className="grid grid-cols-1 md:grid-cols-4">
                <div className="md:col-span-3">
                    <h1>here is the news details</h1>
                    <p>{id}</p>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

News.propTypes = {

};

export default News;
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftSideNav = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <div className="">
                <h1 className="text-xl font-semibold">All Caterogy</h1>
                <ul className="menu menu-vertical text-xl font-medium">
                    {
                        categories.map(category =>
                            <li className="px-3" key={category.id}><Link to={`/category/${category.name}`}>{category.name}</Link></li>
                        )
                    }
                </ul>
            </div>
        </div>
    );
};

export default LeftSideNav;
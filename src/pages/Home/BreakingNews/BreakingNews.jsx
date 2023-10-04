import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    return (
        <div className="flex my-7 bg-[#F3F3F3]">
            <button className="btn btn-error">Braking News</button>
            <Marquee pauseOnHover={true} speed={200}>
                I can be a React component, multiple React components, or just some text.
            </Marquee>
        </div>
    );
};

export default BreakingNews;
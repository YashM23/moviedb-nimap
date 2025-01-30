import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="h-[200px] bg-blue-700/90 flex">
      <div className="w-1/3 flex flex-col items-center justify-center h-full">
        <h2 className="text-4xl text-white">MovieDb</h2>
        <p className="text-neutral-200 text-base">Learn about movies</p>
      </div>

      <div className="w-2/3 h-full flex justify-start items-center gap-20">
        <div className="text-neutral-200 flex flex-col gap-1">
          <p className="hover:text-yellow-300 duration-300 cursor-pointer">About</p>
          <p className="hover:text-yellow-300 duration-300 cursor-pointer">Privacy</p>
          <p className="hover:text-yellow-300 duration-300 cursor-pointer">Terms & Conditions</p>
          <p className="hover:text-yellow-300 duration-300 cursor-pointer">Home</p>
        </div>

        <div className="text-neutral-200 flex flex-col gap-1">
          <Link to="/" className="hover:text-yellow-300 duration-300">
            Popular
          </Link>
          <Link to="/top-rated" className="hover:text-yellow-300 duration-300">
            Top Rated
          </Link>
          <Link to="/upcoming" className="hover:text-yellow-300 duration-300">
            Upcoming
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;

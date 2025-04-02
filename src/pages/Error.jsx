import { Link } from "react-router-dom";
import back from '../assets/back.jpg';

const Error = () => {
  return (
    <div className="relative">
      <div
        className="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${back})` }}
      >
        <div className="absolute inset-0  bg-opacity-40"></div>
        <div className="max-w-md mx-auto text-center relative z-10 px-4">
          <div className="text-9xl font-bold text-white mb-4 drop-shadow-lg">404</div>
          <h1 className="text-5xl font-bold text-white mb-6 drop-shadow-md">Page not found</h1>
          <p className="text-xl text-white opacity-90 mb-8 max-w-lg mx-auto leading-relaxed">
            Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
          </p>
          <Link
            to="/"
            className="inline-flex items-center justify-center bg-white bg-opacity-20 hover:bg-opacity-30 border-2 border-white border-opacity-50 hover:border-opacity-80 text-white font-medium rounded-full px-8 py-3 transition-all duration-300 group"
          >
            <span className="mr-2 group-hover:-translate-x-1 transition-transform duration-300">←</span> 
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Error;

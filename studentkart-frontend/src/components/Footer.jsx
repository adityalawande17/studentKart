import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-4">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">StudentKart</h2>
          <p className="text-sm text-gray-400">
            Your one-stop platform for study materials, interview preparation,
            and structured learning roadmaps.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/materials" className="hover:text-white">
                Materials
              </Link>
            </li>
            <li>
              <Link to="/interview" className="hover:text-white">
                Interview
              </Link>
            </li>
            <li>
              <Link to="/roadmaps" className="hover:text-white">
                Roadmaps
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Get Started</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/login" className="hover:text-white">
                Login
              </Link>
            </li>
            <li>
              <Link to="/register" className="hover:text-white">
                Register
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <p className="text-sm text-gray-400">Email: temp@studentkart.com</p>
          <p className="text-sm text-gray-400">Pune, Maharashtra</p>
          <li className="list-none">
            <Link to="/about" className="hover:text-white">
              Github
            </Link>
          </li>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} StudentKart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

// import { Link, useNavigate } from "react-router-dom";
// import React from "react";

// const Navbar = () => {
//   const navigate = useNavigate();
//   const token = localStorage.getItem("token");
//   const role = localStorage.getItem("role");

//   const handleLogout = () => {
//     localStorage.clear();
//     navigate("/login");
//   };

//   return (
//     <nav style={{ padding: "20px", borderBottom: "2px solid #ddd" }}>
//       <div
//         className="navbar-brand"
//         style={{ padding: "10px", fontSize: "17px" }}
//       >
//         <img
//           className="main-logo"
//           src="/mainlogo.png"
//           alt="Studentkart Logo"
//           onClick={() => navigate("/")}
//           style={{
//             height: "50px",
//             cursor: "pointer",
//             transition: "transform 0.3s ease",
//           }}
//         />

//         <Link to="/" style={{ marginLeft: "350px" }}>
//           Home
//         </Link>
//         <Link to="/interview">Interview</Link>
//         <Link to="/roadmaps">Roadmaps</Link>

//         <Link to="/materials">Materials</Link>

//         <Link to="/about">About</Link>

//         {role === "admin" && <Link to="/admin">Admin</Link>}
//         {!token ? (
//           <Link to="/login">Login</Link>
//         ) : (
//           <button onClick={handleLogout} style={{ marginRight: "100px" }}>
//             Logout
//           </button>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import { Link, useNavigate } from "react-router-dom";
import React from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Left: Logo */}
          <div className="flex items-center gap-3">
            <img
              src="/logo3.png"
              alt="Studentkart Logo"
              className="h-10 cursor-pointer hover:scale-105 transition-transform"
              onClick={() => navigate("/")}
            />
          </div>

          {/* Center: Links */}
          <div className="hidden md:flex items-center gap-6">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/materials">
              Academics
            </Link>
            <Link className="nav-link" to="/interview">
              Interview
            </Link>
            <Link className="nav-link" to="/roadmaps">
              Roadmaps
            </Link>
            <Link className="nav-link" to="/about">
              About
            </Link>

            {role === "admin" && (
              <Link className="font-semibold text-blue-600" to="/admin">
                Admin
              </Link>
            )}
          </div>

          {/* Right: Auth */}
          <div className="flex items-center gap-4">
            {!token ? (
              <>
                <Link
                  to="/login"
                  className="px-4 py-1.5 rounded-3xl bg-blue-300 text-white hover:bg-blue-400"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-1.5 rounded-3xl bg-blue-300  text-white hover:bg-blue-400"
                >
                  Register
                </Link>
              </>
            ) : (
              <>
                <button
                  onClick={handleLogout}
                  className="px-4 py-1.5 rounded-3xl bg-red-600 text-white hover:bg-red-500"
                >
                  Logout
                </button>

                <Link to="/profile">Profile</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

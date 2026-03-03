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
// import { Link, useNavigate } from "react-router-dom";

// const Navbar = () => {
//   const navigate = useNavigate();
//   const token = localStorage.getItem("token");
//   const role = localStorage.getItem("role");

//   const handleLogout = () => {
//     localStorage.clear();
//     navigate("/login");
//   };

//   return (
//     <nav className="bg-white shadow">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="flex items-center justify-between h-20">
//           {/* Left: Logo */}
//           <div className="flex items-center gap-3">
//             <img
//               src="/logo3.png"
//               alt="Studentkart Logo"
//               className="h-10 cursor-pointer hover:scale-105 transition-transform"
//               onClick={() => navigate("/")}
//             />
//           </div>

//           {/* Center: Links */}
//           <div className="hidden md:flex items-center gap-6">
//             <Link className="nav-link" to="/">
//               Home
//             </Link>
//             <Link className="nav-link" to="/materials">
//               Academics
//             </Link>
//             <Link className="nav-link" to="/interview">
//               Interview
//             </Link>
//             <Link className="nav-link" to="/roadmaps">
//               Roadmaps
//             </Link>
//             <Link className="nav-link" to="/about">
//               About
//             </Link>

//             {role === "admin" && (
//               <Link className="font-semibold text-blue-600" to="/admin">
//                 Admin
//               </Link>
//             )}
//           </div>

//           {/* Right: Auth */}
//           <div className="flex items-center gap-4">
//             {!token ? (
//               <>
//                 <Link
//                   to="/login"
//                   className="px-4 py-1.5 rounded-3xl bg-blue-300 text-white hover:bg-blue-400"
//                 >
//                   Login
//                 </Link>
//                 <Link
//                   to="/register"
//                   className="px-4 py-1.5 rounded-3xl bg-blue-300  text-white hover:bg-blue-400"
//                 >
//                   Register
//                 </Link>
//               </>
//             ) : (
//               <>
//                 <button
//                   onClick={handleLogout}
//                   className="px-4 py-1.5 rounded-3xl bg-red-600 text-white hover:bg-red-500"
//                 >
//                   Logout
//                 </button>

//                 <Link to="/profile" className="flex items-center">
//                   <img
//                     src="/circle-user.png"
//                     alt="Profile"
//                     className="w-8 h-8 rounded-full object-cover hover:scale-105 transition"
//                   />
//                 </Link>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import { Link, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-white shadow relative z-50">
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
                  className="px-4 py-1.5 rounded-3xl bg-blue-300 text-white hover:bg-blue-400 transition"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-1.5 rounded-3xl bg-blue-300 text-white hover:bg-blue-400 transition"
                >
                  Register
                </Link>
              </>
            ) : (
              <div className="relative" ref={dropdownRef}>
                {/* Avatar Button */}
                <button
                  onClick={() => setOpen(!open)}
                  className="flex items-center gap-2 hover:bg-gray-100 px-3 py-1.5 rounded-full transition"
                >
                  <img
                    src="/circle-user.png"
                    alt="Profile"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span className="text-sm">▼</span>
                </button>

                {/* Dropdown */}
                {open && (
                  <div className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-lg border py-2">
                    <Link
                      to="/profile"
                      className="block px-4 py-2 hover:bg-gray-100 text-sm"
                      onClick={() => setOpen(false)}
                    >
                      Profile
                    </Link>

                    <button
                      onClick={() => {
                        handleLogout();
                        setOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm text-red-600"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// import { useNavigate } from "react-router-dom";
// import PageWrapper from "../components/PageWrapper";

// const Home = () => {
//   const navigate = useNavigate();

//   return (
//     <PageWrapper>
//       {/* Hero Section */}
//       <div className="bg-white rounded-lg shadow p-8 mb-10">
//         <h1 className="text-4xl font-bold mb-4 text-blue-400">StudentKart</h1>

//         <p className="text-lg text-gray-700 mb-6">
//           Your one-stop platform for college materials, interview preparation,
//           and structured learning roadmaps.
//         </p>

//         <div className="flex gap-4">
//           <button
//             onClick={() => navigate("/materials")}
//             className="px-6 py-3 bg-blue-400 text-white rounded hover:bg-blue-300"
//           >
//             Browse Materials
//           </button>

//           <button
//             onClick={() => navigate("/interview")}
//             className="px-6 py-3 border border-blue-600 text-blue-600 rounded hover:bg-blue-50"
//           >
//             Interview Prep
//           </button>
//         </div>
//       </div>

//       {/* Features Section */}
//       <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//         <div className="bg-white rounded-lg shadow p-6">
//           <h3 className="text-xl font-semibold mb-2"> College Materials</h3>
//           <p className="text-gray-600">
//             Organized study materials for FE, SE, TE, and BE students.
//           </p>
//         </div>

//         <div className="bg-white rounded-lg shadow p-6">
//           <h3 className="text-xl font-semibold mb-2">Interview Preparation</h3>
//           <p className="text-gray-600">
//             Curated resources for DSA, CS subjects, and placement prep.
//           </p>
//         </div>

//         <div className="bg-white rounded-lg shadow p-6">
//           <h3 className="text-xl font-semibold mb-2"> Learning Roadmaps</h3>
//           <p className="text-gray-600">
//             Clear step-by-step roadmaps to guide your learning journey.
//           </p>
//         </div>
//       </div>
//     </PageWrapper>
//   );
// };

// export default Home;

import { useNavigate } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";

const Home = () => {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      {/* HERO BANNER */}
      <div className="relative h-[80vh] overflow-hidden mb-16 shadow-lg">
        <img
          src="https://images.pexels.com/photos/5676738/pexels-photo-5676738.jpeg"
          alt="Students studying"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-5xl font-bold text-white mb-6">StudentKart</h1>

          <p className="text-xl text-gray-200 mb-8 max-w-2xl">
            Your one-stop platform for everything — study materials, interview
            preparation, and structured learning roadmaps.
          </p>

          <div className="flex gap-6">
            <button
              onClick={() => navigate("/materials")}
              className="px-8 py-3 bg-blue-400 text-white rounded-3xl text-lg hover:bg-blue-500 transition"
            >
              Explore Academics
            </button>

            <button
              onClick={() => navigate("/interview")}
              className="px-8 py-3 border border-white text-white rounded-3xl text-lg hover:bg-white hover:text-black transition"
            >
              Start Preparing
            </button>
          </div>
        </div>
      </div>

      {/* STATS SECTION */}
      <div className="grid md:grid-cols-3 gap-8 text-center mb-16">
        <div>
          <h2 className="text-4xl font-bold text-blue-500">1000+</h2>
          <p className="text-gray-600">Study Materials</p>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-blue-500">500+</h2>
          <p className="text-gray-600">Interview Questions</p>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-blue-500">10+</h2>
          <p className="text-gray-600">Learning Roadmaps</p>
        </div>
      </div>

      {/* FEATURES SECTION */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-20">
        <div className="bg-white rounded-2xl shadow-lg p-8 hover:scale-105 transition">
          <h3 className="text-xl font-semibold mb-4 text-blue-500">
            College Materials
          </h3>
          <p className="text-gray-600">
            Well-organized notes, PDFs, and resources for FE, SE, TE, and BE
            students.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 hover:scale-105 transition">
          <h3 className="text-xl font-semibold mb-4 text-blue-500">
            Interview Preparation
          </h3>
          <p className="text-gray-600">
            Practice DSA, CS subjects, and placement-focused content curated for
            success.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-8 hover:scale-105 transition">
          <h3 className="text-xl font-semibold mb-4 text-blue-500">
            Structured Roadmaps
          </h3>
          <p className="text-gray-600">
            Clear step-by-step learning paths to build strong technical
            foundations.
          </p>
        </div>
      </div>

      {/* SECONDARY BANNER */}
      <div className="relative h-[30vh] rounded-3xl overflow-hidden mb-16 shadow-lg blur-10">
        <img
          src="https://images.unsplash.com/photo-1610116306796-6fea9f4fae38?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Books"
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-center px-6">
          <h2 className="text-white text-3xl font-bold mb-4">
            Learn Smarter. Prepare Better. Achieve More.
          </h2>
          <p className="mb-6 text-lg text-white">
            Join thousands of students who trust StudentKart for academic
            success.
          </p>
          <button
            onClick={() => navigate("/register")}
            className="px-8 py-3 border border-white text-white rounded-3xl text-lg hover:bg-white hover:text-black transition"
          >
            Get Started
          </button>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Home;

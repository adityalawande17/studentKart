import { useNavigate } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";

const Home = () => {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      {/* Hero Section */}
      <div className="bg-white rounded-lg shadow p-8 mb-10">
        <h1 className="text-4xl font-bold mb-4 text-blue-600">StudentKart</h1>

        <p className="text-lg text-gray-700 mb-6">
          Your one-stop platform for college materials, interview preparation,
          and structured learning roadmaps.
        </p>

        <div className="flex gap-4">
          <button
            onClick={() => navigate("/materials")}
            className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Browse Materials
          </button>

          <button
            onClick={() => navigate("/interview")}
            className="px-6 py-3 border border-blue-600 text-blue-600 rounded hover:bg-blue-50"
          >
            Interview Prep
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold mb-2"> College Materials</h3>
          <p className="text-gray-600">
            Organized study materials for FE, SE, TE, and BE students.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold mb-2">Interview Preparation</h3>
          <p className="text-gray-600">
            Curated resources for DSA, CS subjects, and placement prep.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold mb-2"> Learning Roadmaps</h3>
          <p className="text-gray-600">
            Clear step-by-step roadmaps to guide your learning journey.
          </p>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Home;

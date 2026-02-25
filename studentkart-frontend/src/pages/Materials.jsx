import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMaterials } from "../services/api.js";
import PageWrapper from "../components/PageWrapper.jsx";

const Materials = () => {
  const { year, subject } = useParams();
  const navigate = useNavigate();
  const [materials, setMaterials] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await getMaterials(year, subject);
        setMaterials(data);
      } catch (err) {
        setError("Failed to load materials. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [year, subject]);

  const uniqueSubjects = [...new Set(materials.map((m) => m.subject))];

  const filteredMaterials = materials.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.subject.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <PageWrapper>
      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-6">College Materials</h1>

      {/* Year Filter */}
      <div className="flex flex-wrap items-center gap-4 mb-6">
        <select
          value={year || ""}
          onChange={(e) => {
            const selectedYear = e.target.value;
            selectedYear
              ? navigate(`/materials/${selectedYear}`)
              : navigate("/materials");
          }}
          className="px-4 py-2 border rounded-md"
        >
          <option value="">All Years</option>
          <option value="FE">FE</option>
          <option value="SE">SE</option>
          <option value="TE">TE</option>
          <option value="BE">BE</option>
        </select>

        {(year || subject) && (
          <button
            onClick={() => navigate("/materials")}
            className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
          >
            Reset
          </button>
        )}
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by title or subject..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-1/2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Subject Filter */}
      {year && !loading && !error && (
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-3">Select Subject</h2>
          <div className="flex flex-wrap gap-3">
            {uniqueSubjects.map((sub) => (
              <button
                key={sub}
                onClick={() => navigate(`/materials/${year}/${sub}`)}
                className={`px-4 py-2 rounded-full border ${
                  subject === sub
                    ? "bg-blue-400 text-white"
                    : "bg-white hover:bg-gray-100"
                }`}
              >
                {sub}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Selected Info */}
      {(year || subject) && (
        <div className="mb-6 text-gray-600">
          {year && <span className="mr-4">Year: {year}</span>}
          {subject && <span>Subject: {subject}</span>}
        </div>
      )}

      {/* Loading State */}
      {loading && (
        <div className="text-center py-10 text-gray-500">
          Loading materials...
        </div>
      )}

      {/* Error State */}
      {error && <div className="text-center py-10 text-red-500">{error}</div>}

      {/* Empty State */}
      {!loading && !error && filteredMaterials.length === 0 && (
        <div className="text-center py-10 text-gray-500">
          No materials found.
        </div>
      )}

      {/* Materials Grid */}
      {!loading && !error && filteredMaterials.length > 0 && (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredMaterials.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-3xl shadow p-5 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">
                  {item.subject} · {item.year}
                </p>
              </div>

              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="mt-4 text-center bg-blue-400 text-white py-2 rounded-3xl hover:bg-blue-600"
              >
                Open Material
              </a>
            </div>
          ))}
        </div>
      )}
    </PageWrapper>
  );
};

export default Materials;

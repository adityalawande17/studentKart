import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMaterials } from "../services/api.js";
import PageWrapper from "../components/PageWrapper.jsx";
import { getBookmarks, removeBookmark, addBookmark } from "../services/api.js";

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
    (material) =>
      material.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      material.subject.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const groupedBySubject = filteredMaterials.reduce((acc, material) => {
    if (!acc[material.subject]) {
      acc[material.subject] = {};
    }

    if (!acc[material.subject][material.unit]) {
      acc[material.subject][material.unit] = [];
    }

    acc[material.subject][material.unit].push(material);

    return acc;
  }, {});

  const [openUnit, setOpenUnit] = useState(null);
  const [openSubject, setOpenSubject] = useState(null);
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const fetchBookmarks = async () => {
      try {
        const data = await getBookmarks();
        setBookmarks(data.map((b) => b._id));
      } catch (err) {
        console.log("Not logged in");
      }
    };

    fetchBookmarks();
  }, []);

  const handleBookmark = async (materialId) => {
    if (!localStorage.getItem("token")) {
      alert("Login first");
      return;
    }

    if (bookmarks.includes(materialId)) {
      await removeBookmark(materialId);
      setBookmarks(bookmarks.filter((id) => id !== materialId));
    } else {
      await addBookmark(materialId);
      setBookmarks([...bookmarks, materialId]);
    }
  };

  useEffect(() => {
    if (searchTerm) {
      setOpenSubject("ALL");
    }
  }, [searchTerm]);

  return (
    <PageWrapper>
      {/* Page Title */}
      {/* <h1 className="text-3xl font-bold mb-6">College Materials</h1> */}

      {/* HERO SECTION */}
      <div className="relative overflow-hidden mb-12 shadow-lg">
        {/* Background Image */}
        <img
          src="https://plus.unsplash.com/premium_photo-1682974406908-66032d609d94?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGFjYWRlbWljfGVufDB8fDB8fHww"
          alt="Students preparing"
          className="w-full h-[300px] object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center p-10">
          <h1 className="text-4xl font-bold mb-4 text-white">
            Score That 9+ CGPA This Semester
          </h1>

          <p className="text-lg max-w-2xl text-gray-200">
            Cause we have everything you'll ever need.
          </p>
        </div>
      </div>

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
      {Object.keys(groupedBySubject).map((subject) => (
        <div key={subject} className="mb-6 border rounded-lg bg-white shadow">
          {/* SUBJECT HEADER */}
          <button
            onClick={() =>
              setOpenSubject(openSubject === subject ? null : subject)
            }
            className="w-full text-left px-6 py-4 text-xl font-bold flex justify-between"
          >
            {subject}
            <span>{openSubject === subject ? "▲" : "▼"}</span>
          </button>

          {/* IF SUBJECT OPEN */}
          {openSubject === subject && (
            <div className="p-6 border-t">
              {Object.keys(groupedBySubject[subject]).map((unit) => (
                <div key={unit} className="mb-4">
                  {/* UNIT HEADER */}
                  <button
                    onClick={() => setOpenUnit(openUnit === unit ? null : unit)}
                    className="w-full text-left px-4 py-2 font-semibold bg-gray-100 rounded flex justify-between"
                  >
                    {unit}
                    <span>{openUnit === unit ? "▲" : "▼"}</span>
                  </button>

                  {/* IF UNIT OPEN */}
                  {openUnit === unit && (
                    <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {groupedBySubject[subject][unit].map((item) => (
                        <div
                          key={item._id}
                          className="bg-gray-50 p-4 rounded shadow"
                        >
                          <h3 className="font-semibold mb-2">{item.title}</h3>
                          <button
                            onClick={() => handleBookmark(item._id)}
                            className={`mt-2 text-sm ${
                              bookmarks.includes(item._id)
                                ? "text-red-600"
                                : "text-gray-500"
                            }`}
                          >
                            {bookmarks.includes(item._id)
                              ? "❤️ Saved"
                              : "🤍 Save"}
                          </button>
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noreferrer"
                            className="block text-center bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                          >
                            Open Material
                          </a>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </PageWrapper>
  );
};

export default Materials;

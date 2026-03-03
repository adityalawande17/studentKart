import { useState, useEffect } from "react";
import {
  addMaterial,
  deleteMaterial,
  getMaterials,
  updateMaterial,
} from "../services/api.js";
import PageWrapper from "../components/PageWrapper.jsx";

const Admin = () => {
  const [form, setForm] = useState({
    title: "",
    year: "SE",
    subject: "",
    unit: "Unit 1",
    category: "college",
    link: "",
  });
  const [loading, setLoading] = useState(false);
  const [deleteLoadingId, setDeleteLoadingId] = useState(null);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  const [materials, setMaterials] = useState([]);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    getMaterials().then(setMaterials);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError(null);
      setMessage(null);

      let res;

      if (editId) {
        res = await updateMaterial(editId, form);
        setMaterials(materials.map((m) => (m._id === editId ? res : m)));
        setMessage("Material updated successfully!");
        setEditId(null);
      } else {
        res = await addMaterial(form);
        setMaterials([res, ...materials]);
        setMessage("Material added successfully!");
      }

      setForm({
        title: "",
        year: "SE",
        subject: "",
        category: "college",
        link: "",
      });
    } catch (err) {
      setError("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      setDeleteLoadingId(id);
      setError(null);
      setMessage(null);

      const res = await deleteMaterial(id);

      if (res.message === "Material deleted") {
        setMaterials(materials.filter((m) => m._id !== id));
        setMessage("Material deleted successfully.");
      } else {
        setError("Failed to delete material.");
      }
    } catch (err) {
      setError("Something went wrong.");
    } finally {
      setDeleteLoadingId(null);
    }
  };

  return (
    <PageWrapper>
      <h1 className="text-3xl font-bold mb-8">Admin Panel</h1>
      {message && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">
          {message}
        </div>
      )}

      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">{error}</div>
      )}

      {/* Add Material Form */}
      <div className="bg-white shadow p-6 mb-10">
        <h2 className="text-xl font-semibold mb-4">Add New Material</h2>

        <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
          <input
            name="title"
            placeholder="Title"
            value={form.title}
            onChange={handleChange}
            required
            className="border px-4 py-2 rounded"
          />

          <input
            name="subject"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
            required
            className="border px-4 py-2 rounded"
          />

          <select
            name="year"
            value={form.year}
            onChange={handleChange}
            className="border px-4 py-2 rounded"
          >
            <option value="FE">FE</option>
            <option value="SE">SE</option>
            <option value="TE">TE</option>
            <option value="BE">BE</option>
          </select>

          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="border px-4 py-2 rounded"
          >
            <option value="college">College</option>
            <option value="interview">Interview</option>
            <option value="roadmap">Roadmap</option>
          </select>

          <select
            name="unit"
            value={form.unit}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          >
            <option value="Unit 1">Unit 1</option>
            <option value="Unit 2">Unit 2</option>
            <option value="Unit 3">Unit 3</option>
            <option value="Unit 4">Unit 4</option>
            <option value="Unit 5">Unit 5</option>
            <option value="Unit 6">Unit 6</option>
            <option value="Extra">Extra Material</option>
          </select>

          <input
            name="link"
            placeholder="Material Link"
            value={form.link}
            onChange={handleChange}
            required
            className="border px-4 py-2 rounded sm:col-span-2"
          />

          <button
            type="submit"
            disabled={loading}
            className={`sm:col-span-2 py-2 rounded-3xl text-black border-1 border-black ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : editId
                  ? "bg-yellow-500 hover:bg-yellow-600"
                  : "bg-blue-200 hover:bg-blue-300"
            }`}
          >
            {loading
              ? editId
                ? "Updating..."
                : "Adding..."
              : editId
                ? "Update"
                : "Add"}
          </button>
        </form>
      </div>

      {/* Materials List */}
      <h2 className="text-xl font-semibold mb-4">All Materials</h2>

      <div className="grid gap-4">
        {materials.map((item) => (
          <div
            key={item._id}
            className="bg-white shadow p-4 flex justify-between items-center"
          >
            <div>
              <p className="font-semibold">{item.title}</p>
              <p className="text-sm text-gray-600">
                {item.year} · {item.subject}
              </p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  setForm({
                    title: item.title,
                    year: item.year,
                    subject: item.subject,
                    category: item.category,
                    link: item.link,
                  });
                  setEditId(item._id);
                }}
                className="p-2 rounded-full hover:bg-yellow-100 transition"
              >
                <img src="/pencil.png" alt="Edit" className="w-5 h-5" />
              </button>

              <button
                onClick={() => handleDelete(item._id)}
                disabled={deleteLoadingId === item._id}
                className={`p-2 rounded-full transition ${
                  deleteLoadingId === item._id
                    ? "bg-gray-200 cursor-not-allowed"
                    : "hover:bg-red-100"
                }`}
              >
                {deleteLoadingId === item._id ? (
                  <span className="text-sm text-gray-500">...</span>
                ) : (
                  <img src="/cross.png" alt="Delete" className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
};

export default Admin;

import { useEffect, useState } from "react";
import { getBookmarks } from "../services/api";
import PageWrapper from "../components/PageWrapper";

const Profile = () => {
  const [saved, setSaved] = useState([]);

  useEffect(() => {
    const fetchSaved = async () => {
      const data = await getBookmarks();
      setSaved(data);
    };

    fetchSaved();
  }, []);

  return (
    <PageWrapper>
      <div className="max-w-6xl mx-auto mt-10">
        <h1 className="text-3xl font-bold mb-6">Saved Materials</h1>

        {saved.length === 0 ? (
          <p>No bookmarks yet.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {saved.map((item) => (
              <div key={item._id} className="bg-white rounded-lg shadow p-5">
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="block text-center bg-blue-600 text-white py-2 rounded"
                >
                  Open Material
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </PageWrapper>
  );
};

export default Profile;

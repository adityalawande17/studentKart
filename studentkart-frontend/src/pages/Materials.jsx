import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMaterials } from "../services/api.js";

const Materials = () => {
  const { year, subject } = useParams();
  const navigate = useNavigate();
  const [materials, setMaterials] = useState([]);

  useEffect(() => {
    getMaterials(year, subject).then((data) => {
      setMaterials(data);
    });
  }, [year, subject]);

  const uniqueSubjects = [...new Set(materials.map((m) => m.subject))];

  return (
    <div>
      <h2>Materials</h2>

      <select
        value={year || ""}
        onChange={(e) => {
          const selectedYear = e.target.value;
          if (selectedYear) {
            navigate(`/materials/${selectedYear}`);
          } else {
            navigate("/materials");
          }
        }}
      >
        <option value="">All Years</option>
        <option value="FE">FE</option>
        <option value="SE">SE</option>
        <option value="TE">TE</option>
        <option value="BE">BE</option>
      </select>

      {year && (
        <>
          <h4>Select Subject</h4>
          <ul>
            {uniqueSubjects.map((sub) => (
              <li key={sub}>
                <button onClick={() => navigate(`/materials/${year}/${sub}`)}>
                  {sub}
                </button>
              </li>
            ))}
          </ul>
        </>
      )}

      <button onClick={() => navigate(`/materials/${year}`)}>Reset</button>

      {year && <h4>Year: {year}</h4>}
      {subject && <h4>Subject: {subject}</h4>}

      {materials.map((item) => (
        <div key={item._id}>
          <h3>{item.title}</h3>
          <p>
            {item.subject} - {item.year}
          </p>
          <a href={item.link} target="_blank" rel="noreferrer">
            Open
          </a>
        </div>
      ))}
    </div>
  );
};

export default Materials;

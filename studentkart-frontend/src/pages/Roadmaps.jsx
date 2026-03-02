// import PageWrapper from "../components/PageWrapper";

// const roadmaps = [
//   {
//     title: "Web Development",
//     steps: [
//       "HTML, CSS, JavaScript",
//       "React",
//       "Node.js & Express",
//       "MongoDB",
//       "Build Projects",
//       "Deploy & Optimize",
//     ],
//   },
//   {
//     title: "DSA Roadmap",
//     steps: [
//       "Arrays & Strings",
//       "Linked List",
//       "Stack & Queue",
//       "Trees",
//       "Graphs",
//       "Dynamic Programming",
//     ],
//   },
// ];

// const Roadmaps = () => {
//   return (
//     <PageWrapper>
//       {/* Page Title */}
//       <h1 className="text-3xl font-bold mb-8">Learning Roadmaps</h1>

//       {/* Roadmaps Grid */}
//       <div className="grid gap-6 sm:grid-cols-2">
//         {roadmaps.map((rm) => (
//           <div key={rm.title} className="bg-white rounded-lg shadow p-6">
//             <h2 className="text-xl font-semibold mb-4">{rm.title}</h2>

//             <ol className="list-decimal ml-5 space-y-2 text-gray-700">
//               {rm.steps.map((step, index) => (
//                 <li key={index}>{step}</li>
//               ))}
//             </ol>
//           </div>
//         ))}
//       </div>
//     </PageWrapper>
//   );
// };

// export default Roadmaps;

import PageWrapper from "../components/PageWrapper";
import { useState, useEffect } from "react";
import ChevronDown from "lucide-react/dist/esm/icons/chevron-down";

const roadmapsData = [
  {
    id: "web",
    title: "Web Development",
    steps: [
      "HTML",
      "CSS",
      "Tailwind",
      "JavaScript",
      "React",
      "Node.js & Express",
      "MongoDB",
      "Build Projects",
      "Deploy & Optimize",
    ],
  },
  {
    id: "dsa",
    title: "DSA Roadmap",
    steps: [
      "Select Language : C++ / Java / Python",
      "Learn Patterns",
      "C++ STL / Java Collections",
      "Time Complexity / Space Complexity",
      "Sorting Techniques",
      "Arrays",
      "Linked List",
      "Strings",
      "Stack and Queues",
      "Recursion",
      "Bit-Manipulation",
      "Sliding Window",
      "Heaps",
      "Greedy Algorithm",
      "Trees",
      "Graphs",
      "Dynamic Programming",
    ],
  },
];

const Roadmaps = () => {
  const [progress, setProgress] = useState({});
  const [openRoadmap, setOpenRoadmap] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("roadmapProgress");
    if (saved) setProgress(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("roadmapProgress", JSON.stringify(progress));
  }, [progress]);

  const toggleStep = (roadmapId, stepIndex) => {
    setProgress((prev) => {
      const roadmapProgress = prev[roadmapId] || [];
      const updated = roadmapProgress.includes(stepIndex)
        ? roadmapProgress.filter((i) => i !== stepIndex)
        : [...roadmapProgress, stepIndex];

      return { ...prev, [roadmapId]: updated };
    });
  };

  const calculatePercentage = (roadmapId, totalSteps) => {
    const completed = progress[roadmapId]?.length || 0;
    return Math.round((completed / totalSteps) * 100);
  };

  return (
    <PageWrapper>
      <h1 className="text-3xl font-bold mb-10">Learning Roadmaps</h1>

      <div className="space-y-8">
        {roadmapsData.map((rm) => {
          const percentage = calculatePercentage(rm.id, rm.steps.length);
          const isOpen = openRoadmap === rm.id;

          return (
            <div
              key={rm.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              {/* HEADER */}
              <div
                className="flex justify-between items-center p-6 cursor-pointer"
                onClick={() => setOpenRoadmap(isOpen ? null : rm.id)}
              >
                <div>
                  <h2 className="text-xl font-semibold">{rm.title}</h2>
                  <p className="text-sm text-blue-600 mt-1">
                    {percentage}% Completed
                  </p>
                </div>

                <ChevronDown
                  className={`transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </div>

              {/* PROGRESS BAR */}
              <div className="px-6">
                <div className="w-full bg-gray-200 h-2 rounded-full">
                  <div
                    className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>

              {/* VERTICAL STEPS */}
              {isOpen && (
                <div className="p-6">
                  <div className="space-y-4">
                    {rm.steps.map((step, index) => {
                      const isChecked =
                        progress[rm.id]?.includes(index) || false;

                      return (
                        <div
                          key={index}
                          className="flex items-center justify-between bg-gray-50 p-4 rounded-lg"
                        >
                          <div className="flex items-center gap-4">
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onChange={() => toggleStep(rm.id, index)}
                              className="w-5 h-5 accent-blue-500"
                            />

                            <span
                              className={`${
                                isChecked
                                  ? "line-through text-gray-400"
                                  : "text-gray-700"
                              }`}
                            >
                              {step}
                            </span>
                          </div>

                          {isChecked && (
                            <span className="text-green-500 text-sm font-medium">
                              Completed
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </PageWrapper>
  );
};

export default Roadmaps;

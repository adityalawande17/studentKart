// import PageWrapper from "../components/PageWrapper";

// const interviewResources = [
//   {
//     title: "DSA Preparation",
//     links: [
//       { name: "Striver DSA Sheet", url: "https://takeuforward.org" },
//       { name: "LeetCode", url: "https://leetcode.com" },
//       { name: "NeetCode Roadmap", url: "https://neetcode.io" },
//     ],
//   },
//   {
//     title: "Core CS Subjects",
//     links: [
//       { name: "OS Notes", url: "https://os-notes-link.com" },
//       { name: "DBMS Notes", url: "https://dbms-notes-link.com" },
//       { name: "CN Notes", url: "https://cn-notes-link.com" },
//     ],
//   },
// ];

// const Interview = () => {
//   return (
//     <PageWrapper>
//       {/* Page Title */}
//       <h1 className="text-3xl font-bold mb-8">Interview Preparation</h1>

//       {/* Sections Grid */}
//       <div className="grid gap-6 sm:grid-cols-2">
//         {interviewResources.map((section) => (
//           <div key={section.title} className="bg-white rounded-lg shadow p-6">
//             <h2 className="text-xl font-semibold mb-4">{section.title}</h2>

//             <ul className="space-y-3">
//               {section.links.map((link) => (
//                 <li key={link.name}>
//                   <a
//                     href={link.url}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="text-blue-600 hover:underline hover:text-blue-800"
//                   >
//                     {link.name}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </PageWrapper>
//   );
// };

// export default Interview;

import PageWrapper from "../components/PageWrapper";
import { useState } from "react";

const interviewResources = [
  {
    category: "DSA Preparation",
    description: "Master Data Structures & Algorithms for coding interviews.",
    links: [
      {
        name: "Striver DSA Sheet",
        url: "https://takeuforward.org",
        level: "Intermediate",
      },
      { name: "LeetCode", url: "https://leetcode.com", level: "Beginner" },
      {
        name: "NeetCode Roadmap",
        url: "https://neetcode.io",
        level: "Advanced",
      },
    ],
  },
  {
    category: "Core CS Subjects",
    description: "Revise fundamental computer science subjects for placements.",
    links: [
      { name: "OS Notes", url: "#", level: "Intermediate" },
      { name: "DBMS Notes", url: "#", level: "Intermediate" },
      { name: "CN Notes", url: "#", level: "Beginner" },
    ],
  },
];

const Interview = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...interviewResources.map((r) => r.category)];

  const filteredResources =
    activeCategory === "All"
      ? interviewResources
      : interviewResources.filter((r) => r.category === activeCategory);

  return (
    <PageWrapper>
      {/* HERO SECTION */}
      <div className="relative overflow-hidden mb-12 shadow-lg">
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nfGVufDB8fDB8fHww"
          alt="Students preparing"
          className="w-full h-[300px] object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center p-10">
          <h1 className="text-4xl font-bold mb-4 text-white">
            Crack Your Placement Interviews
          </h1>

          <p className="text-lg max-w-2xl text-gray-200">
            Structured resources for DSA, Core CS subjects, and complete
            placement preparation — all in one place.
          </p>
        </div>
      </div>

      {/* CATEGORY FILTER */}
      <div className="flex flex-wrap gap-4 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full border transition ${
              activeCategory === cat
                ? "bg-blue-500 text-white border-blue-500"
                : "border-gray-300 text-gray-700 hover:bg-gray-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* RESOURCE CARDS */}
      <div className="grid gap-8 sm:grid-cols-2">
        {filteredResources.map((section) => (
          <div
            key={section.category}
            className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-2xl font-semibold">{section.category}</h2>
            </div>

            <p className="text-gray-600 mb-6">{section.description}</p>

            <ul className="space-y-4">
              {section.links.map((link) => (
                <li
                  key={link.name}
                  className="flex justify-between items-center bg-gray-50 px-4 py-3 rounded-lg hover:bg-gray-100 transition"
                >
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 font-medium hover:underline"
                  >
                    {link.name}
                  </a>

                  <span
                    className={`text-xs px-3 py-1 rounded-full ${
                      link.level === "Beginner"
                        ? "bg-green-100 text-green-600"
                        : link.level === "Intermediate"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-600"
                    }`}
                  >
                    {link.level}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
};

export default Interview;

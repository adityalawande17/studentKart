import PageWrapper from "../components/PageWrapper";

const roadmaps = [
  {
    title: "Web Development",
    steps: [
      "HTML, CSS, JavaScript",
      "React",
      "Node.js & Express",
      "MongoDB",
      "Build Projects",
      "Deploy & Optimize",
    ],
  },
  {
    title: "DSA Roadmap",
    steps: [
      "Arrays & Strings",
      "Linked List",
      "Stack & Queue",
      "Trees",
      "Graphs",
      "Dynamic Programming",
    ],
  },
];

const Roadmaps = () => {
  return (
    <PageWrapper>
      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-8">Learning Roadmaps</h1>

      {/* Roadmaps Grid */}
      <div className="grid gap-6 sm:grid-cols-2">
        {roadmaps.map((rm) => (
          <div key={rm.title} className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">{rm.title}</h2>

            <ol className="list-decimal ml-5 space-y-2 text-gray-700">
              {rm.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
};

export default Roadmaps;

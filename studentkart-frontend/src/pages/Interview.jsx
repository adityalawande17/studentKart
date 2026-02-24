import PageWrapper from "../components/PageWrapper";

const interviewResources = [
  {
    title: "DSA Preparation",
    links: [
      { name: "Striver DSA Sheet", url: "https://takeuforward.org" },
      { name: "LeetCode", url: "https://leetcode.com" },
      { name: "NeetCode Roadmap", url: "https://neetcode.io" },
    ],
  },
  {
    title: "Core CS Subjects",
    links: [
      { name: "OS Notes", url: "https://os-notes-link.com" },
      { name: "DBMS Notes", url: "https://dbms-notes-link.com" },
      { name: "CN Notes", url: "https://cn-notes-link.com" },
    ],
  },
];

const Interview = () => {
  return (
    <PageWrapper>
      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-8">Interview Preparation</h1>

      {/* Sections Grid */}
      <div className="grid gap-6 sm:grid-cols-2">
        {interviewResources.map((section) => (
          <div key={section.title} className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">{section.title}</h2>

            <ul className="space-y-3">
              {section.links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 hover:underline hover:text-blue-800"
                  >
                    {link.name}
                  </a>
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

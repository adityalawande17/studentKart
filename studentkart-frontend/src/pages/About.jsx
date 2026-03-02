import PageWrapper from "../components/PageWrapper";

const About = () => {
  return (
    <PageWrapper>
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow p-8">
        <h1 className="text-3xl font-bold mb-4 text-blue-400">
          About StudentKart
        </h1>

        <p className="text-gray-700 mb-6 leading-relaxed">
          Hello! I’m <span className="font-semibold">Aditya</span>, a 3rd year
          Computer Science undergraduate. StudentKart was built to help CSE
          students access organized college materials, interview preparation
          resources, and clear learning roadmaps—all in one place.
        </p>

        <p className="text-gray-700 mb-8 leading-relaxed">
          This project is built using the{" "}
          <span className="font-semibold">MERN stack</span> with role-based
          authentication, an admin panel for content management, and a clean,
          responsive UI using Tailwind CSS.
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/adityalawande17"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 bg-gray-900 text-white rounded-3xl hover:bg-gray-800"
          >
            Visit my GitHub
          </a>

          <span className="text-gray-500 text-sm">
            Open source & continuously improving
          </span>
        </div>
      </div>
    </PageWrapper>
  );
};

export default About;

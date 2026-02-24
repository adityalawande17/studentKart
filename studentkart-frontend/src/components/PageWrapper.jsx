const PageWrapper = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-8">{children}</div>
    </div>
  );
};

export default PageWrapper;

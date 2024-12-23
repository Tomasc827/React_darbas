import { useBook } from "./BookContext";

const ErrorServer = () => {
  const { error } = useBook();

  return (
    <div className="relative">
      {error && (
        <div className="fixed top-[12%] left-[1%] bg-red-100 border-l-4 border-r-4 border-red-500 text-red-700 p-6 rounded-3xl shadow-lg shadow-red-600">
          <p className="font-medium">{error}</p>
        </div>
      )}
    </div>
  );
};

export default ErrorServer;

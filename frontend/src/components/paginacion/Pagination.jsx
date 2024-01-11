import React from "react";
import classnames from "classnames";

const Pagination = ({ page, setPage }) => {
  const prev = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };
  const next = () => {
    setPage((prev) => prev + 1);
  };
  return (
    <div className="flex justify-center space-x-2 sm:space-x-4 mx-auto my-4">
      <button
        className={classnames(
          "px-4 sm:px-6 py-2 border border-gray-400 bg-white text-sm sm:text-base text-gray-900 hover:text-gray-500 focus:outline-none rounded-md",
          page === 1 && "cursor-not-allowed opacity-50"
        )}
        onClick={prev}
        disabled={page === 1}
      >
        Anterior
      </button>

      <span className="px-4 py-2 border border-gray-300 bg-white text-sm text-blue-900 rounded-md">
        {page}
      </span>
      <button
        className="px-4 py-2 border border-gray-300 bg-white text-sm text-gray-900 hover:text-gray-500 focus:outline-none rounded-md"
        onClick={next}
      >
        Siguiente
      </button>
    </div>
  );
};

export default Pagination;

import PropTypes from "prop-types";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
PropTypes;
export default function Filter({ options, filterfield }) {
  const [active, setActive] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  function handelClick(value) {
    searchParams.set(filterfield, value);
    setSearchParams(searchParams);
    setActive(value);
  }

  return (
    <div className="flex flex-wrap gap-2 justify-center border border-gray-200 bg-white shadow-sm rounded-md p-2 sm:w-[100%] lg:w-[100%] ">
      {options.map((item) => (
        <button
          key={item.value}
          onClick={() => handelClick(item.value)}
          className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors 
            ${
              active === item.value
                ? "bg-indigo-600 text-white"
                : "bg-white text-gray-700 hover:bg-indigo-600 hover:text-white"
            }`}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
Filter.propTypes = {
  options: PropTypes.array.isRequired,
  filterfield: PropTypes.string,
};

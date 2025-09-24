import PropTypes from "prop-types";
import { useSearchParams } from "react-router-dom";

export default function SortBy({ Options, sortfield }) {
  const [searchparams, setSearchParams] = useSearchParams();
  function handeleChange(e) {
    searchparams.set(sortfield, e.target.value);
    setSearchParams(searchparams);
  }
  const selectBY = searchparams.get(sortfield) || "";

  return (
    <div className="w-full max-w-sm">
      <label
        htmlFor="price"
        className="block text-sm font-medium text-gray-700 mb-2"
      ></label>

      <select
        value={selectBY}
        onChange={handeleChange}
        className="w-full rounded-lg border border-gray-300 bg-white/40 py-2 px-3 text-sm text-gray-700 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-300 focus:ring-opacity-50"
      >
        {Options.map((op) => (
          <option key={op.value} value={op.value}>
            {" "}
            {op.label}{" "}
          </option>
        ))}
      </select>
    </div>
  );
}
SortBy.propTypes = {
  Options: PropTypes.array.isRequired,
  sortfield: PropTypes.string.isRequired,
};

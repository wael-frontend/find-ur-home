import PropTypes from "prop-types";
export default function FileInput({ className = "", ...props }) {
  return (
    <input
      type="file"
      className={`text-[1.4rem] rounded-sm
        file:font-inherit file:font-medium
        file:px-5 file:py-3
        file:mr-5 file:rounded-sm
        file:border-none
        file:text-brand-50 file:bg-brand-600
        file:cursor-pointer
        file:transition-colors
        hover:file:bg-brand-700
        ${className}`}
      {...props}
    />
  );
}
FileInput.propTypes = {
  className: PropTypes.string,
};

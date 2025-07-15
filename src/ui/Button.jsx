import PropTypes from "prop-types";
export default function Button({ type = "button", children, onClick }) {
  const isPrimary = type === "primary";
  const className = isPrimary
    ? "w-[100px] h-[50px] rounded-[4px] bg-blue-200 text-white hover:cursor-pointer"
    : "w-[100px] h-[50px] rounded-[4px] bg-blue-500 text-white hover:cursor-pointer";

  return (
    <button
      type={isPrimary ? "submit" : "button"} // This line is essential!
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string, // e.g. "primary" or "secondary"
  children: PropTypes.node,
  onClick: PropTypes.func,
};

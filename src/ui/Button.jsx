import PropTypes from "prop-types";
export default function Button({ type = "button", children, onClick }) {
  const isPrimary = type === "primary";
  const className = isPrimary
    ? "w-[100px] h-[30px] rounded-[4px]  bg-[#rgb(253,199,0)] text-[rgb(0, 0, 0)] hover:cursor-pointer "
    : "w-[100px] h-[30px] rounded-[4px] bg-[#fdc700] text-[#000000] hover:cursor-pointer";

  return (
    <button
      type={isPrimary ? "submit" : "button"}
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
};

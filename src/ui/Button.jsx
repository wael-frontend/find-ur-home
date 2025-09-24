import PropTypes from "prop-types";
export default function Button({ type = "button", children, onClick }) {
  const isPrimary = type === "primary";
  const className = isPrimary
    ? "w-[100px] h-[30px] rounded-[4px]  bg-[#E43636] text-[#F6EFD2] hover:cursor-pointer "
    : "w-[100px] h-[30px] rounded-[4px] bg-[#E43636] text-[#F6EFD2] hover:cursor-pointer";

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

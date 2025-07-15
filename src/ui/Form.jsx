import PropTypes from "prop-types";

export default function Form({ onSubmit, type = "form", children, ...props }) {
  const baseClasses = "overflow-scroll text-[1.4rem]";

  const formClasses = `
    p-6 md:p-10 
    border border-gray-100 rounded-md
    bg-gray-500
    w-[90%] md:w-[70%]
    ml-[1rem] md:ml-[250px]
    h-[80vh] md:h-[100%]
    max-sm:bg-blue-200 mt-[80px]
  `;

  const modalClasses = "w-[90vw] md:w-[80rem]";

  const classes =
    type === "form"
      ? `${baseClasses} ${formClasses}`
      : `${baseClasses} ${modalClasses}`;

  return (
    <form className={classes} {...props} onSubmit={onSubmit}>
      {children}
    </form>
  );
}

Form.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
  onSubmit: PropTypes.func,
};

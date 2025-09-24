import PropTypes from "prop-types";

export default function Form({
  onSubmit,
  type,
  children,
  className = "",
  ...props
}) {
  const baseClasses = "text-[1rem] md:text-[1.1rem] leading-relaxed";

  const formClasses = `
  
    border border-gray-300  shadow-lg
    bg-white
     w-[85%] 
    max-h-[90vh] 
    mt-12 lg:mt-1
    mx-auto 
    flex flex-col 
    overflow-y-auto
    transition-all duration-300
   
  `;

  const modalClasses = `
   
    bg-white rounded-2xl shadow-2xl
    border border-gray-300
    max-h-[75vh]
    mx-auto 
    flex flex-col gap-6
    overflow-y-auto
    transition-all duration-300
  `;

  const classes =
    type === "form"
      ? `${baseClasses} ${formClasses} ${className}`
      : `${baseClasses} ${modalClasses} ${className}`;

  return (
    <form
      className={classes}
      {...props}
      onSubmit={(e) => {
        e.preventDefault();
        if (onSubmit) onSubmit(e);
      }}
    >
      {children}
    </form>
  );
}

Form.propTypes = {
  type: PropTypes.oneOf(["form", "modal"]),
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func,
  className: PropTypes.string,
};

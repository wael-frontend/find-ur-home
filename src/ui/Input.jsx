import { forwardRef } from "react";
import PropTypes from "prop-types";

const Input = forwardRef(({ type, ...rest }, ref) => {
  return (
    <input
      type={type}
      {...rest}
      ref={ref} // Forward the ref here!
      className="border border-[#5E936C] bg-grey-0 rounded-md px-4 py-2
                 text-sm w-full
                 sm:text-base sm:px-5 sm:py-2.5"
    />
  );
});

Input.displayName = "Input";

Input.propTypes = {
  type: PropTypes.string,
};

export default Input;

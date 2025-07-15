import { forwardRef } from "react";
import PropTypes from "prop-types";

const Input = forwardRef(({ type, ...rest }, ref) => {
  return (
    <input
      type={type}
      {...rest}
      ref={ref} // Forward the ref here!
      className="border border-gray-300 bg-gray-50 rounded p-[0.8rem_1.2rem] w-[280px] h-[20px] mt-6 max-sm:bg-green"
    />
  );
});

Input.displayName = "Input";

Input.propTypes = {
  type: PropTypes.string,
};

export default Input;

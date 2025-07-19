import PropTypes from "prop-types";

export default function FormRow({ children, labels }) {
  return (
    <div
      className=" grid grid-cols-2 md:grid-cols-[24rem_1fr_1.2fr] gap-0 p-2 place-items-baseline 
                    first:pt-0  not-last:border-b border-gray-200"
    >
      <label className="text-white-700 font-extrabold ">{labels}</label>
      {children}
    </div>
  );
}

FormRow.propTypes = {
  labels: PropTypes.string,
  children: PropTypes.node,
};

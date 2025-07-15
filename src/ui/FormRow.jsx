import PropTypes from "prop-types";

export default function FormRow({ children, labels }) {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-[24rem_1fr_1.2fr] gap-6 p-6 items-center 
                    first:pt-0 last:pb-0 not-last:border-b border-gray-200"
    >
      <label className="font-medium text-gray-700">{labels}</label>
      {children}
    </div>
  );
}

FormRow.propTypes = {
  labels: PropTypes.string,
  children: PropTypes.node,
};

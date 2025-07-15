import PropTypes from "prop-types";
export default function Row({ type = "horizontal", children, ...props }) {
  const base = "flex";
  const horizontal = "justify-between items-center";
  const vertical = "flex-col gap-6"; // 1.6rem = 6 (1.5rem)

  const classes =
    type === "horizontal" ? `${base} ${horizontal}` : `${base} ${vertical}`;

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}
Row.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
};

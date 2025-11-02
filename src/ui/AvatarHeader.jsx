import PropTypes from "prop-types";

export default function AvatarHeader({ isScrolled, apllaybg }) {
  return (
    <div className=" ">
      <img
        src="/logo.png"
        alt="logo"
        className={`h-[40px] transition-all duration-300 ${
          !isScrolled && !apllaybg
            ? "invert brightness-0"
            : "invert-0 brightness-100"
        }`}
      />
    </div>
  );
}
AvatarHeader.propTypes = {
  isScrolled: PropTypes.bool,
  apllaybg: PropTypes.string,
};

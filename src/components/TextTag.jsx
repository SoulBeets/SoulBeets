import PropTypes from "prop-types";

const tagStyle = {
  color: "#ffffff",
  fontSize: "10px",
  padding: "2px 4px",
  maxWidth: "fit-content",
  borderRadius: 4,
};

export default function TextTag({ color, outline, children }) {
  if (outline) {
    return (
      <div style={{ ...tagStyle, color, border: `1px solid ${color}` }}>
        {children}
      </div>
    );
  }
  return <div style={{ ...tagStyle, backgroundColor: color }}>{children}</div>;
}

TextTag.prototype = {
  color: PropTypes.string.isRequired,
  outline: PropTypes.bool,
};

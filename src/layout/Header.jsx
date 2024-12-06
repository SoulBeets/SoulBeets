import { Box } from "@mui/material";
import PropTypes from "prop-types";
/**
 * @param {{component: import("react").ReactDOM}} props
 * @returns
 */
export default function Header({ component }) {
  return (
    <>
      <Box display="flex" alignItems="center" gap="4px" padding="6px 12px" bgcolor="primary.main">
        <img style={{ borderRadius: 8 }} src="/logo-512.png" width={32} height={32} />
        <Box style={{ font: "normal 1.5em SimpleNote" }}>SoulBeets</Box>
        <div>{component}</div>
      </Box>
    </>
  );
}

Header.propTypes = {
  component: PropTypes.node,
};

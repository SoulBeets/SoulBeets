import { AppBar, Box } from "@mui/material";

export default function Header({ children }) {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Box
            display="flex"
            alignItems="center"
            gap="4px"
            padding="6px 12px"
            bgcolor="primary.main"
          >
            <Box
              style={{ font: "normal 1.5em SimpleNote" }}
              color="primary.contrastText"
            >
              SoulBeets
            </Box>
            <Box>{children}</Box>
          </Box>
        </AppBar>
      </Box>
    </>
  );
}

import Header from "@/layout/Header";
import { Box, Tab, ThemeProvider, createTheme } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useState } from "react";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import CloudIcon from "@mui/icons-material/Cloud";
import FolderIcon from "@mui/icons-material/Folder";
import useI18nStore from "@/stores/i18n.js";

const tabs = [
  { label: "home-library", value: "library", icon: <LibraryMusicIcon /> },
  { label: "home-cloud", value: "cloud", icon: <CloudIcon /> },
  { label: "home-local", value: "local", icon: <FolderIcon /> },
];

const theme = createTheme({
  components: {
    MuiButtonBase: {
      styleOverrides: { root: { padding: "4px 8px" } },
    },
    MuiTab: {
      styleOverrides: { root: { padding: "4px 8px", minWidth: "40px" } },
    },
  },
});

export default function Home() {
  const i18n = useI18nStore((s) => s.translate);
  const [currentTab, setCurrentTab] = useState("library");

  return (
    <>
      <ThemeProvider theme={theme}>
        <TabContext value={currentTab}>
          <Header>
            <Box>
              <TabList
                variant="scrollable"
                onChange={(_, tab) => setCurrentTab(tab)}
                aria-label="lab API tabs example"
                textColor="inherit"
                style={{
                  maxWidth: "calc(100vw - 120px - 24px)",
                  backgroundImage:
                    "linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0))",
                  backgroundClip: "padding-box",
                }}
              >
                {tabs.map(({ label, value, icon }) => (
                  <Tab
                    key={value}
                    label={i18n(label)}
                    value={value}
                    icon={icon}
                    iconPosition="start"
                  />
                ))}
              </TabList>
            </Box>
          </Header>

          <TabPanel value="1">Item One</TabPanel>
          <TabPanel value="2">Item Two</TabPanel>
          <TabPanel value="3">Item Three</TabPanel>
        </TabContext>
      </ThemeProvider>
    </>
  );
}

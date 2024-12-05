import { useState } from 'react'
import PWABadge from './PWABadge.jsx'
import './App.css'
import { BottomNavigation, BottomNavigationAction, Box, Button, Paper } from '@mui/material'
import AnalyticsIcon from '@mui/icons-material/Analytics';
import CategoryIcon from '@mui/icons-material/Category';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SettingsIcon from '@mui/icons-material/Settings';
import useI18nStore from './i18n/i18n.js';
import MusicBox from './layout/MusicBox.jsx';

function App() {
  const i18n = useI18nStore((state) => state.translate)
  const [tab, setTab] = useState("libray")

  return (
    <>
      <PWABadge />
      <Box sx={{ pb: 7 }} >
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
          <MusicBox />

          <BottomNavigation showLabels value={tab} onChange={(event, newTab) => setTab(newTab)}>
            <BottomNavigationAction label={i18n("bottom-library")} value="libray" icon={<LibraryMusicIcon />} />
            <BottomNavigationAction label={i18n("bottom-category")} value="category" icon={<CategoryIcon />} />
            <BottomNavigationAction label={i18n("bottom-statistics")} value="statistics" icon={<AnalyticsIcon />} />
            <BottomNavigationAction label={i18n("bottom-settings")} value="settings" icon={<SettingsIcon />} />
          </BottomNavigation>
        </Paper>
      </Box>
    </>
  )
}

export default App
import { Box, Snackbar, Zoom } from "@mui/material";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import RepeatIcon from "@mui/icons-material/Repeat";
import RepeatOneIcon from "@mui/icons-material/RepeatOne";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import { useCallback, useEffect, useState } from "react";
import { PrimaryColor } from "@/components/source";
import TextTag from "@/components/TextTag";

export default function MusicBox() {
  // TODO: @bbangqian 添加播放 封面旋转的代码

  // region: MusicMode start
  const [mode, setMode] = useState("repeat");
  const [repeatShow, setRepeatShow] = useState(false);
  const [repeatoneShow, setRepeatoneShow] = useState(false);
  const [shuffleShow, setShuffleShow] = useState(false);

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  useEffect(() => {
    setRepeatShow(false);
    setRepeatoneShow(false);
    setShuffleShow(false);
    switch (mode) {
      case "repeat":
        setRepeatShow(true);
        break;
      case "repeatone":
        setRepeatoneShow(true);
        break;
      case "shuffle":
        setShuffleShow(true);
        break;
    }
  }, [mode]);

  let closeSnackbarTimer = null;
  const onClickModeIcon = useCallback(() => {
    console.log("click: ", mode);
    switch (mode) {
      case "repeat":
        setMode("repeatone");
        setSnackbarMessage("已切换到单曲循环");
        break;
      case "repeatone":
        setMode("shuffle");
        setSnackbarMessage("已切换到随机播放");
        break;
      case "shuffle":
        setMode("repeat");
        setSnackbarMessage("已切换到顺序循环");
        break;
    }
    setSnackbarOpen(true);
    clearTimeout(closeSnackbarTimer);
    closeSnackbarTimer = setTimeout(() => setSnackbarOpen(false), 800);
  }, [mode, setMode]);
  // region: MusicMode end

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={snackbarOpen}
        message={snackbarMessage}
      />
      <Box display="flex" alignItems="center" width="100vw">
        <Box flexGrow={1} padding="4px" width="calc(100vw - 86px)">
          <Box display="flex" gap="4px">
            <img
              style={{ borderRadius: "50%", border: "5px solid black" }}
              src="/logo-512.png"
              width={32}
              height={32}
            />
            <Box display="flex" flexDirection="column">
              <Box>富士山下</Box>
              <Box
                fontSize="0.8em"
                width="220px"
                display="flex"
                gap="4px"
                alignItems="center"
              >
                <Box>陈奕迅</Box>
                <TextTag color={PrimaryColor("QQ")}>QQ</TextTag>
                <TextTag color={PrimaryColor("QQ")} outline>
                  臻品母带
                </TextTag>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box display="flex" gap="4px" pr="12px" width="86px">
          <Zoom style={{ display: repeatShow ? "" : "none" }} in={repeatShow}>
            <RepeatIcon style={{ width: "24px" }} onClick={onClickModeIcon} />
          </Zoom>
          <Zoom
            style={{ display: repeatoneShow ? "" : "none" }}
            in={repeatoneShow}
          >
            <RepeatOneIcon
              style={{ width: "24px" }}
              onClick={onClickModeIcon}
            />
          </Zoom>
          <Zoom style={{ display: shuffleShow ? "" : "none" }} in={shuffleShow}>
            <ShuffleIcon style={{ width: "24px" }} onClick={onClickModeIcon} />
          </Zoom>

          <PlayArrowIcon style={{ width: "24px" }} />
          <PauseIcon style={{ width: "24px", display: "none" }} />
          <PlaylistPlayIcon style={{ width: "24px" }} />
        </Box>
      </Box>
    </>
  );
}

import React from "react";
import { IconButton } from "@mui/material";
import { Pause, PlayArrow } from "@mui/icons-material";
import { keyframes } from "@mui/material";

const PlayButton = (props) => {
  const { bpm, handlePlay, setPlay, play } = props;

  var pulse =
    play &&
    keyframes`
    0% { box-shadow: 0 0 20px rgba(34, 255, 255, 1); }
    100% { box-shadow: 0 0 200px rgba(34, 255, 255, 1); }
`;
  return (
    <>
      <IconButton
        sx={{
          width: "240px",
          height: "240px",
          marginTop: "30%",
          background: "linear-gradient( #2ff, #56f)",
          boxShadow: "0 0 100px rgba(1,1, 1, 1)",
          transition: `all 500ms`,
          animation: `${pulse} ${60000 / bpm}ms linear infinite`,
          "&:hover": {
            boxShadow: "0 0 200px rgba(250, 122, 200, 1)",
          },
          // "&::after": {
          //   position: "absolute",
          //   content: '""',
          //   height: "270px",
          //   width: "270px",
          //   background: "linear-gradient(to bottom, #fafafa, #d0d3)",
          //   borderRadius: "50%",
          //   zIndex: 0,
          // },
          // "&::before": {
          //   position: "absolute",
          //   content: '""',
          //   height: "290px",
          //   width: "290px",
          //   background: "black",
          //   borderRadius: "50%",
          //   zIndex: -1,
          // },
        }}
        onClick={() => {
          handlePlay();
          setPlay(!play);
        }}
      >
        {play ? (
          <Pause
            sx={{
              fontSize: 100,
              color: "black",
            }}
          />
        ) : (
          <PlayArrow sx={{ fontSize: 100, color: "black" }} />
        )}
      </IconButton>
      ;
    </>
  );
};

export default PlayButton;

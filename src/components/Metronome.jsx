import { Add, Remove } from "@mui/icons-material";
import { Grid, IconButton, Slider, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState, useRef } from "react";
import pop from "../audio/pop.mp3";
import Timer from "../constants/timer";
import wall from "../images/wall.jpg";
import Footer from "./Footer";
import PlayButton from "./styled components/PlayButton";

const useStyles = makeStyles({
  neonText: {
    color: "#D4F6CC",
    textShadow: "0 0 7px #2ff, 0 0 10px #2ff, 0 0 21px #2ff, 0 0 42px #0fa",
  },
});

const Metronome = () => {
  const [play, setPlay] = useState(false);
  const [bpm, setBpm] = useState(100);
  const popSound = new Audio(pop);

  const classes = useStyles();

  const playPop = () => {
    popSound.play();
  };
  const refMetronome = useRef(
    new Timer(playPop, (60 / bpm) * 1000, { immediate: true })
  );

  const handlePlay = () => {
    if (play) {
      refMetronome.current.stop();
    } else {
      refMetronome.current.start();
    }
  };

  useEffect(() => {
    refMetronome.current.timeInterval = (60 / bpm) * 1000;
  }, [bpm]);

  return (
    <>
      <Grid justifyContent="center" alignItems="center" container>
        <Grid
          sx={{
            backgroundImage: `url(${wall})`,
            padding: "40px",
            minHeight: "100vh",
            overflow: "hidden",
            position: "relative",
            textAlign: "center",
          }}
          xs={12}
          sm={8}
          md={6}
          lg={4}
          item
        >
          <Typography className={classes.neonText} variant="h2">
            Practise time!
          </Typography>
          <Typography
            className={classes.neonText}
            sx={{
              margin: "30px",
            }}
            variant="h4"
          >{`BPM: ${bpm}`}</Typography>
          <div style={{ display: "flex" }}>
            <IconButton
              onClick={() => {
                if (bpm > 40) {
                  setBpm(bpm - 1);
                }
              }}
              sx={{
                display: "inline-flex",
                backgroundColor: "#FFC3C3",
              }}
            >
              <Remove />
            </IconButton>
            <Slider
              value={bpm}
              sx={{
                color: "#2ff",
                display: "inline-flex",
                margin: "5px",
              }}
              onChange={(e) => {
                setBpm(e.target.value);
              }}
              min={40}
              max={250}
            />
            <IconButton
              onClick={() => {
                if (bpm < 250) {
                  setBpm(bpm + 1);
                }
              }}
              sx={{
                display: "inline-flex",
                backgroundColor: "#FFC3C3",
                "&:hover": { backgroundColor: "#FFC5f1" },
              }}
            >
              <Add />
            </IconButton>
          </div>
          <PlayButton
            bpm={bpm}
            handlePlay={handlePlay}
            setPlay={setPlay}
            play={play}
          />
          <Footer />
        </Grid>
      </Grid>
    </>
  );
};

export default Metronome;

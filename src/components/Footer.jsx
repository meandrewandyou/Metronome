import { Link, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <Typography>
        <Link
          href="https://github.com/meandrewandyou"
          underline="none"
          sx={{
            color: "white",
            position: "absolute",
            bottom: 5,
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
          }}
          varian="button"
        >{`Andrew was here ${year}`}</Link>
      </Typography>
    </>
  );
};

export default Footer;

import React, { useState, useRef, useMemo } from "react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { Paper } from '@material-ui/core';
import Image from './images/image1.jpg';

export default () => {
  const [hideOnScroll, setHideOnScroll] = useState(true);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      console.log(currPos.y + " " + prevPos.y);
    },
    [hideOnScroll],
    false,
    false,
    30
  );



  const styles = {
    paperContainer: {
        backgroundImage: `url(${Image})`
    }
};

  return useMemo(
    () => (
      <Paper style={styles.paperContainer}>

      </Paper>
    ),
    [hideOnScroll]
  );
};

import React, { useEffect, useState } from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";
import { Button, Switch } from "@material-ui/core";
import MainPage from "./components/MainPage";

import sketch from "./components/p5/sketch";

const App = () => {
  const [isSketching, setIsSketching] = useState(false);

  const DetermineParent = (props) => {
    return isSketching ? (
      <ReactP5Wrapper
        sketch={sketch}
        style={{ position: "absolute", zIndex: "1" }}
      >
        {props.children}
      </ReactP5Wrapper>
    ) : (
      <div>{props.children}</div>
    );
  };

  return (
    <DetermineParent>
      <Switch
        defaultChecked
        checked={isSketching}
        onChange={() => setIsSketching(!isSketching)}
      >
        switch
      </Switch>
      <MainPage style={{ position: "absolute", zIndex: "1" }} />
    </DetermineParent>
  );
};

export default App;

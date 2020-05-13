import React, { Fragment, useState } from "react";
import Average from "./Average";
import Average1 from "./Average1";

import UseStateExample from "./UseStateExample";
import UseEffectExample from "./UseEffectExample";

const App = () => {
  const [visible, setVisible] = useState(false);
  //return <Average />;
  return (
    <Fragment>
    <h2>Average1</h2>
      <Average1></Average1>
      <hr/>

      <h2>Average</h2>
      <Average></Average>
      <hr/>
      <h2>UseStateExample</h2>
      <UseStateExample></UseStateExample>
      <hr />
      <h2>UseEffectExample</h2>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? "숨기기" : "보이기"}
      </button>
      {/* 숨기기 button을 누르면 cleanup이 나타나고,
      보이기 button을 누르면 effect 가 나타나게 됨.  */}
      {visible && <UseEffectExample></UseEffectExample>}
      <hr />
    </Fragment>
  );
};

export default App;

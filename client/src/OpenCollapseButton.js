import { useState } from "react";
const OpenCollapseButton = ({ id }) => {
  const [state, setState] = useState("+");
  const handleState = (e) => {
    e.preventDefault();
    if (state === "+") {
      setState("-");
    }
    if (state === "-") {
      setState("+");
    }
  };
  return (
    <button data-state={state} id={id} onClick={handleState}>
      {state}
    </button>
  );
};

export default OpenCollapseButton;

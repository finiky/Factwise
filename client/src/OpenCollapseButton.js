import { useState } from "react";
const OpenCollapseButton = ({
  celebrityId,
  celebrities,
  setCelebrities,
  status,
  class1,
  disable,
}) => {
  const [enable, setEnable] = useState(disable);
  const handleState = (e) => {
    e.preventDefault();
    if (status === "-") {
      const changeStatus = () => {
        const modifiedCelebrities = celebrities.map((celebrity) => {
          if (celebrity.id === celebrityId) {
            celebrity.status = "+";
          } else {
            celebrity.status = "-";
          }
          return celebrity;
        });
        setCelebrities(modifiedCelebrities);
      };
      changeStatus();
    } else if (status === "+") {
      const changeStatus = () => {
        const modifiedCelebrities = celebrities.map((celebrity) => {
          return { ...celebrity, status: "-" };
        });
        setCelebrities(modifiedCelebrities);
      };
      changeStatus();
    }
  };
  if (enable === "") {
    return (
      <button class={class1} onClick={handleState}>
        {status}
      </button>
    );
  }
  return (
    <button class={class1} onClick={handleState} disabled="enable">
      {status}
    </button>
  );
};

export default OpenCollapseButton;

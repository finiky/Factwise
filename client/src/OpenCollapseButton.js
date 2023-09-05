const OpenCollapseButton = ({
  celebrityId,
  celebrities,
  setCelebrities,
  status,
}) => {
  const handleState = (e) => {
    e.preventDefault();
    if (status === "+") {
      const changeStatus = () => {
        const modifiedCelebrities = celebrities.map((celebrity) => {
          if (celebrity.id === celebrityId) {
            celebrity.status = "-";
          } else {
            celebrity.status = "+";
          }
          return celebrity;
        });
        setCelebrities(modifiedCelebrities);
      };
      changeStatus();
    } else if (status === "-") {
      const changeStatus = () => {
        const modifiedCelebrities = celebrities.map((celebrity) => {
          return { ...celebrity, status: "+" };
        });
        setCelebrities(modifiedCelebrities);
      };
      changeStatus();
    }
  };
  return <button onClick={handleState}>{status}</button>;
};

export default OpenCollapseButton;

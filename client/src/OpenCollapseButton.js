const OpenCollapseButton = ({ id, state }) => {
  const handleState = (e) => {
    e.preventDefault();
    console.log(e.state);
  };
  return (
    <button id={id} onClick={handleState}>
      {state}
    </button>
  );
};

export default OpenCollapseButton;

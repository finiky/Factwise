const handleDelete = (e, celebrities, setCelebrities) => {
  if (prompt("Are you sure you want to delete?") !== null) {
    const modifiedList = celebrities.toSpliced(e.target.dataset.index, 1);
    setCelebrities(modifiedList);
  }
};
export default handleDelete;

const handleDelete = (e, celebrities, setCelebrities) => {
    const modifiedList = celebrities.toSpliced(e.target.dataset.index, 1);
    setCelebrities(modifiedList);
};
export default handleDelete;
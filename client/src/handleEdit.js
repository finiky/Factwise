import ageCalculator from "./ageCalculator";
const handleEdit = (e, celebrities, editCelebrity, setEdit) => {
  if (ageCalculator(celebrities[e.target.dataset.index].dob) >= 18) {
    editCelebrity.current = {
      ...celebrities[e.target.dataset.index],
      index: e.target.dataset.index,
    };
    setEdit(true);
  } else {
    editCelebrity.current = {};
    setEdit(false);
  }
};

export default handleEdit;

import { useState, useEffect } from "react";
const EditForm = ({
  currentCelebrity,
  celebrities,
  setCelebrities,
  setEdit,
}) => {
  const [enable, setEnable] = useState("disabled"); // for enabling disabling the form submit buttons
  const [celebrity, setCelebrity] = useState(currentCelebrity);
  useEffect(() => {
    // form save button avtivate/deactivate
    const detectChanges = () => {
      for (let x in currentCelebrity) {
        if (currentCelebrity[x] !== celebrity[x]) {
          setEnable("");
          return;
        }
      }
      setEnable("disabled");
    };
    detectChanges();
  }, [celebrity]);

  // handle form submission after making changes
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // cancel edit
  const handleCancel = (e) => {
    e.preventDefault();
    setEdit(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="dob">DOB</label>
      <input
        id="dob"
        type="date"
        value={celebrity.dob}
        onChange={(e) => {
          setCelebrity({ ...currentCelebrity, dob: e.target.value });
        }}
        required
      />
      <label htmlFor="gender">Gender</label>
      <select
        name="gender"
        id="gender"
        value={celebrity.gender}
        onChange={(e) => {
          setCelebrity({
            ...celebrity,
            gender: e.target.value,
          });
        }}
        required
      >
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="transgender">Transgender</option>
        <option value="rather not say">Rather not say</option>
        <option value="other">Other</option>
      </select>
      <label htmlFor="country">Country</label>
      <input
        id="country"
        type="text"
        value={celebrity.country}
        onChange={(e) => {
          setCelebrity({ ...currentCelebrity, country: e.target.value });
        }}
        required
      />
      <label htmlFor="description">Description</label>
      <textarea
        rows="8"
        cols="50"
        id="description"
        value={celebrity.description}
        onChange={(e) => {
          setCelebrity({ ...currentCelebrity, description: e.target.value });
        }}
        required
      />
      <button type="submit" disabled={enable}>
        Save
      </button>
      <button type="button" onClick={handleCancel}>
        Cancel
      </button>
    </form>
  );
};

export default EditForm;
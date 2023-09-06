import { useState, useEffect } from "react";
import styles from "./EditForm.module.css";
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
    const afterEdit = celebrities.map((celeb) => {
      if (celeb.id === currentCelebrity.id) {
        return celebrity;
      } else return celeb;
    });
    setEnable("disabled");
    setCelebrities(afterEdit);
    setEdit(false);
  };

  // cancel edit
  const handleCancel = (e) => {
    e.preventDefault();
    setEdit(false);
  };

  return (
    <div className={styles.main}>
      <h2 className={styles.name}>
        {currentCelebrity.first} {currentCelebrity.last}
      </h2>
      <form className={styles.infoDiv} onSubmit={handleSubmit}>
        <div className={styles.subInfoDiv}>
          <label className={styles.label} htmlFor="dob">
            DOB
          </label>
          <input
            className={styles.input}
            id="dob"
            type="date"
            value={celebrity.dob}
            onChange={(e) => {
              setCelebrity({ ...currentCelebrity, dob: e.target.value });
            }}
            required
          />
        </div>
        <div className={styles.subInfoDiv}>
          <label className={styles.label} htmlFor="gender">
            Gender
          </label>
          <select
            className={styles.input}
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
        </div>
        <div className={styles.subInfoDiv}>
          <label className={styles.label} htmlFor="country">
            Country
          </label>
          <input
            className={styles.input}
            id="country"
            type="text"
            value={celebrity.country}
            onChange={(e) => {
              setCelebrity({ ...currentCelebrity, country: e.target.value });
            }}
            required
          />
        </div>
        <div className={styles.descDiv}>
          <label className={styles.label} htmlFor="description">
            Description
          </label>
          <textarea
            className={styles.input}
            rows="5"
            cols="30"
            id="description"
            value={celebrity.description}
            onChange={(e) => {
              setCelebrity({
                ...currentCelebrity,
                description: e.target.value,
              });
            }}
            required
          />
        </div>
        <div className={styles.buttonDiv}>
          <button className={styles.but} type="submit" disabled={enable}>
            Save
          </button>
          <button className={styles.but} type="button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditForm;

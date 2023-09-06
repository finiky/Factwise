import { useState, useEffect } from "react";
import styles from "./EditForm.module.css";
import OpenCollapseButton from "./OpenCollapseButton";
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
    const validate = () => {
      const pattern = /^[A-Za-z\s]*$/;
      if (!pattern.test(celebrity.country)) {
        return false;
      } else return true;
    };
    const invalid = validate();
    console.log(invalid);
    if (!invalid) {
      alert("Country cannot have numbers");
      return;
    } else {
      const afterEdit = celebrities.map((celeb) => {
        if (celeb.id === currentCelebrity.id) {
          return celebrity;
        } else return celeb;
      });
      setEnable("disabled");
      setCelebrities(afterEdit);
      setEdit(false);
    }
  };

  // cancel edit
  const handleCancel = (e) => {
    e.preventDefault();
    setEdit(false);
  };

  return (
    <div className={styles.main}>
      <ul className={styles.celebrities}>
        {celebrities.map((celeb) => {
          if (currentCelebrity.id === celeb.id) {
            return (
              <li className={styles.celebrity} key={currentCelebrity.id}>
                <h2 className={styles.name}>
                  {currentCelebrity.first} {currentCelebrity.last}
                </h2>
                <form className={styles.form} onSubmit={handleSubmit}>
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
                        setCelebrity({
                          ...currentCelebrity,
                          dob: e.target.value,
                        });
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
                        setCelebrity({
                          ...currentCelebrity,
                          country: e.target.value,
                        });
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
                    <button
                      className={styles.but}
                      type="submit"
                      disabled={enable}
                    >
                      Save
                    </button>
                    <button
                      className={styles.but}
                      type="button"
                      onClick={handleCancel}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </li>
            );
          }
          return (
            <li className={styles.celebrity} key={celeb.id}>
              <div className={styles.nameState}>
                <p className={styles.name}>{`${celeb.first} ${celeb.last}`}</p>
                <OpenCollapseButton
                  celebrityId={celeb.id}
                  celebrities={celebrities}
                  setCelebrities={setCelebrities}
                  status={celeb.status}
                  class1={styles.openCollapse}
                  disable={"disable"}
                />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default EditForm;
<div className={styles.main}></div>;

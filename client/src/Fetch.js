import { useState, useEffect, useRef } from "react";
import styles from "./Fetch.module.css"; // css modules for styling
import OpenCollapseButton from "./OpenCollapseButton"; // open + | collapse -
import ageCalculator from "./ageCalculator"; // age conversion to years
import EditForm from "./EditForm"; // edit form
import handleDelete from "./handleDelete"; // delete celebrity
import handleEdit from "./handleEdit"; // edit celebrity

const Fetch = () => {
  const [celebrities, setCelebrities] = useState([]);
  const [edit, setEdit] = useState(false);
  const editCelebrity = useRef({}); // for displying
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:5000/celebrities"); // fetch the data from the server
      const data = await response.json();
      const updatedData = data.map((celebrity) => {
        return { ...celebrity, status: "-" };
      });
      setEdit(false);
      setCelebrities(updatedData);
    };
    fetchData();
  }, []);
  if (edit) {
    return (
      <EditForm
        currentCelebrity={editCelebrity.current}
        celebrities={celebrities}
        setCelebrities={setCelebrities}
        setEdit={setEdit}
      />
    );
  }
  return (
    <div className={styles.main}>
      <ul className={styles.celebrities}>
        {celebrities.map((celebrity, index) => (
          <li className={styles.celebrity} key={celebrity.id}>
            <div className={styles.nameState}>
              <p
                className={styles.name}
              >{`${celebrity.first} ${celebrity.last}`}</p>
              <OpenCollapseButton
                class1={styles.openCollapse}
                celebrityId={celebrity.id}
                celebrities={celebrities}
                setCelebrities={setCelebrities}
                status={celebrity.status}
              />
            </div>
            {celebrities.length === 0 ? (
              <></>
            ) : celebrity.status === "+" ? (
              <div className={styles.infoDiv}>
                <div>
                  <label className={styles.label} htmlFor="age">
                    Age
                  </label>
                  <p className={styles.age} id="age">
                    {ageCalculator(celebrity.dob)}
                  </p>
                </div>
                <div>
                  <label className={styles.label} htmlFor="gender">
                    Gender
                  </label>
                  <p className={styles.gender} id="gender">
                    {celebrity.gender.toUpperCase()}
                  </p>
                </div>
                <div>
                  <label className={styles.label} htmlFor="country">
                    Country
                  </label>
                  <p className={styles.country} id="country">
                    {celebrity.country}
                  </p>
                </div>
                <div className={styles.descDiv}>
                  <label className={styles.label} htmlFor="description">
                    Description
                  </label>
                  <p className={styles.description} id="description">
                    {celebrity.description}
                  </p>
                </div>
                <div className={styles.buttonDiv}>
                  <button
                    className={styles.but}
                    type="button"
                    data-index={index}
                    onClick={(e) =>
                      handleDelete(e, celebrities, setCelebrities)
                    }
                  >
                    Delete
                  </button>
                  <button
                    className={styles.but}
                    type="button"
                    data-id={celebrity.id}
                    data-index={index}
                    onClick={(e) => {
                      handleEdit(e, celebrities, editCelebrity, setEdit);
                    }}
                  >
                    Edit
                  </button>
                </div>
              </div>
            ) : (
              <></>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Fetch;

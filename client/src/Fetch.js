import { useState, useEffect } from "react";
import styles from "./Fetch.module.css"; // css modules for styling
import OpenCollapseButton from "./OpenCollapseButton"; // open/collapse
import ageCalculator from "./ageCalculator"; // age calculation
import handleDelete from "./handleDelete"; // delete celebrity
const Fetch = () => {
  const [celebrities, setCelebrities] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:5000/celebrities"); // fetch the data from the server
      const data = await response.json();
      const updatedData = data.map((celebrity) => {
        return { ...celebrity, status: "-" };
      });
      setCelebrities(updatedData);
    };
    fetchData();
  }, []);
  const handleEdit = () => {};
  return (
    <div>
      <ul className={styles.celebrities}>
        {celebrities.map((celebrity, index) => (
          <li className={styles.celebrity} key={celebrity.id}>
            <div className={styles.nameState}>
              <p>{`${celebrity.first} ${celebrity.last}`}</p>
              <OpenCollapseButton
                celebrityId={celebrity.id}
                celebrities={celebrities}
                setCelebrities={setCelebrities}
                status={celebrity.status}
              />
            </div>
            {celebrities.length === 0 ? (
              <></>
            ) : celebrity.status === "+" ? (
              <div>
                <label htmlFor="age">Age</label>
                <p id="age">{ageCalculator(celebrity.dob)}</p>
                <label htmlFor="gender">Gender</label>
                <p id="gender">{celebrity.gender}</p>
                <label htmlFor="country">Country</label>
                <p id="country">{celebrity.country}</p>
                <label htmlFor="adescription">Description</label>
                <p id="description">{celebrity.description}</p>
                <button
                  type="button"
                  data-index={index}
                  onClick={(e) => handleDelete(e, celebrities, setCelebrities)}
                >
                  Delete
                </button>
                <button
                  type="button"
                  data-id={celebrity.id}
                  data-index={index}
                  onClick={handleEdit}
                >
                  Edit
                </button>
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

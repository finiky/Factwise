import { useState, useEffect } from "react";
import styles from "./Fetch.module.css";
import OpenCollapseButton from "./OpenCollapseButton";
const Fetch = () => {
  const [celebrities, setCelebrities] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:5000/celebrities");
      const data = await response.json();
      const updatedData = data.map((celebrity) => {
        return { ...celebrity, status: "+" };
      });
      setCelebrities(updatedData);
    };
    fetchData();
  }, []);
  return (
    <div>
      <ul className={styles.celebrities}>
        {celebrities.map((celebrity) => (
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
            ) : celebrity.status === "-" ? (
              <div>
                <p>{celebrity.gender}</p>
                <p>{celebrity.country}</p>
                <p>{celebrity.description}</p>
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

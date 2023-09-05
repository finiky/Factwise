import { useState, useEffect } from "react";
import styles from "./Fetch.module.css";
import OpenCollapseButton from "./OpenCollapseButton";
const Fetch = () => {
  const [celebrities, setcelebrities] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:5000/celebrities");
      const data = await response.json();
      setcelebrities(data);
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
            <OpenCollapseButton state="+" id={celebrity.id} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Fetch;

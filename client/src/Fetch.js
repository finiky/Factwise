import { useState, useEffect } from "react";
import styles from "./Fetch.module.css";
const Fetch = () => {
  const [celebrities, setcelebrities] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:5000/celebrities");
      const data = await response.json();
      console.log(data);
      setcelebrities(data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <ul className={styles.celebrities}>
        {celebrities.map((celebrity) => (
          <li className={styles.celebrity} key={celebrity.id}>
            <p>{`${celebrity.first} ${celebrity.last}`}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Fetch;

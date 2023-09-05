import { useState, useEffect } from "react";
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
      {/* <ul>
        {celebrities.map((celebrity) => (
          <li key={celebrity.id}>
            <p>{celebrity.first}</p>
            <p>{celebrity.first}</p>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default Fetch;

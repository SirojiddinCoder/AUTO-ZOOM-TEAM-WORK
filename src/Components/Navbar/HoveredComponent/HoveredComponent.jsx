import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../HoveredComponent/HoveredComponent.module.css";

const HoveredComponent = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const imgURL = "https://autoapi.dezinfeksiyatashkent.uz/api/uploads/images";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://autoapi.dezinfeksiyatashkent.uz/api/brands"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setData(data?.data || []);
      } catch (error) {
        setError(error.message || "Error fetching data");
      } 
    };

    fetchData();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }
  return (
    <div>
      <ul className={styles.container}>
        {data.map((item, index) => (
          <Link to={`/cars_filter/${item.id}`} className={styles.small_container} key={index}>
            <li className={styles.item}>
              <img
                src={`${imgURL}/${item?.image_src}`}
                alt={item?.title}
                className={styles.img}
              />
              <h4>
                <span className={styles.bold}>Rent</span>
                <span className={styles.name}>{item?.title}</span>
                <span className={styles.bold}>Dubai</span>
              </h4>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default HoveredComponent;

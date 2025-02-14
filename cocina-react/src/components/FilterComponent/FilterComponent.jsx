import React, { useState, useRef } from "react";
import styles from './FilterComponent.module.css'

const FilterComponent = ({title,items,selectedItem,setSelectedItem,handleItemClick,}) => {
  const containerRef = useRef(null);

  const scrollHorizontally = (direction) => {
    if (containerRef.current) {
      const offset = direction === "left" ? -200 : 200; 
      containerRef.current.scrollBy({
        left: offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <span className={styles.tittle_categories}>{title}</span>

      <div className={styles.food_categories_wrapper}>
        <button className={styles.scroll_button} onClick={() => scrollHorizontally("left")}>
          &#8592;
        </button>

        <div ref={containerRef} className={styles.food_categories_container}>
          {items.map((item) => (
            <div key={item.id} className={`${styles.food_categories} ${selectedItem === item.name ? styles.active : "" }`}
              onClick={() => handleItemClick(item.name)}
            >
              <img src={item.image || "https://www.svgrepo.com/show/4151/food.svg"} alt={item.name}/>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
        <button className={styles.scroll_button} onClick={() => scrollHorizontally("right")}>
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default FilterComponent;
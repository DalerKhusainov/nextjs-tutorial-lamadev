// NEXTJS HOOKS
import Image from "next/image";
import { notFound } from "next/navigation";
// COMPONENTS
import Button from "@/components/button/Button";
// STYLES
import styles from "./page.module.css";
// IMPORTING LOCAL DATA
import { items } from "./data";

// FETCHING LOCAL DATA FUNCTION
const getData = (category) => {
  const data = items[category];

  if (data) return data;

  return notFound();
};

const Category = ({ params }) => {
  // WHY category? BECAUSE OUR FOLDER NAME IS category
  const data = getData(params.category);
  return (
    <div className={styles.container}>
      <h1 className={styles.categoryTitle}>{params.category}</h1>

      {/* ITEM  */}
      {data.map((item) => {
        return (
          <div className={styles.item} key={item.id}>
            <div className={styles.content}>
              <h2 className={styles.title}>{item.title}</h2>
              <p className={styles.description}>{item.desc}</p>
              <Button text="See more" url="#" />
            </div>
            <div className={styles.imgContainer}>
              <Image
                className={styles.img}
                fill={true}
                src={item.image}
                alt=""
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Category;

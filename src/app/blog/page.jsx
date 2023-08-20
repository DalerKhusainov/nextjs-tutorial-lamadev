// NEXTJS HOOKS
import Image from "next/image";
import Link from "next/link";
// STYLES
import styles from "./page.module.css";

// FETCHING DATA
async function getData() {
  const res = await fetch("http://localhost:3000/api/posts", {
    next: { revalidate: 10 },
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Blog = async () => {
  const data = await getData();
  return (
    <div className={styles.mainContainer}>
      {data.map((item) => {
        return (
          <Link
            key={item._id}
            href={`/blog/${item._id}`}
            className={styles.container}
          >
            <div className={styles.imgContainer}>
              <Image
                src={item.img}
                alt=""
                width={400}
                height={250}
                className={styles.img}
              />
            </div>
            <div className={styles.content}>
              <h1 className={styles.title}>{item.title}</h1>
              <p className={styles.description}>{item.desc}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Blog;

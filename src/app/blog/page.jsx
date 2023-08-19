// NEXTJS HOOKS
import Image from "next/image";
import Link from "next/link";
// STYLES
import styles from "./page.module.css";

// FETCHING DATA
async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: "no-store",
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
            key={item.id}
            href={`/blog/${item.id}`}
            className={styles.container}
          >
            <div className={styles.imgContainer}>
              <Image
                src="https://images.pexels.com/photos/5563009/pexels-photo-5563009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                width={400}
                height={250}
                className={styles.img}
              />
            </div>
            <div className={styles.content}>
              <h1 className={styles.title}>{item.title}</h1>
              <p className={styles.description}>Desc</p>
            </div>
          </Link>
        );
      })}

      {/* <Link href="/blog/testId" className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/5563009/pexels-photo-5563009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={400}
            height={250}
            className={styles.img}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Text</h1>
          <p className={styles.description}>Desc</p>
        </div>
      </Link>

      <Link href="/blog/testId" className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/5563009/pexels-photo-5563009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={400}
            height={250}
            className={styles.img}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Text</h1>
          <p className={styles.description}>Desc</p>
        </div>
      </Link> */}
    </div>
  );
};

export default Blog;

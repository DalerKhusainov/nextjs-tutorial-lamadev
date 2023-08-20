"use client";
// NEXTJS HOOKS
import { useRouter } from "next/navigation";
// STYLES
import styles from "./page.module.css";
// IMPORTING SWR FETCHING API FUNCTION
import useSWR from "swr";
// NEXT AUTH HOOKS
import { useSession } from "next-auth/react";
import Image from "next/image";

const Dashboard = () => {
  const session = useSession();
  const router = useRouter();

  // FETCHING DATA
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading, mutate } = useSWR(
    `/api/posts?/username=${session?.data?.user.name}`,
    fetcher
  );

  if (session.status === "loading") {
    return <div>Loading...</div>;
  }

  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }

  if (session.status === "authenticated") {
    // SUBMIT HANDLER
    const handleSubmit = async (e) => {
      e.preventDefault();

      const title = e.target[0].value;
      const desc = e.target[1].value;
      const img = e.target[2].value;
      const content = e.target[3].value;

      try {
        await fetch("/api/posts", {
          method: "POST",
          body: JSON.stringify({
            title,
            desc,
            img,
            content,
            username: session.data.user.name,
          }),
        });
        // WHEN WE ADD ANY DATA WE CAN REVALIDATE OUR DATA
        mutate();
        e.target.reset();
      } catch (error) {
        console.log(error);
      }
    };

    const handleDelete = async (id) => {
      try {
        await fetch(`/api/posts/${id}`, {
          method: "DELETE",
        });
        mutate();
      } catch (error) {}
    };

    return (
      <div className={styles.container}>
        <div className={styles.posts}>
          {isLoading
            ? "loading"
            : data?.map((post) => (
                <div className={styles.post} key={post._id}>
                  <div className={styles.imgContainer}>
                    <Image
                      className={styles.img}
                      src={post.img}
                      alt=""
                      width={200}
                      height={100}
                    />
                  </div>
                  <h2 className={styles.postTitle}>{post.title}</h2>
                  <span
                    className={styles.delete}
                    onClick={() => handleDelete(post._id)}
                  >
                    X
                  </span>
                </div>
              ))}
        </div>
        <form className={styles.new} onSubmit={handleSubmit}>
          <h1>Add New Post</h1>
          <input type="text" placeholder="Title" className={styles.input} />
          <input type="text" placeholder="Desc" className={styles.input} />
          <input type="text" placeholder="Image" className={styles.input} />
          <textarea
            placeholder="Content"
            className={styles.textArea}
            cols="30"
            rows="10"
          ></textarea>
          <button className={styles.button}>Send</button>
        </form>
      </div>
    );
  }
};

export default Dashboard;

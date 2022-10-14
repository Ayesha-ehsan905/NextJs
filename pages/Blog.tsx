import React, { useEffect, useState } from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";

const Blog = (props) => {
  const [allbolgs, setallbolgs] = useState(props.allbolgs);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {allbolgs.map((items) => {
          return (
            <div className="blogItem" key={items.title}>
              <Link href={`/posts/blogpost/${items.slug}`}>
                <h3 className={styles.blogItemh3}>{items.title}</h3>
              </Link>
              <p>{items.content.substr(0, 90)}.....</p>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export async function getServerSideProps(context) {
  let data = await fetch("http://localhost:3000/api/blogs");
  let allbolgs = await data.json();
  return {
    props: { allbolgs },
  };
}

export default Blog;

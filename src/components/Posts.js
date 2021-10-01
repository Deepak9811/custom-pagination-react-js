import React from "react";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  console.log("post dk", posts);
  return (
    <div>
      <ul className="list-group mb-4">
        {posts.map((post, i) => (
          <li key={post.id} className="list-group-item">
            {post.id + ".  " + post.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;

import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";
const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    isPending,
    error,
  } = useFetch(`http://localhost:8000/blogs/${id}`);

  const navigate = useNavigate();

  const handleClick = () => {
    fetch(`http://localhost:8000/blogs/${id}`, {
      method: "delete",
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <>
      <div className="blog-details">
        {error && <div className="">{error}</div>}
        {isPending && (
          <div className="loading">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3305/3305803.png"
              alt="loading"
              className="spin"
            />
            <span>Loading...</span>
          </div>
        )}

        {blog && (
          <article>
            <button onClick={handleClick}>Delete</button>
            <h2> {blog.title}</h2>
            <p>written by {blog.author}</p>
            <div>{blog.body}</div>
          </article>
        )}
      </div>
    </>
  );
};

export default BlogDetails;

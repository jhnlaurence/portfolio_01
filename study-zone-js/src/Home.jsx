import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <>
      <div className="home">
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

        {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
      </div>
    </>
  );
};

export default Home;

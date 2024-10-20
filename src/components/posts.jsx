import { Suspense, lazy, useEffect, useState } from "react";
import { Post } from "./post";


const LazyPost = lazy(() => import('./post.jsx'));

export const Posts = () => {
  const [posts, setPosts] = useState(null);

  const [users, setUsers] = useState(null);
  const [showAllPosts, setShowAllPosts]= useState(null);

  useEffect(() => {
    const fetchPosts = fetch("https://dummy-json.mock.beeceptor.com/posts")
      .then((data) => data.json())
      .then((data) => {
        localStorage.setItem("posts", JSON.stringify(data));

        return setPosts(JSON.parse(localStorage.getItem("posts")));
      });

    const fetchUsers = fetch("https://fake-json-api.mock.beeceptor.com/users")
      .then((data) => data.json())
      .then((data) => {
        localStorage.setItem("users", JSON.stringify(data));

        return setUsers(JSON.parse(localStorage.getItem("users")));
      });
  }, []);

  return (
    <>
      <h1> Posts </h1>
      {posts ? (
        <>

        {users && posts.map((p) => {
          if (p.id <= 6) {
            return <Post key={p.id} post={p} user={users.find((u) => u.id === p.id)} />;
          }
          return null;
        })}
          {showAllPosts ? null : <button onClick={()=>  setShowAllPosts(true)}> load more </button>}
          { showAllPosts &&(
            <Suspense fallback={<span>Loading ...</span>}>
              {
               posts.map(p => {
                if(p.id > 6) {
                return (
                  <LazyPost key={p.id} post={p} user={users.find((u) => u.id === p.id)} />
                  )
                  }
                return null;
                  
              }
              )
              }
            </Suspense>
            )}
       </>


        )
        
       : (
        <p> no posts </p>
      )}
    </>
  );
};

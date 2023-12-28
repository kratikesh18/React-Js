import React, {  useEffect, useState } from "react";
import dbService from "../appwrite/config";
import { Container, PostCard } from "../Components";

function Home() {
  const [posts, setPosts] = useState([]);

  
  useEffect(() => {
    dbService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <div>
        <Container>
          <div className="h-[20rem] flex justify-center items-center">
            <div className="">
              <h1 className="text-2xl font-bold">Login to read the posts </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  }
  return (
    <div>
      <Container>
        {posts.map((post) => (
          <div key={post.$id}>
            <PostCard {...post} />
          </div>
        ))}
      </Container>
    </div>
  );
}

export default Home;

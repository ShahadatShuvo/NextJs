import { Button } from "@mui/material";
import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";
import MetaTags from "../../components/Meta";

function Blogs({ postItem }) {
  return (
    <div>
      <MetaTags
        title={postItem.title}
        description={postItem.body}
        keywords="blog, myBlog"
      />
      {postItem ? (
        <div>
          <div className="flex justify-center items-center relative">
            <div className="absolute left-0 top-[-20%] md:top-0">
              <Link href="/blog">
                <Button
                  size="small"
                  variant="text"
                  startIcon={<ArrowBackIcon />}
                >
                  Show All Blogs
                </Button>
              </Link>
            </div>
            <h1 className="mt-8 md:mt-0">Blog id - {postItem?.id}</h1>
          </div>
          <h3 className="text-center mt-3 text-lg md:text-2xl ml-5 uppercase">
            {postItem?.title}
          </h3>
          <p className="text-sm md:text-base text-center mt-5">
            {postItem?.body}
          </p>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts/" + context.params.id
  );
  const postItem = await res.json();

  return {
    props: {
      postItem,
    },
  };
}

export default Blogs;

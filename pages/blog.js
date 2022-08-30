import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import MetaTags from "../components/Meta";

function Blog({ posts }) {
  console.log("posts: ", posts);

  return (
    <div>
      <MetaTags
        icon="/Blogfavicon.ico"
        title="Blogs"
        description="this is blog page"
        keywords="blog, myBlog"
      />
      <h2 className="text-3xl text-center">Welcome to Blog page</h2>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-5 mx-auto">
          <div className="flex flex-wrap -m-2">
            {posts.map((post) => (
              <div key={post.id} className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <div className="mr-4">
                    <Image
                      className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full"
                      src="/98x98.png"
                      alt="Picture of the author"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">
                      {post.id}. {post.title.substr(0, 20)}...
                    </h2>
                    <div className="flex justify-between">
                      <p className="text-gray-500">
                        {post.body.substr(0, 25)}...
                      </p>
                      <Link href="/blogs/[id]" as={`/blogs/${post.id}`}>
                        <Button size="small" variant="text">
                          Details
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10"
  );
  const posts = await res.json();

  return {
    props: {
      posts,
    }, // will be passed to the page component as props
  };
}

export default Blog;

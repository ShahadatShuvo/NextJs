import React from "react";
import { useRouter } from "next/router";

function Blogs() {
  const router = useRouter();
  const { id } = router.query;
  return <div>Blogs - {id}</div>;
}

export default Blogs;

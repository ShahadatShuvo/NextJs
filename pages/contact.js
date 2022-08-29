import Head from "next/head";
import React from "react";
import MetaTags from "../components/Meta";

function contact() {
  return (
    <div>
      <Head>
        <title>Contact</title>
      </Head>
      <MetaTags />
      <h2 className="text-3xl text-center">Welcome to contact page</h2>
    </div>
  );
}

export default contact;

import Head from "next/head";
import React from "react";
import MetaTags from "../components/Meta";

function about() {
  return (
    <div>
      <MetaTags
        title="About"
        description="this is contact page"
        keywords="contacts, phone"
      />
      <h2 className="text-3xl text-center">Welcome to About page</h2>
      <p className="mt-5">
        Shahadat Shuvo is a 24-year-old health centre receptionist who enjoys
        watching television, listening to the radio and writing. He is creative
        and friendly, but can also be very dull and a bit untidy. He is
        Bangladeshi. He has a degree in medicine. He has a severe phobia of
        crocodiles, and is obsessed with selfies. Physically, Shahadat is in
        pretty good shape. He is average-height with olive skin, blonde hair and
        blue eyes. Unusually, he has a prosthetic leg; a lion ate his. He grew
        up in a working class neighbourhood. His parents separated when he was
        small, but remained friends and provided a happy, stable home. He is
        currently single. His most recent romance was with an electrician called
        Sierra Lydia Marshall, who was 14 years older than him. They broke up
        because Sierra wanted somebody more badass. Shahadat has one child with
        ex-girlfriend Sierra: Sonny aged 2. Shahadats best friend is a health
        centre receptionist called Arnold Chen. They are inseparable. He also
        hangs around with Sian Moss and Poppy Hunt. They enjoy camping together.
        For privacy reasons, your creation will be removed from the web at
        12:59pm BST and later deleted from our server, unless you choose to
        publish it.
      </p>
    </div>
  );
}

export default about;

import Image from "next/image";
import React from "react";

function Blog() {
  return (
    <div>
      <h2 className="text-3xl text-center">Welcome to Blog page</h2>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-5 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <div className="mr-4">
                  <Image
                    class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full"
                    src="/98x98.png"
                    alt="Picture of the author"
                    width={50}
                    height={50}
                  />
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">
                    Boris Kitua
                  </h2>
                  <p className="text-gray-500">UX Researcher</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <div className="mr-4">
                  <Image
                    class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full"
                    src="/98x98.png"
                    alt="Picture of the author"
                    width={50}
                    height={50}
                  />
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">
                    Boris Kitua
                  </h2>
                  <p className="text-gray-500">UX Researcher</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <div className="mr-4">
                  <Image
                    class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full"
                    src="/98x98.png"
                    alt="Picture of the author"
                    width={50}
                    height={50}
                  />
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">
                    Boris Kitua
                  </h2>
                  <p className="text-gray-500">UX Researcher</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <div className="mr-4">
                  <Image
                    class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full"
                    src="/98x98.png"
                    alt="Picture of the author"
                    width={50}
                    height={50}
                  />
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">
                    Boris Kitua
                  </h2>
                  <p className="text-gray-500">UX Researcher</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <div className="mr-4">
                  <Image
                    class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full"
                    src="/98x98.png"
                    alt="Picture of the author"
                    width={50}
                    height={50}
                  />
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">
                    Boris Kitua
                  </h2>
                  <p className="text-gray-500">UX Researcher</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <div className="mr-4">
                  <Image
                    class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full"
                    src="/98x98.png"
                    alt="Picture of the author"
                    width={50}
                    height={50}
                  />
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">
                    Boris Kitua
                  </h2>
                  <p className="text-gray-500">UX Researcher</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;

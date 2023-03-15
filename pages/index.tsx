import Head from "next/head";
import { useState } from "react";
import {
  AiFillDribbbleCircle,
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
} from "react-icons/ai";
import { Navigation } from "../components/navigation";

export default function Home(this: any) {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Cindy Yuen Portfolio</title>
        <meta name="description" content="cindy yuen portfolio" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0 "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10 md:px-36 lg:px-60 text-center py-4 gap-4  dark:bg-gray-900 ">
        <Navigation
          darkMode={darkMode}
          setDarkMode={() => setDarkMode(!darkMode)}
        />

        <section className="my-44">
          <div className="text-left font-mono  ">
            <h2 className=" text-left  text-teal-400 font-bold md:text-5xl  hover:text-purple-300">
              {" "}
              CINDY YUEN
            </h2>
            <h3 className=" font-medium font-sans text-left py-6 md:text-xl dark:text-white">
              {" "}
              I’m a UXUX designer thrilled to provide better experience for
              people.
            </h3>
            <p className="text-left py-2 md:text-lg font-sans  dark:text-zinc-200">
              I have a passion for design thinking, user research, user
              interface design, typography and use experience storytelling. I
              hope everyone has good experience on using a product.
            </p>
          </div>
          <div className="text-4xl flex text-left gap-8 py-6 text-gray-500">
            <a
              className="AiFillMail   hover:text-black  dark:hover:text-white"
              href="mailto:cindyyuen1011@gmail.com"
            >
              {" "}
              <AiFillMail />{" "}
            </a>
            <a
              className="AiFillMail   hover:text-black dark:hover:text-white"
              href="https://www.linkedin.com/in/cindy-yuen/"
            >
              {" "}
              <AiFillLinkedin />{" "}
            </a>
            <a
              className="AiFillMail  hover:text-black  dark:hover:text-white"
              href="https://github.com/cindyuen"
            >
              {" "}
              <AiFillGithub />{" "}
            </a>
            <a
              className="AiFillMail hover:text-black dark:hover:text-white"
              href="https://dribbble.com/cindyyuen"
            >
              <AiFillDribbbleCircle />{" "}
            </a>
          </div>

          <div>
            <h3 className="text-xl text-left font-bold font-mono pt-14 dark: text-gray-500 underline  hover:text-teal-400 ">
              PORTFOLIO
            </h3>

            <div className="py-2 grid grid-cols-2 md:grid-cols-2 gap-6  ">
              <div className="flex flex-col text-center shadow-lg p-10 rounded-xl my-8 dark:bg-white">
                <iframe
                  allowFullScreen
                  className="fp-iframe white w-full h-96"
                  src="https://heyzine.com/flip-book/185e9d2fa5.html"
                ></iframe>
                <h3 className=" text-left  text-black font-bold md:text-xl py-6">
                  Postal Museum AR App
                </h3>
                <p className=" text-left  text-black font-normal md:text-lg py-0">
                  In this project, I used Figma and Miro as my design and design
                  thinking tools.
                </p>
                <div className=" flex flex-col text-center p-4 rounded-xl my-4  dark:bg-white"></div>
              </div>

              <div className="flex flex-col text-center shadow-lg p-10 rounded-xl my-8 dark:bg-white">
                <iframe
                  allowFullScreen
                  className="fp-iframe white w-full h-96"
                  src="https://heyzine.com/flip-book/185e9d2fa5.html"
                ></iframe>
                <h3 className=" text-left  text-black font-bold md:text-xl py-6">
                  Postal Museum AR App
                </h3>
                <p className=" text-left  text-black font-normal md:text-lg py-0">
                  Figma
                </p>
                <div className=" flex flex-col text-center p-4 rounded-xl my-4  dark:bg-white"></div>
              </div>
              <div className="footer ">
                <div className="horizontal text-white"></div>
              </div>
            </div>
          </div>
        </section>

        <p className="text-right dark:text-neutral-400">
          Designed and developed by Cindy Yuen
        </p>
      </main>
    </div>
  );
}

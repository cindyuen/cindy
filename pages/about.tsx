import Head from "next/head";
import { useState } from "react";
import {
  AiFillDribbbleCircle,
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
} from "react-icons/ai";
import { Navigation } from "../components/navigation";

export default function About() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div>
        {/* <Navigation
        darkMode={darkMode}
        setDarkMode={() => setDarkMode(!darkMode)}
      /> */}

        <Head>
          <title>Cindy Yuen Portfolio</title>
          <meta name="description" content="cindy yuen portfolio" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link rel="icon" href="/cindy.favicon.ico.png" />
        </Head>

        <main className=" bg-white px-10 md:px-36 lg:px-60 text-center py-4 gap-4  dark:bg-gray-900  ">
          <Navigation
            darkMode={darkMode}
            setDarkMode={() => setDarkMode(!darkMode)}
          />
          <section className="my-40">
            <div className="relative grid grid-cols-2 gap-8  ">
              <h2 className=" text-left  text-teal-400 font-bold md:text-5xl display:block hover:text-purple-300 ">
                {" "}
                Hiya, I'm Cindy!
                <p className="text-left font-semibold display:block md:text-xl text-gray-800 py-5  dark:text-white">
                  I'm a User Experience Design student at the Kingston
                  University and I hope to emerge technology and design in
                  helping people.
                </p>
                <p className="text-left font-normal display:block md:text-lg text-gray-800 py-0  dark:text-white">
                  I solve problems using my building blocks of design and
                  development to make the world a better place. To me, learning
                  is a lifelong journey and it never stops. When I'm not
                  collaborating with others on fun projects, you can find me
                  drawing, watching the latest Star Wars show or playing video
                  games.
                </p>
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
              </h2>

              <img
                layout="fill"
                alt="myself"
                objectFit="contain"
                src="/myself.jpg"
              />
            </div>
          </section>

          <p className="text-right dark:text-neutral-400">
            Designed and developed by Cindy Yuen
          </p>
        </main>
      </div>
    </div>
  );
}

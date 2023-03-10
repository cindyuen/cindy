import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";

import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillDribbbleCircle,
  AiFillMessage,
  AiFillGithub,
  AiFillMail,
} from "react-icons/ai";
import Image from "next/image";
import deved from "../public/undraw.svg";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import { useState } from "react";

export default function Home(this: any) {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Cindy Yuen Portfolio</title>
        <meta name="description" content="cindy yuen portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10 md:px-36 lg:px-60 text-center py-4 dark:bg-gray-900 gap-4">
        <nav className="py-2 mb-12 flex justify-between ">
          <h1 className="mt-2 text-lg flex font-bold dark:text-white font-mono ">
            {" "}
            CINDYYUEN{""}
               
          </h1>
          <ul className="flex items-center text-right   ">
            <li className=" dark:text-white m-0 p-0 ">
              <button className="mt-2" onClick={() => setDarkMode(!darkMode)}>
                {" "}
                {darkMode ? (
                  <BsFillSunFill className="h-5 w-5" />
                ) : (
                  <BsFillMoonStarsFill className="h-5 w-5" />
                )}
              </button>
            </li>

            <li>
              
              <a
                className=" font-mono text-lg text-black font-bold px-4 py-2 rounded-md ml-8 dark:text-white"
                href="https://drive.google.com/file/d/12zWu-43a81q7D52c09xo6WSIr8jvQ26-/view?usp=share_link"
                target="_blank"
              >
                {" "}
                <button>About</button>
              </a>
            </li>
            <li>
               <a
                className=" text-center font-mono  text-lg  font-bold bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                href="https://drive.google.com/file/d/12zWu-43a81q7D52c09xo6WSIr8jvQ26-/view?usp=share_link"
                target="_blank"
              >
                {" "}
                <button>Resume</button>
                </a>
                </li>
          </ul>
        </nav>
        <section className="my-44">
          <div className="text-left ">
            <h2 className=" text-left  text-teal-400 font-bold md:text-5xl">
              {" "}
              Cindy Yuen
            </h2>
            <h3 className=" font-medium font-mono text-left py-6 md:text-xl dark:text-white">
              {" "}
              I’m a UXUIX designer thrilled to provide better experience for people.
            </h3>
            <p className="text-left py-2 md:text-lg font-mono  dark:text-zinc-200">
              I have a passion for design thinking, user research, user
              interface design, typography and use experience storytelling. I hope everyone has good experience on using a product.
            </p>
          </div>
          <div className="text-4xl flex text-left gap-8 py-6 text-gray-500">
            <AiFillMail />
            <AiFillLinkedin />
            <AiFillGithub />
            <AiFillDribbbleCircle/>
          </div>
      
        <div>
          <h3  className="text-xl text-left font-bold font-mono py-28 dark: text-gray-500 underline ">
            PORTFOLIO
          </h3>
      
          <div className="py-2 grid grid-cols-2 md:grid-cols-2 gap-6  ">
            <div className="flex flex-col text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
             
              <iframe
                allowFullScreen
                className="fp-iframe white w-full h-96"
                src="https://heyzine.com/flip-book/185e9d2fa5.html"
              ></iframe>
   <h3 className=" text-left  text-black font-bold md:text-xl py-8">
                Postal Museum AR App
              </h3>
              <p className=" text-left  text-black font-normal md:text-lg py-2">
              Figma
              </p>
              <div className=" flex flex-col text-center p-4 rounded-xl my-4  dark:bg-white"></div>
            </div>

            <div className="flex flex-col text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
         
              <div />
          


              <iframe
                allowFullScreen
                className="fp-iframe white w-full h-96"
                src="https://heyzine.com/flip-book/185e9d2fa5.html"
              ></iframe>
                 <h3 className=" text-left  text-black font-bold md:text-xl py-8">
                Postal Museum AR App
              </h3>
              <p className=" text-left  text-black font-normal md:text-lg py-2">
              Figma
              </p>
              <div className=" flex flex-col text-center p-4 rounded-xl my-4  dark:bg-white"></div>
            </div>
</div>
</div>
        </section>
      </main>
    </div>
  );
}

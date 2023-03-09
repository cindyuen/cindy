
import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { BsFillSunFill} from "react-icons/bs";

import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillDribbbleCircle,
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
      
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl Chalkboard font-bold dark:text-white">
              {" "}
              CINDY YUEN{" "}
            </h1>
            <ul className="flex items-center">
          
                <li className=" dark:text-white m-0 p-0 ">
                  <button className="mt-2" onClick={() => setDarkMode(!darkMode)}> {darkMode ? <BsFillMoonStarsFill className="h-5 w-5"/> : <BsFillSunFill className="h-5 w-5" />}</button>
        
                </li>
            
           
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="https://drive.google.com/file/d/12zWu-43a81q7D52c09xo6WSIr8jvQ26-/view?usp=share_link" target="_blank"
                > <button>Resume</button>
            
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              {" "}
              Cindy Yuen
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
              {" "}
              UXUI Designer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md-text-xl ma-w-lg mx-auto dark:text-white">
              I have a passion for design thinking, user research, user
              interface design, typography and use experience storytelling.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-12 py-3 text-gray-600">
            <AiFillInstagram />
            <AiFillLinkedin />
            <AiFillDribbbleCircle />
          </div>
     
        </section>
        <div>
          <h3 className='="text-5xl text-center bold py-1 dark:text-white '>Portfolio</h3>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-white ">
            I have a passion for design thinking, user research, user interface
            design, typography and use experience storytelling.
            <span className="text-teal-500">typography</span> use experience{" "}
            <span className="text-teal-500">passion</span>
            terface design, typography and use experience st
          </p>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-white ">
            I have a passion for design thinking, user research, user interface
            design, typography and use experience storytelling.
          </p>
        </div>

        <section>
         

          <div className="lg:flex gap-10" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4" >
            <div className="flex flex-col text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
            <iframe allowFullScreen className="fp-iframe white w-full h-96" src="https://heyzine.com/flip-book/185e9d2fa5.html"   ></iframe>
   
   <div className=" flex flex-col text-center p-4 rounded-xl my-4  dark:bg-white">
     </div>

            
            </div>

            <div className="flex flex-col text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <div />
           
    
               <iframe allowFullScreen className="fp-iframe white w-full h-96" src="https://heyzine.com/flip-book/185e9d2fa5.html"   ></iframe>
   
   <div className=" flex flex-col text-center p-4 rounded-xl my-4  dark:bg-white">
     </div>

     
              
            </div>

            <div className="flex flex-col text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <div />
              <iframe allowFullScreen className="fp-iframe white w-full h-96" src="https://heyzine.com/flip-book/185e9d2fa5.html"   ></iframe>
   
   <div className=" flex flex-col text-center p-4 rounded-xl my-4  dark:bg-white">
     </div>
            </div>
           
            </div>
        </section>
      
    

      
        
      
            
              
  

</main>
    </div>


       
       
  );
}

import Link from "next/link";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

export const Navigation = ({
  setDarkMode,
  darkMode,
}: {
  setDarkMode: () => void;
  darkMode: boolean;
}) => {
  return (
    <nav className="py-2 mb-12 flex justify-between gap-2">
      <h1 className="mt-2 text-lg flex font-bold dark:text-white font-mono dark:hover:text-teal-400 hover:text-teal-400">
        <Link href="/">CINDYYUEN</Link>
      </h1>

      <ul className="flex items-center space-x-2 md:space-x-4">
        <li className="dark:text-white m-0 p-0">
          <button className="mt-2" onClick={setDarkMode}>
            {darkMode ? (
              <BsFillSunFill className="h-5 w-5 hover:text-amber-400" />
            ) : (
              <BsFillMoonStarsFill className="h-5 w-5  hover:text-amber-400" />
            )}
          </button>
        </li>

        <li>
          <Link
            href="/about"
            className="font-mono text-base md:text-lg hover:text-teal-400 dark:hover:text-teal-400 text-black font-bold px-4 py-2 rounded-md dark:text-white"
          >
            About
          </Link>
        </li>
        <li>
          <a
            className="text-center font-mono text-base md:text-lg font-bold bg-gradient-to-r from-teal-300 to-purple-300 text-white px-4 py-2 rounded-md"
            href="https://drive.google.com/file/d/1BanmSU-Gpic7OVSHMAr7Tr2oFVo2N4VT/view?usp=sharing"
            target="_blank"
          >
            <button>Resume</button>
          </a>
        </li>
      </ul>
    </nav>
  );
};

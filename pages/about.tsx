import { useState } from "react";
import { Navigation } from "../components/navigation";

export default function About() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div>
      <Navigation
        darkMode={darkMode}
        setDarkMode={() => setDarkMode(!darkMode)}
      />
    </div>
  );
}

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import { useState, useEffect } from "react";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    document.body.style.backgroundColor = isDarkMode ? "#121212" : "#39d797";
    document.body.style.color = isDarkMode ? "#39d797" : "#000000";
  }, [isDarkMode]);

  const handleToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div style={{ padding: "20px" }}>
      <button
        onClick={handleToggle}
        style={{ padding: "10px 20px", fontSize: "16px" }}
      >
        Toggle {isDarkMode ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
};

const Project = () => {
  return (
    <div>
      <h3>Privacy Audit</h3>
      <p>
        Ghost Audit is a user-friendly consumer privacy audit tool that ensures
        digital protection by scanning for and provide active recommendations on
        how you can better protect your digital identity
      </p>
      <a href="https://github.com/branic18/ghost-audit">Github link</a>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1>My Portfolio</h1>
      <DarkModeToggle />
      <h2>About Me</h2>
      <p>
        Software Engineer @resilientcoders | UX brain 🧠 | Creative Technologist
        experienced in user-friendly front-end 🎨 and web-based back-end 🛠️
      </p>
      <h2>Projects</h2>
      <Project />
    </div>
  );
};

export default App;

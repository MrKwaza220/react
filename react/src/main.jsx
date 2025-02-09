import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

const[first,second, third] = [
  "Lion",
  "Tiger",
  "Bear",
  "Elephant",
];

console.log(first, second,third);

createRoot(document.getElementById("root")).render(<App />);

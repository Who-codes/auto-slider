import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
import { useState } from "react";

function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);
  return <section className="section"></section>;
}

export default App;

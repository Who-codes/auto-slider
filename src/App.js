import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
import { useState } from "react";

function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);
  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span> reviews
        </h2>
        <section className="section-center">
          {people.map((data, dataIndex) => {
            const { id, name, image, title, quote } = data;
            let position = "nextSlide";
            if (index === dataIndex) {
              position = "activeSlide";
            }
            return (
              <article className={position} key={id}>
                <img src={image} alt={name} className="person-img" />
                <h4>{name}</h4>
                <p className="title">{title}</p>
                <p className="text">{quote}</p>
                <FaQuoteRight />
              </article>
            );
          })}
          <button className="prev">
            <FiChevronLeft />
          </button>
          <button className="next">
            <FiChevronRight />
          </button>
        </section>
      </div>
    </section>
  );
}

export default App;

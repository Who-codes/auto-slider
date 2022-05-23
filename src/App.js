import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
import { useEffect, useState } from "react";

function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lasdtIndex = people.length - 1;
    if (index < 0) {
      setIndex(lasdtIndex);
    }
    if (index > lasdtIndex) {
      setIndex(0);
    }
  }, [index, people]);
  return (
    <section className="section">
      <div className="titles">
        <h2>
          <span>/</span> reviews
        </h2>
        <section className="section-center">
          {people.map((person, personIndex) => {
            const { id, name, image, title, quote } = person;
            let position = "nextSlide";
            if (index === personIndex) {
              position = "activeSlide";
            }
            if (
              personIndex === index - 1 ||
              (index === 0 && personIndex === data.length)
            ) {
              position = "lastSlide";
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
          <button className="prev" onClick={() => setIndex(index - 1)}>
            <FiChevronLeft />
          </button>
          <button className="next" onClick={() => setIndex(index + 1)}>
            <FiChevronRight />
          </button>
        </section>
      </div>
    </section>
  );
}

export default App;

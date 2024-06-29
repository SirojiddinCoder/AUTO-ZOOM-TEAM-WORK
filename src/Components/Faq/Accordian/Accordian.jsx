import { useState } from "react";
import "../Accordian/Accordian.css";
import { IoIosArrowDroprightCircle } from "react-icons/io";


const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? "active" : "";

    return (
      <div key={item.title} className="accordion-item">
        <div
          className={`accordion-title ${active}`}
          onClick={() => onTitleClick(index)}
        >
          <i className="dropdown icon"></i>
          <IoIosArrowDroprightCircle className="dropdown icon"/>
          {item.title}

        </div>
        <div className={`accordion-content ${active}`}>
          <p>{item.content}</p>
        </div>
      </div>
    );
  });

  return <div className="accordion">{renderedItems}</div>;
};

export default Accordion;
